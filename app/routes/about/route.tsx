import { Link } from "@remix-run/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GitHubLogo, XLogo, ZennLogo } from "./icons";

export default function About() {
  const Logos = [
    {
      key: "github",
      component: <GitHubLogo />,
      link: "https://github.com/naosuke884",
      description: "GitHub",
    },
    {
      key: "x",
      component: <XLogo />,
      link: "https://x.com/Naoki89372444",
      description: "X",
    },
    {
      key: "zenn",
      component: <ZennLogo />,
      link: "https://zenn.dev/884naoki",
      description: "Zenn",
    },
  ];
  return (
    <main className="w-stretch m-20 rounded-lg bg-background border-solid border-2 border-border p-16 flex flex-wrap gap-20 justify-center">
      <Avatar className="w-52 h-52">
        <AvatarImage src="/avatar.jpg" />
        <AvatarFallback>{"^_^"}</AvatarFallback>
      </Avatar>
      <section className="flex flex-col justify-center">
        <h1>Hayashi Naoki</h1>
        <p>
          情報系の学生です
          <br />
          WebとAIに興味があります
          <br />
          好きな色は青です
        </p>
      </section>
      <section className="flex justify-center items-center gap-10">
        {Logos.map((logo) => (
          <Link
            key={logo.key}
            to={logo.link}
            className="w-10 h-10 hover:-translate-y-1 hover:scale-110 duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            {logo.component}
          </Link>
        ))}
      </section>
    </main>
  );
}
