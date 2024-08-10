"use server";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Pencil, Trash } from "lucide-react";
import { ReactNode } from "react";
import { EmptyAvatar } from "./icons/empty-image";
import { PathWrapper } from "./path-wrapper";

export async function DashboardHeader({ children }: { children: ReactNode }) {
  return (
    <header className="flex items-center justify-between pb-6 pt-[10px]">
      <h1 className="text-2xl font-semibold pl-3">{children}</h1>
      <form className="flex items-center space-x-4">
        <div className="w-6 h-6 relative group">
          <Avatar className="w-full h-full">
            <AvatarImage src="/uploads/image.png" alt="User" />
            <AvatarFallback>
              <EmptyAvatar />
            </AvatarFallback>
          </Avatar>
          <div className="absolute left-1/2 transform -translate-x-1/2 px-1 top-3/4 bg-white shadow-sm gap-0 rounded-full items-center hidden group-hover:flex">
            <PathWrapper href="/dashboard/upload/1">
              <Pencil className="p-1.5" />
              <span className="sr-only">Edit</span>
            </PathWrapper>
            <PathWrapper href="/dashboard/delete/1">
              <Trash className="p-1.5" />
              <span className="sr-only">Delete</span>
            </PathWrapper>
          </div>
        </div>
        <Button variant="outline" className="text-gray-600">
          არჩეული ჩანართები
        </Button>
      </form>
    </header>
  );
}
