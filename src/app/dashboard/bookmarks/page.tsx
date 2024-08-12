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
import { getAuthUser, getToken } from "@/lib/auth-check";

export default async function Bookmarks({
  searchParams: { name, name_code, document_level_id },
}: {
  searchParams: {
    name?: string;
    name_code?: string;
    document_level_id?: string;
  };
}) {
  const user = await getAuthUser();
  const token = await getToken();

  const hasAddTabPermission =
    user.role.permissions.tabs?.some(
      (permission) => permission.key === "add"
    ) ?? false;
  const hasArchiveTabPermission =
    user.role.permissions.tabs?.some(
      (permission) => permission.key === "add_archive"
    ) ?? false;
  const hasEditPermission =
    user.role.permissions.tabs?.some(
      (permission) => permission.key === "edit"
    ) ?? false;

  const tabs = [];
  const searchParams = new URLSearchParams();
  if (name) {
    searchParams.append("name", name);
  }
  if (name_code) {
    searchParams.append("name_code", name_code);
  }
  if (document_level_id) {
    searchParams.append("document_level_id", document_level_id);
  }
  try {
    const response = await fetch(
      process.env.BASE_URL + "/api/v1/tabs?" + searchParams.toString(),
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    if (response.ok) {
      const internalResponseJSON = await response.json();
      if (internalResponseJSON.success) {
        const _tmpTabs = internalResponseJSON.data;
        tabs.push(..._tmpTabs);
      }
    }
  } catch (e) {
    console.error("Error fetching tabs", e);
  }

  return (
    <>
      <div className="flex items-center justify-between py-3 bg-white rounded-xl px-3 mb-3">
        <div className="flex space-x-4">
          {hasAddTabPermission && (
            <Link href="/dashboard/bookmarks/add?modal=true" replace>
              <Button variant="default" className="bg-primary text-white">
                ახალი ჩანართი
              </Button>
            </Link>
          )}
          {hasArchiveTabPermission && (
            <Link href="/dashboard/bookmarks/archive?modal=true" replace>
              <Button variant="outline">არქივში დამატება</Button>
            </Link>
          )}
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
          {tabs.map((tab, index) => (
            <FolderCard
              key={index}
              tab={tab}
              hasEditPermission={hasEditPermission}
            />
          ))}
        </div>
      </div>
    </>
  );
}
