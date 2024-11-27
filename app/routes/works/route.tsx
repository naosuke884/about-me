import WorkCard from "./WorkCard";
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";

export function loader() {
  // TODO: url の OGPメタ情報から情報を取得する処理
  const cardContents = [
    {
      key: "sample1",
      title: "Sample",
      description: "sample card sample card sample card sample card",
      url: "https://github.com/naosuke884/about-me/issues",
      img_url: "https://avatars.githubusercontent.com/u/79069890?v=4",
    },
    {
      key: "sample1",
      title: "Sample",
      description: "sample card sample card sample card sample card",
      url: "https://github.com/naosuke884/about-me/issues",
      img_url: "https://avatars.githubusercontent.com/u/79069890?v=4",
    },
    {
      key: "sample1",
      title: "Sample",
      description: "sample card sample card sample card sample card",
      url: "https://github.com/naosuke884/about-me/issues",
      img_url: "https://avatars.githubusercontent.com/u/79069890?v=4",
    },
    {
      key: "sample1",
      title: "Sample",
      description: "sample card sample card sample card sample card",
      url: "https://github.com/naosuke884/about-me/issues",
      img_url: "https://avatars.githubusercontent.com/u/79069890?v=4",
    },
    {
      key: "sample1",
      title: "Sample",
      description: "sample card sample card sample card sample card",
      url: "https://github.com/naosuke884/about-me/issues",
      img_url: "https://avatars.githubusercontent.com/u/79069890?v=4",
    },
    {
      key: "sample1",
      title: "Sample",
      description: "sample card sample card sample card sample card",
      url: "https://github.com/naosuke884/about-me/issues",
      img_url: "https://avatars.githubusercontent.com/u/79069890?v=4",
    },
    {
      key: "sample1",
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
    <main className="w-full p-10 flex gap-10 flex-wrap justify-center items-center">
      {cardContents.map((content) => {
        return (
          <WorkCard
            key={content.key}
            className="w-72 h-72 hover:-translate-y-1 hover:scale-105 duration-300 hover:border-ring"
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
