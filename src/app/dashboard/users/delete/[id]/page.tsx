"use server";
import { DeleteUserForm } from "../../components/delete-form";
import { deleteUser } from "@/actions/users/delete";
type Params = Promise<{ id: string }>;

export default async function DeletePage({ params }: { params: Params }) {
  const { id } = await params;
  const deleteUserWithId = deleteUser.bind(null, id);
  return <DeleteUserForm action={deleteUserWithId} />;
}
