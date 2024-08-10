"use server";

import { uploadFile } from "@/actions/files/upload";
import { FileUploadForm } from "@/app/dashboard/upload/[id]/components/file-upload-form";

export default async function UploadFileModal({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  const uploadFileWithId = uploadFile.bind(null, id);
  return <FileUploadForm action={uploadFileWithId} />;
}
