import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      {/* Left - Leaderboard */}
      <Link
        href="/leaderboard"
        className="flex flex-1 items-center justify-center bg-yellow-500 transition hover:bg-yellow-600"
      >
        <h1 className="text-5xl font-bold text-black">
          Leaderboard
        </h1>
      </Link>

      {/* Right - Task Board */}
      <Link
        href="/task-board"
        className="flex flex-1 items-center justify-center bg-slate-800 transition hover:bg-slate-900"
      >
        <h1 className="text-5xl font-bold text-white">
          Task Board
        </h1>
      </Link>
    </div>
  );
}