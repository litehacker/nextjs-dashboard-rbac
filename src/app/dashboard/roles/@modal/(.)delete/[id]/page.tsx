"use server";

import { deleteRole } from "@/actions/roles/delete";
import Modal from "@/app/dashboard/components/modal";
import { DeleteRoleDialogForm } from "../../../components/table/components/delete-role/form";

export default async function DeleteRoleModal({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  const deleteRoleWithId = deleteRole.bind(null, id);
  return (
    <Modal>
      <DeleteRoleDialogForm action={deleteRoleWithId} />
    </Modal>
  );
}
