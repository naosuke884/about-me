import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Link } from "@remix-run/react";
import MobileNav from "./HeaderMobileNav";
import { navItems } from "./headerNavItems";
import { cn } from "@/lib/utils";

export default function App() {
  return (
    <header className="flex h-24 p-5 ring">
      <div className="mr-auto flex items-center justify-center">
        <Link to="/about" className="text-2xl font-extrabold tracking-tight">
          {"Hayashi Naoki"}
        </Link>
      </div>
      <MobileNav className="sm:hidden" />
      <NavigationMenu className="hidden sm:block">
        <NavigationMenuList>
          {navItems.map((item) => (
            <NavigationMenuItem key={item.key}>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                asChild
              >
                <Link to={item.url} className="text-xl font-semibold">
                  {item.text}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
