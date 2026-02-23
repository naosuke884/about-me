import stylesheet from "@/tailwind.css?url";
import type { LinksFunction, MetaFunction } from "react-router";
import { Links, Meta, Outlet, Scripts } from "react-router";
import Header from "./Header";

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
    <html className="dark h-full w-full" lang="ja">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-full w-full bg-black text-foreground">
        <Header />
        <Outlet />

        <Scripts />
      </body>
    </html>
  );
}
