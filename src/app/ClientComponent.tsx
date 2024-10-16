"use client";
import { usePathname } from "next/navigation";
import BottomNavbar from "./BottomNavbar";
import { useAppContext } from "./provider";

export const ClientComponent = ({ children }: { children: React.ReactNode }) => {
  const { state, dispatch } = useAppContext();

  return (
    <div className="flex flex-col min-h-screen">
      <main>{children}</main>
      {state?.user && <BottomNavbar />}
    </div>
  );
};