"use client";
import Image from "next/image";
import Link from "next/link";

export function Welcome() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-4xl h-screen flex rounded-lg shadow-lg overflow-hidden">
        {/* Left Side (Welcome Section) */}
        <div className="bg-blue-100 p-10 flex flex-col justify-center items-center">
          <div className="mb-4">
            <Image
              src="/images/welcome-image.png"
              width={250}
              height={250}
              alt="Welcome Illustration"
              className="rounded-md"
            />
          </div>
          <h2 className="text-2xl font-bold mb-4 text-center">
            Temukan kemudahan dalam kebersihan
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Temukan semua kemudahan yang ada di aplikasi ini
          </p>
          <div className="flex gap-4">
            <Link
              href="/login"
              className="bg-white text-blue-600 font-bold py-2 px-6 rounded-full shadow-md"
            >
              Sign In
            </Link>
            <Link href={"/register"} className="bg-blue-600 text-white font-bold py-2 px-6 rounded-full shadow-md">
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
