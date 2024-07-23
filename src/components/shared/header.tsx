import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "./container";
import Image from "next/image";

interface HeaderProps {
  className: string;
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={cn("border border-b", className)}>
      <Container className="flex items-center justify-between py-8">
        <div>
          <Image src="/logo.png" alt="Logo" width={35} height={35} />
          <div>
            <h1 className="text-2xl uppercase font-black">Next Pizza</h1>
            <p className="text-sm text-gray-400 leading-3">
              вкусней уже некуда
            </p>
          </div>
        </div>
      </Container>
    </header>
  );
};
