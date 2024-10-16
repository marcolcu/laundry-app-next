import BottomNavbar from "../BottomNavbar";
import { ActionButton } from "./ActionButton";
import { Category } from "./Category";
import { Poin } from "./Poin";
import { Services } from "./Services";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-sky-500 to-indigo-500">
      <Poin />

      <ActionButton />

      <Category />

      <Services />
    </div>
  );
}
