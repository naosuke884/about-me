import { useState } from "react";
import { Link } from "@remix-run/react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { navItems } from "./headerNavItems";

export default function MobileNav({ className }: { className: string }) {
  // TODO: useState 使わなくできる？
  const [triggerText, setTriggerText] = useState("Menu");

  return (
    <NavigationMenu className={className}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="w-32">
            {triggerText}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul>
              {navItems.map((item) => (
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "w-full overflow-hidden rounded-none",
                  )}
                  key={item.key}
                  asChild
                >
                  <Link
                    to={item.url}
                    className="w-full font-semibold"
                    onClick={() => setTriggerText(item.text)}
                  >
                    {item.text}
                  </Link>
                </NavigationMenuLink>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
