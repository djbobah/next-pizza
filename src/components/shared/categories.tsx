"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { useCategoryStore } from "../../../store/category";
interface Props {
  className?: string;
}

const cats = [
  { id: 1, name: "Пиццы" },
  { id: 2, name: "Комбо" },
  { id: 3, name: "Закуски" },
  { id: 4, name: "Коктейли" },
  { id: 5, name: "Кофе" },
  { id: 6, name: "Напитки" },
  { id: 7, name: "Десерты" },
  { id: 8, name: "Напитки" },
];
// const activeIndex = 0;

export const Categories: React.FC<Props> = ({ className }) => {
  const categoryActiveID = useCategoryStore((state) => state.activeId);
  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}
    >
      {cats.map((cat, index) => (
        <a
          key={cat.id}
          className={cn(
            "flex items-center font-bold h-11 rounded-2xl px-5",
            categoryActiveID === cat.id &&
              "bg-white shadow-md shadow-gray-200 text-primary"
          )}
          href={`/#${cat.name}`}
        >
          <button>{cat.name}</button>
        </a>
      ))}
    </div>
  );
};
