"use server";
import { DeleteUserForm } from "../../components/delete-form";
import { deleteUser } from "@/actions/users/delete";

export default async function DeletePage({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  const deleteUserWithId = deleteUser.bind(null, id);
  return <DeleteUserForm action={deleteUserWithId} />;
}
