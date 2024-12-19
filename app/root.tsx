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
    <html className="dark h-full w-full">
      <head>
        <Meta />
        <Links />
      </head>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-FYTY7YPWLQ"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-FYTY7YPWLQ');`,
        }}
      />
      <body className="h-full w-full bg-black text-foreground">
        <Header />
        <Outlet />

        <Scripts />
      </body>
    </html>
  );
}
