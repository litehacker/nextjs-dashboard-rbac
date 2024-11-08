"use server";

import { uploadFile } from "@/actions/files/upload";
import Modal from "@/app/dashboard/components/modal";
import { FileUploadForm } from "@/app/dashboard/upload/[id]/components/file-upload-form";
type Params = Promise<{ id: string }>;

export default async function UploadFileModal({ params }: { params: Params }) {
  const { id } = await params;

  const uploadFileWithId = uploadFile.bind(null, id);
  return (
    <Modal>
      <FileUploadForm action={uploadFileWithId} />
    </Modal>
  );
}
