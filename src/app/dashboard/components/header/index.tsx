"use server";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Pencil, Trash } from "lucide-react";
import { ReactNode } from "react";
import { EmptyAvatar } from "./icons/empty-image";
import Link from "next/link";

export async function DashboardHeader({ children }: { children: ReactNode }) {
  return (
    <header className="flex items-center justify-between pb-6 pt-[10px]">
      <h1 className="text-2xl font-semibold pl-3">{children}</h1>
      <div className="flex items-center space-x-4">
        <div className="w-6 h-6 relative group">
          <Avatar className="w-full h-full">
            <AvatarImage src="/uploads/image.png" alt="User" />
            <AvatarFallback>
              <EmptyAvatar />
            </AvatarFallback>
          </Avatar>
          <div className="absolute left-1/2 transform -translate-x-1/2 px-1 top-3/4 bg-white shadow-sm gap-0 rounded-full items-center hidden group-hover:flex">
            <Link href="/dashboard/upload/1" replace>
              <Pencil className="p-1.5" />
              <span className="sr-only">Edit</span>
            </Link>
            <Link href="/dashboard/upload" replace>
              <Trash className="p-1.5" />
              <span className="sr-only">Upload</span>
            </Link>
          </div>
        </div>
        <Button variant="outline" className="text-gray-600">
          არჩეული ჩანართები
        </Button>
      </div>
    </header>
  );
}
