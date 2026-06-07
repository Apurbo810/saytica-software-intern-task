import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center gap-4">
      <Link href="/leaderboard">Leaderboard</Link>

      <div className="text-amber-300">
        <Link href="/task-board">Task Board</Link>

      </div>
    </div>
  );
}