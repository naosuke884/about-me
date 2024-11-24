// root.tsx
import { Links, Meta, Outlet, Scripts } from "@remix-run/react";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import Header from "./Header";
import stylesheet from "@/tailwind.css?url";

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
      href: "/favicon.ico",
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
      <body className="bg-black text-foreground w-full h-full">
        <Header />
        <Outlet />

        <Scripts />
      </body>
    </html>
  );
}
