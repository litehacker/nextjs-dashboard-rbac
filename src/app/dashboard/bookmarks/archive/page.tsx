"use server";
import { archiveBookmark } from "@/actions/bookmarks/archive";
import { ArchiveBookmarkForm } from "../components/archive-form";

export default async function CreateBookmarkPage() {
  return <ArchiveBookmarkForm action={archiveBookmark} />;
}
