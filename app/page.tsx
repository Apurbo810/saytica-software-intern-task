import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center gap-4">
      <Link href="/leaderboard" className="btn btn-primary">
        Leaderboard
      </Link>

      <Link href="/task-board" className="btn btn-outline btn-secondary">
        Task Board
      </Link>
      <button className="btn btn-primary">Button</button>
    </div>
  );
}