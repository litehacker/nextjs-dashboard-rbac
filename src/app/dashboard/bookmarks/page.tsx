"use server";
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
import Link from "next/link";

export default async function Bookmarks() {
  return (
    <>
      <div className="flex items-center justify-between py-3 bg-white rounded-xl px-3 mb-3">
        <div className="flex space-x-4">
          <Link href="/dashboard/bookmarks/add?modal=true" replace>
            <Button variant="default" className="bg-primary text-white">
              ახალი ჩანართი
            </Button>
          </Link>
          <Link href="/dashboard/bookmarks/archive?modal=true" replace>
            <Button variant="outline">არქივში დამატება</Button>
          </Link>
        </div>
        <Select>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="თარიღით არჩევა" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option1">Option 1</SelectItem>
            <SelectItem value="option2">Option 2</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex gap-3">
        <FilterBookmarks />
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 w-full">
          {Array.from({ length: 12 }).map((_, index) => (
            <FolderCard key={index} />
          ))}
        </div>
      </div>
    </>
  );
}
