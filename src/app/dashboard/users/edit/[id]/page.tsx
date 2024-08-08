"use server";

import { updateUser } from "@/actions/users/update";
import { EditUserForm } from "@/app/dashboard/users/components/edit-form";

export default async function EditBookmarkPage({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  const updateUserWithId = updateUser.bind(null, id);

  return <EditUserForm action={updateUserWithId} />;
}
