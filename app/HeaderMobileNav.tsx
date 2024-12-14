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

type MobileNavProps = {
  className: string;
  triggerText: string;
};

export default function MobileNav({ className, triggerText }: MobileNavProps) {
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
                  <Link to={item.url} className="w-full">
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
