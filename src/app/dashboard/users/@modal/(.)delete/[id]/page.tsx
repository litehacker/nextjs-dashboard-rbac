"use server";
import Modal from "@/app/dashboard/components/modal";
import { deleteUser } from "@/actions/users/delete";
import { DeleteUserForm } from "@/app/dashboard/users/components/delete-form";
type Params = Promise<{ id: string }>;

export default async function DeletePage({ params }: { params: Params }) {
  const { id } = await params;
  const deleteUserWithId = deleteUser.bind(null, id);
  return (
    <Modal>
      <DeleteUserForm action={deleteUserWithId} />
    </Modal>
  );
}
