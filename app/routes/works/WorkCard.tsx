import { Link } from "@remix-run/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

type WorksProps = {
  title: string;
  description: string;
  url: string;
  img_url: string;
};
type WorksCardProps = React.ComponentProps<typeof Card> & WorksProps;

export default function Works({
  className,
  title,
  description,
  url,
  img_url,
  ...props
}: WorksCardProps) {
  return (
    <>
      <Card
        className={cn("border-border overflow-hidden", className)}
        {...props}
      >
        <Link to={url} target="_blank" rel="noopener noreferrer">
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription className="truncate">
              {description}
            </CardDescription>
          </CardHeader>
          <CardContent
            className={`bg-[url('/avatar.jpg')] bg-cover w-full h-full`}
          />
        </Link>
      </Card>
    </>
  );
}
