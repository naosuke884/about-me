import { Link } from "@remix-run/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

type WorkProps = {
  title: string;
  description: string;
  url: string;
  img_url: string;
};
export type WorkCardProps = React.ComponentProps<typeof Card> & WorkProps;

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
        className={cn("overflow-hidden border-border", className)}
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
            className={`h-full w-full bg-[url('/avatar.jpg')] bg-cover`}
          />
        </Link>
      </Card>
    </>
  );
}
