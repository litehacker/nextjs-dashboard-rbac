"use server";
import Modal from "@/app/dashboard/components/modal";
import { deleteUser } from "@/actions/users/delete";
import { DeleteUserForm } from "@/app/dashboard/users/components/delete-form";

export default async function DeletePage({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  const deleteUserWithId = deleteUser.bind(null, id);
  return (
    <Modal>
      <DeleteUserForm action={deleteUserWithId} />
    </Modal>
  );
}
