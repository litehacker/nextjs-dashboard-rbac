"use server";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

export async function DashboardHeader({ children }: { children: ReactNode }) {
  return (
    <header className="flex items-center justify-between pb-6 pt-[10px]">
      <h1 className="text-2xl font-semibold pl-3">{children}</h1>
      <div className="flex items-center space-x-4">
        <Avatar>
          <AvatarImage src="/placeholder-user.jpg" alt="User" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
        <Button variant="outline" className="text-gray-600">
          არჩეული ჩანართები
        </Button>
      </div>
    </header>
  );
}
