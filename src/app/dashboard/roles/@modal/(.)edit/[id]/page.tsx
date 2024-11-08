"use server";

import Modal from "@/app/dashboard/components/modal";
import EditRoleForm from "@/app/dashboard/roles/components/edit-form";
import { updateRole } from "@/actions/roles/update";
type Params = Promise<{ id: string }>;

export default async function DeleteRoleModal({ params }: { params: Params }) {
  const { id } = await params;
  const updateRoleWithId = updateRole.bind(null, id);
  return (
    <Modal>
      <EditRoleForm action={updateRoleWithId} />
    </Modal>
  );
}
