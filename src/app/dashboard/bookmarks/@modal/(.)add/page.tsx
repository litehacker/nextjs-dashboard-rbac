"use server";
import { createBookmark } from "@/actions/bookmarks/create";
import Modal from "@/app/dashboard/components/modal";
import { CreateBookmarkForm } from "../../components/create-form";

export default async function CreateBookmarkPage() {
  return (
    <Modal>
      <CreateBookmarkForm action={createBookmark} />
    </Modal>
  );
}
