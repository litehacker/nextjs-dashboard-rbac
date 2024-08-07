"use server";
import Modal from "@/app/dashboard/components/modal";
import { archiveBookmark } from "@/actions/bookmarks/archive";
import { ArchiveBookmarkForm } from "../../components/archive-form";

export default async function CreateBookmarkPage() {
  return (
    <Modal>
      <ArchiveBookmarkForm action={archiveBookmark} />
    </Modal>
  );
}
