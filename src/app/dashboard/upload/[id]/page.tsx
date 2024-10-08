"use server";

import { uploadFile } from "@/actions/files/upload";
import { FileUploadForm } from "./components/file-upload-form";

export default async function UploadFilePage({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  const uploadFileWithId = uploadFile.bind(null, id);
  return <FileUploadForm action={uploadFileWithId} />;
}
