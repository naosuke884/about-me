import stylesheet from "@/tailwind.css?url";
import { useEffect } from "react";
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
  useEffect(() => {
    const script = document.createElement("script");
    script.innerHTML =
      "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-MMWKZZ22');";
    document.head.appendChild(script);
  }, []);
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
