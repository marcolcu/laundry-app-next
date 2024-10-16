import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/app/provider";
import BottomNavbar from "./BottomNavbar";
import { ClientComponent } from "./ClientComponent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Resto App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>
        <Providers>
          <ClientComponent>{children}</ClientComponent>
        </Providers>
      </body>
    </html>
  );
}
