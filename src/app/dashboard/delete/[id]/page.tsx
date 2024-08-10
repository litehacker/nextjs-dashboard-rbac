"use server";

import { DeleteImageForm } from "./components/form";
import { removeFile } from "@/actions/files/remove";

export default async function UploadFilePage({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  const removeFormWithId = removeFile.bind(null, id);
  return <DeleteImageForm action={removeFormWithId} />;
}
