
export default function table() {
  return (
    <div className="relative overflow-x-auto rounded-lg border shadow-sm">
      <div className="p-4">
        <label htmlFor="input-group-1" className="sr-only">
          Search
        </label>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>

          <input
            type="text"
            id="input-group-1"
            className="block w-full max-w-md pl-10 pr-3 py-2.5 border border-gray-300 rounded-md text-sm shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search"
          />
        </div>
      </div>

      <table className="w-full text-sm text-left">
        <thead className="border-y bg-gray-100">
          <tr>
            <th scope="col" className="p-4">
              <input
                id="table-checkbox-12"
                type="checkbox"
                className="w-4 h-4"
              />
            </th>

            <th scope="col" className="px-6 py-3 font-medium">
              Product name
            </th>

            <th scope="col" className="px-6 py-3 font-medium">
              Color
            </th>

            <th scope="col" className="px-6 py-3 font-medium">
              Category
            </th>

            <th scope="col" className="px-6 py-3 font-medium">
              Price
            </th>

            <th scope="col" className="px-6 py-3 font-medium">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          <tr className="border-b hover:bg-gray-50">
            <td className="p-4">
              <input
                id="table-checkbox-13"
                type="checkbox"
                className="w-4 h-4"
              />
            </td>

            <th
              scope="row"
              className="px-6 py-4 font-medium whitespace-nowrap"
            >
              Apple MacBook Pro 17"
            </th>

            <td className="px-6 py-4">Silver</td>
            <td className="px-6 py-4">Laptop</td>
            <td className="px-6 py-4">$2999</td>

            <td className="px-6 py-4">
              <a href="#" className="font-medium text-blue-600 hover:underline">
                Edit
              </a>
            </td>
          </tr>

          <tr className="border-b hover:bg-gray-50">
            <td className="p-4">
              <input
                id="table-checkbox-14"
                type="checkbox"
                className="w-4 h-4"
              />
            </td>

            <th
              scope="row"
              className="px-6 py-4 font-medium whitespace-nowrap"
            >
              Microsoft Surface Pro
            </th>

            <td className="px-6 py-4">White</td>
            <td className="px-6 py-4">Laptop PC</td>
            <td className="px-6 py-4">$1999</td>

            <td className="px-6 py-4">
              <a href="#" className="font-medium text-blue-600 hover:underline">
                Edit
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

