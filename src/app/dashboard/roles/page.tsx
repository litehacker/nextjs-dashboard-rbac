"use server";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FolderCard } from "../components/folder-card";
import { FilterBookmarks } from "../components/filter-bookmarks";
import { Card } from "@/components/ui/card";
import { RolesTable } from "./components/table";
import Link from "next/link";
import { DashboardHeader } from "../components/header";

export default async function Roles() {
  return (
    <>
      <div className="p-2 h-full">
        <Card className="flex flex-col">
          <div className="flex justify-between px-4 py-2 items-center">
            <Link href="/dashboard/roles/add?modal=true">
              <Button variant="secondary">დამატება</Button>
            </Link>
            <span className="text-[#636971]">სულ 4</span>
          </div>
          <RolesTable />
        </Card>
      </div>
    </>
  );
}
