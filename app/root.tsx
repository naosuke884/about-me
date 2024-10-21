// root.tsx
import {
  Links,
  Meta,
  Outlet,
  Scripts,
} from "@remix-run/react";
import type {
  LinksFunction,
  MetaFunction,
} from "@remix-run/node";
import stylesheet from '@/tailwind.css?url'
import icon from '@/favicon.ico'
// import { Button } from "@/components/ui/button"

export const meta: MetaFunction = () => {
  return [
    { charSet: 'utf-8' },
    { title: 'Hayashi Naoki' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
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
  ]
}

export default function App() {
  return (
    <html>
      <head>
        <link
          rel="icon"
          href="data:image/x-icon;base64,AA"
        />
        <Meta />
        <Links />
      </head>
      <body>
        <h1 className="bg-red-400">Hello world!</h1>
        {/* <Button>Click me</Button> */}
        <Outlet />

        <Scripts />
      </body>
    </html>
  );
}