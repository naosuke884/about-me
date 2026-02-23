import { GitHubLogo, XLogo, ZennLogo } from "@/components/ui/logos";
import { Link } from "react-router";

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
    link: "https://zenn.dev/884naoki?tab=scraps",
    description: "Zenn",
  },
];

export default function LinkList() {
  return (
    <section className="flex flex-wrap gap-10 justify-center items-center">
      {logos.map((logo) => (
        <Link
          key={logo.key}
          to={logo.link}
          title={logo.description}
          className="w-10 h-10 hover:-translate-y-1 hover:scale-110 duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          {logo.component}
        </Link>
      ))}
    </section>
  );
}
