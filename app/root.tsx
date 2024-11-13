// root.tsx
import { Links, Meta, Outlet, Scripts } from "@remix-run/react";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import Header from "./header";
import stylesheet from "@/tailwind.css?url";
import favicon from "@/assets/favicon.ico";

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
      href: favicon,
      type: "image/png",
    },
  ];
};

export default function App() {
  return (
    <html className="dark w-full h-full">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-background text-foreground w-full h-full">
        <Header />
        <Outlet />

        <Scripts />
      </body>
    </html>
  );
}
