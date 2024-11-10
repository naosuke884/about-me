// root.tsx
import { Links, Meta, Outlet, Scripts } from "@remix-run/react";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import stylesheet from "@/tailwind.css?url";
import icon from "@/favicon.ico";
import { Button } from "@/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { charSet: "utf-8" },
    { title: "Hayashi Naoki" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
  ];
};

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: stylesheet },
    {
      rel: "icon",
      href: icon,
      type: "image/png",
    },
  ];
};

export default function App() {
  return (
    <html className="dark">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-background text-foreground">
        <h1>Hello world!</h1>
        <div>
          <Button>Click me</Button>
        </div>

        <Outlet />

        <Scripts />
      </body>
    </html>
  );
}
