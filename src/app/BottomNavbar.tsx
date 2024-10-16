import Link from "next/link";

export default function BottomNavbar() {
  return (
    <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200 shadow-lg">
      <div className="flex justify-around py-2">
        <Link href="/home" className="flex flex-col items-center gap-3">
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z" />
            <path d="M9 22V12h6v10" />
          </svg>
          <span className="text-xs">Home</span>
        </Link>
        <Link href="/order" className="flex flex-col items-center gap-3">
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path d="M19 21H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2z" />
            <path d="M16 3v4M8 3v4" />
          </svg>
          <span className="text-xs">Order</span>
        </Link>
        <Link href="/chat" className="flex flex-col items-center gap-3">
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" />
          </svg>
          <span className="text-xs">Chat</span>
        </Link>
        <Link href="/profile" className="flex flex-col items-center gap-3">
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6a4 4 0 0 1 0 8 4 4 0 0 1 0-8z" />
          </svg>
          <span className="text-xs">Account</span>
        </Link>
      </div>
    </nav>
  );
}
