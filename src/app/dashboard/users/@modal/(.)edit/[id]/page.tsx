"use server";
import Modal from "@/app/dashboard/components/modal";
import { EditUserForm } from "@/app/dashboard/users/components/edit-form";
import { updateUser } from "@/actions/users/update";

export default async function EditBookmarkPage({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  const updateUserWithId = updateUser.bind(null, id);

  return (
    <Modal>
      <EditUserForm action={updateUserWithId} />
    </Modal>
  );
}
