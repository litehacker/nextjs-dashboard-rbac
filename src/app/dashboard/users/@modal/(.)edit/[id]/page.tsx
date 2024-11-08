"use server";
import Modal from "@/app/dashboard/components/modal";
import { EditUserForm } from "@/app/dashboard/users/components/edit-form";
import { updateUser } from "@/actions/users/update";
type Params = Promise<{ id: string }>;

export default async function EditBookmarkPage({ params }: { params: Params }) {
  const { id } = await params;
  const updateUserWithId = updateUser.bind(null, id);

  return (
    <Modal>
      <EditUserForm action={updateUserWithId} />
    </Modal>
  );
}
