import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Link, useLocation } from "@remix-run/react";
import MobileNav from "./HeaderMobileNav";
import { navItems } from "./headerNavItems";

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
      <NavigationMenu className="hidden sm:flex">
        <NavigationMenuList>
          {navItems.map((item) => (
            <NavigationMenuItem key={item.key}>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                asChild
              >
                <Link to={item.url}>{item.text}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
