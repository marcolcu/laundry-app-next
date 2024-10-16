"use client";

import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Order() {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => setProgress(66), 500);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-sky-500 to-indigo-500 p-10">
      <h2 className="text-2xl font-bold text-white mb-6">Pesanan kamu</h2>

      {/* Container for vertical cards */}
      <div className="flex flex-col space-y-4">
        {/* Card 1 */}
        <Link href={"#"}>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">#66578</h3>
            <p className="text-gray-600">Sudah diterima, siap-siap dicuci.</p>
            <Progress value={20} className="w-full mt-4" />
          </div>
        </Link>
        <Link href={"#"}>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">#99076</h3>
            <p className="text-gray-600">Sedang di cuci dan dirapihkan.</p>
            <Progress value={60} className="w-full mt-4" />
          </div>
        </Link>
        <Link href={"#"}>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">#25432</h3>
            <p className="text-gray-600">Baju kamu sudah bisa diambil ya.</p>
            <Progress value={100} className="w-full mt-4" />
          </div>
        </Link>
        {/* Add more cards as needed */}
      </div>
    </div>
  );
}
