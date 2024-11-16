import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Link } from "@remix-run/react";
import { Separator } from "@/components/ui/separator";

export default function App() {
  const navItems = [
    { key: "about", text: "About", url: "/about" },
    { key: "works", text: "Works", url: "/projects" },
    { key: "contact", text: "Contact", url: "/contact" },
  ];

  return (
    <header className="h-24 ring">
      <NavigationMenu className="w-full h-full gap-5">
        <div className="inline-flex justify-center items-center p-5">
          <Link
            to="/"
            className="scroll-m-20 text-2xl font-extrabold tracking-tight"
          >
            {" "}
            Hayashi Naoki{" "}
          </Link>
        </div>
        <Separator orientation="vertical" />
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
