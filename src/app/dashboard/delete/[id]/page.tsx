"use server";

import { DeleteImageForm } from "./components/form";
import { removeFile } from "@/actions/files/remove";
type Params = Promise<{ id: string }>;

export default async function UploadFilePage({ params }: { params: Params }) {
  const { id } = await params;
  const removeFormWithId = removeFile.bind(null, id);
  return <DeleteImageForm action={removeFormWithId} />;
}
