import stylesheet from "@/tailwind.css?url";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Links, Meta, Outlet, Scripts } from "@remix-run/react";
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
      {/* google tag >> */}
      <script
        async
        src={"https://www.googletagmanager.com/gtag/js?id=G-FYTY7YPWLQ"}
      />
      <script
        // biome-ignore lint: for gtag coding
        dangerouslySetInnerHTML={{
          __html: `"window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-FYTY7YPWLQ');`,
        }}
      />
      {/* << google tag */}
      <body className="h-full w-full bg-black text-foreground">
        <Header />
        <Outlet />

        <Scripts />
      </body>
    </html>
  );
}
