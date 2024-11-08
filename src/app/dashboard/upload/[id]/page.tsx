"use server";

import { uploadFile } from "@/actions/files/upload";
import { FileUploadForm } from "./components/file-upload-form";
type Params = Promise<{ id: string }>;

export default async function UploadFilePage({ params }: { params: Params }) {
  const { id } = await params;
  const uploadFileWithId = uploadFile.bind(null, id);
  return <FileUploadForm action={uploadFileWithId} />;
}
