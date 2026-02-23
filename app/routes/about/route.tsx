import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AboutMe from "./AboutMe";
import LinkList from "./LinkList";
import TimeLine from "./TimeLine";

export default function About() {
  return (
    <div className="flex justify-center items-center">
      <main className="m-10 p-10 w-fit rounded-lg bg-background border-solid border-2 border-border flex flex-col gap-12 justify-center items-center text-center text-pretty whitespace-pre-wrap">
        <Avatar className="w-36 h-36">
          <AvatarImage src="/avatar.jpg" />
          <AvatarFallback>{"^_^"}</AvatarFallback>
        </Avatar>
        <h1>Hayashi Naoki</h1>
        <AboutMe />
        <LinkList />
        <TimeLine />
      </main>
    </div>
  );
}
