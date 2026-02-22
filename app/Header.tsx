import { Link, useLocation } from "react-router";
import MobileNav from "./HeaderMobileNav";
import PCNav from "./HeaderPCNav";

export default function App() {
  const location = useLocation();
  const rootPathName = location.pathname.split("/")[1];
  const triggerText =
    rootPathName.charAt(0).toUpperCase() + rootPathName.slice(1);
  return (
    <header className="flex h-24 p-5 text-xl font-semibold ring">
      <div className="mr-auto flex items-center justify-center">
        <Link to="/about" className="text-2xl font-extrabold tracking-tight">
          {"Hayashi Naoki"}
        </Link>
      </div>
      <MobileNav className="sm:hidden" triggerText={triggerText} />
      <PCNav className="hidden sm:flex" />
    </header>
  );
}
