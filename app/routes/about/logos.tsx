import { cn } from "@/lib/utils";
import React from "react";

type IconProps = {
  className?: string;
};

const GitHubLogo: React.FC<IconProps> = ({ className }) => (
  <>
    <img src="/github-logo.svg" alt="github" className={cn(className)} />
  </>
);

const XLogo: React.FC<IconProps> = ({ className }) => (
  <>
    <img src="/x-logo.svg" alt="x" className={cn(className)} />
  </>
);

const ZennLogo: React.FC<IconProps> = ({ className }) => (
  <>
    <img src="/zenn-logo.svg" alt="zenn" className={cn(className)} />
  </>
);

export { GitHubLogo, XLogo, ZennLogo };
