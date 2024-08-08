"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CircleX, Search, SearchIcon, SlidersHorizontal } from "lucide-react";
import { ReactNode, useState } from "react";

export const SearchWrapper = ({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) => {
  const [expandSearch, setExpandSearch] = useState(false);
  return (
    <div className={`relative flex-1 ${expandSearch ? "w-full" : ""}`}>
      <SearchIcon
        className={`absolute left-3 top-3 h-4 w-4 text-muted-foreground cursor-pointer z-10 text-[#474747]`}
        onClick={
          expandSearch
            ? () => setExpandSearch(false)
            : () => setExpandSearch(true)
        }
      />
      <Input
        placeholder="ძებნა"
        className={`pl-8 pr-20 ${expandSearch ? "" : "hidden"}`}
      />
      <div
        className={`absolute top-0 right-0 flex gap-3 p-3 h-10 items-center ${
          expandSearch ? "" : "hidden"
        }`}
      >
        {children}
      </div>
    </div>
  );
};
