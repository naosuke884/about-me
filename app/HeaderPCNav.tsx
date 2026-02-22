import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Link } from "react-router";
import { navItems } from "./HeaderNavItems";

type PCNavProps = {
  className: string;
};

export default function PCNav({ className }: PCNavProps) {
  return (
    <NavigationMenu className={className}>
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
  );
}
