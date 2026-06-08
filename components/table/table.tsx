"use client";

import { useMemo, useState } from "react";

type Column<T> = {
  key: keyof T;
  label: string;
};

type TableProps<T> = {
  data: T[];
  columns: ReadonlyArray<Column<T>>;
};

export default function Table<
  T extends { id: string }
>({
  data,
  columns,
}: TableProps<T>) {
  const [search, setSearch] =
    useState("");

  const [sortKey, setSortKey] =
    useState<keyof T | null>(null);

  const [sortOrder, setSortOrder] =
    useState<"asc" | "desc">("asc");

  const filteredAndSorted =
    useMemo(() => {
      const filtered = data.filter(
        (item) =>
          JSON.stringify(item)
            .toLowerCase()
            .includes(
              search.toLowerCase()
            )
      );

      if (!sortKey)
        return filtered;

      return [...filtered].sort(
        (a, b) => {
          const aValue =
            a[sortKey];
          const bValue =
            b[sortKey];

          if (aValue == null)
            return 1;
          if (bValue == null)
            return -1;

          if (aValue < bValue)
            return sortOrder ===
              "asc"
              ? -1
              : 1;

          if (aValue > bValue)
            return sortOrder ===
              "asc"
              ? 1
              : -1;

          return 0;
        }
      );
    }, [
      data,
      search,
      sortKey,
      sortOrder,
    ]);

  const handleSort = (
    key: keyof T
  ) => {
    if (sortKey === key) {
      setSortOrder((prev) =>
        prev === "asc"
          ? "desc"
          : "asc"
      );
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  return (
    <div className="w-full">
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered mb-4 w-full"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              {columns.map(
                (column) => (
                  <th
                    key={String(
                      column.key
                    )}
                    className="cursor-pointer"
                    onClick={() =>
                      handleSort(
                        column.key
                      )
                    }
                  >
                    {column.label}
                  </th>
                )
              )}
            </tr>
          </thead>

          <tbody>
            {filteredAndSorted.map(
              (row) => (
                <tr key={row.id}>
                  {columns.map(
                    (column) => (
                      <td
                        key={String(
                          column.key
                        )}
                      >
                        {String(
                          row[
                            column.key
                          ] ?? "N/A"
                        )}
                      </td>
                    )
                  )}
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}