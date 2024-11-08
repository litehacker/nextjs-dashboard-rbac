"use server";

import { updateUser } from "@/actions/users/update";
import { EditUserForm } from "@/app/dashboard/users/components/edit-form";
type Params = Promise<{ id: string }>;

export default async function EditBookmarkPage({ params }: { params: Params }) {
  const { id } = await params;
  const updateUserWithId = updateUser.bind(null, id);

  return <EditUserForm action={updateUserWithId} />;
}
