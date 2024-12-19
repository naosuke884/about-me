import WorkCard from "./WorkCard";
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";

export function loader() {
  // TODO: url の OGPメタ情報から情報を取得する処理
  const cardContents = [
    {
      key: "1",
      title: "Sample",
      description: "sample card sample card sample card sample card",
      url: "https://github.com/naosuke884/about-me/issues",
      img_url: "https://avatars.githubusercontent.com/u/79069890?v=4",
    },
    {
      key: "2",
      title: "Sample",
      description: "sample card sample card sample card sample card",
      url: "https://github.com/naosuke884/about-me/issues",
      img_url: "https://avatars.githubusercontent.com/u/79069890?v=4",
    },
    {
      key: "3",
      title: "Sample",
      description: "sample card sample card sample card sample card",
      url: "https://github.com/naosuke884/about-me/issues",
      img_url: "https://avatars.githubusercontent.com/u/79069890?v=4",
    },
    {
      key: "4",
      title: "Sample",
      description: "sample card sample card sample card sample card",
      url: "https://github.com/naosuke884/about-me/issues",
      img_url: "https://avatars.githubusercontent.com/u/79069890?v=4",
    },
    {
      key: "5",
      title: "Sample",
      description: "sample card sample card sample card sample card",
      url: "https://github.com/naosuke884/about-me/issues",
      img_url: "https://avatars.githubusercontent.com/u/79069890?v=4",
    },
    {
      key: "6",
      title: "Sample",
      description: "sample card sample card sample card sample card",
      url: "https://github.com/naosuke884/about-me/issues",
      img_url: "https://avatars.githubusercontent.com/u/79069890?v=4",
    },
    {
      key: "7",
      title: "Sample",
      description: "sample card sample card sample card sample card",
      url: "https://github.com/naosuke884",
      img_url: "https://avatars.githubusercontent.com/u/79069890?v=4",
    },
  ];
  return json(cardContents);
}

export default function Works() {
  const cardContents = useLoaderData<typeof loader>();
  return (
    <main className="flex w-full flex-wrap items-center justify-center gap-10 p-10">
      {cardContents.map((content) => {
        return (
          <WorkCard
            key={content.key}
            className="h-72 w-72 duration-300 sm:hover:-translate-y-1 sm:hover:scale-105 sm:hover:border-ring"
            url={content.url}
            img_url={content.img_url}
            title={content.title}
            description={content.description}
          />
        );
      })}
    </main>
  );
}
