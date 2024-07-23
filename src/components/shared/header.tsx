import { cn } from "@/lib/utils";
import React from "react";

interface HeaderProps {
  className: string;
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
  return <header className={cn("border border-b", className)}></header>;
};
