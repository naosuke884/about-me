import { useLocation } from "react-router";
import HomeIcon from "./HeaderHomeIcon";
import MobileNav from "./HeaderMobileNav";
import PCNav from "./HeaderPCNav";

export default function App() {
  const location = useLocation();
  const rootPathName = location.pathname.split("/")[1];
  const triggerText =
    rootPathName.charAt(0).toUpperCase() + rootPathName.slice(1);
  return (
    <header className="flex h-24 p-5 text-xl font-semibold ring">
      <div className="ml-10 mr-auto flex items-center">
        <HomeIcon />
      </div>
      <MobileNav className="sm:hidden" triggerText={triggerText} />
      <PCNav className="hidden sm:flex" />
    </header>
  );
}
