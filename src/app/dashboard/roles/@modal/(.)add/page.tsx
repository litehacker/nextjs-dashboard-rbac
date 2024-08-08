"use server";
import AddRoleForm from "../../components/add-form";
import Modal from "@/app/dashboard/components/modal";
import { createRole } from "@/actions/roles/create";

export default async function AddRolesModal({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  return (
    <Modal>
      <AddRoleForm action={createRole} />
    </Modal>
  );
}
