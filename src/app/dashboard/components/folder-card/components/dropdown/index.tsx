"use client";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { EllipsisVertical, Pencil, Trash } from "lucide-react";

export const FolderDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="hover:bg-transparent p-0 !ring-0 !ring-offset-0"
        >
          <EllipsisVertical />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[248px]" side="left">
        <DropdownMenuItem
          onClick={() => {
            console.log("clicked 1");
          }}
          className="px-4 py-3"
        >
          <div className="flex gap-3 w-full">
            <Pencil color={"#323232"} />
            <span className="text-[#474747]">ჩანართის რედაქტირება</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            console.log("clicked 2");
          }}
          className="px-4 py-3"
        >
          <div className="flex gap-3 text-[#7A0000] w-full">
            <Trash />
            <span>ჩანართის წაშლა</span>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
