"use server";

import Modal from "@/app/dashboard/components/modal";
import EditRoleForm from "@/app/dashboard/roles/components/edit-form";
import { updateRole } from "@/actions/roles/update";

export default async function DeleteRoleModal({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  const updateRoleWithId = updateRole.bind(null, id);
  return (
    <Modal>
      <EditRoleForm action={updateRoleWithId} />
    </Modal>
  );
}
