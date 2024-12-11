import { Link } from "@remix-run/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GitHubLogo, XLogo, ZennLogo } from "@/components/ui/logos";
import TimeLine from "./TimeLine";

export default function About() {
  const logos = [
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
    <div className="flex justify-center items-center">
      <main className="m-10 p-10 w-fit rounded-lg bg-background border-solid border-2 border-border flex flex-col gap-12 justify-center items-center text-center text-pretty whitespace-pre-wrap">
        <Avatar className="w-36 h-36">
          <AvatarImage src="/avatar.jpg" />
          <AvatarFallback>{"^_^"}</AvatarFallback>
        </Avatar>
        <h1>Hayashi Naoki</h1>
        <p>{`情報系の学生です\nWebとAIに興味があります\n好きな色は青です`}</p>
        <section className="flex flex-wrap gap-10 justify-center items-center">
          {logos.map((logo) => (
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
        <section>
          <TimeLine />
        </section>
      </main>
    </div>
  );
}
