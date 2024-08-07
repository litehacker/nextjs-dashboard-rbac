"use server";

import Modal from "@/app/dashboard/components/modal";
import { editRole } from "@/actions/roles/edit-role";
import EditRoleForm from "../../../components/edit-form";

export default async function DeleteRoleModal({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  const editRoleWithId = editRole.bind(null, id);
  return (
    <Modal>
      <EditRoleForm action={editRoleWithId} />
    </Modal>
  );
}
