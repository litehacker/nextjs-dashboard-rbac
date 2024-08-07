"use server";
import { createBookmark } from "@/actions/bookmarks/create";
import { CreateBookmarkForm } from "../components/create-form";

export default async function CreateBookmarkPage() {
  return <CreateBookmarkForm action={createBookmark} />;
}
