"use server";
import AddRoleForm from "../../components/add-form";
import Modal from "@/app/dashboard/components/modal";
import { addRole } from "@/actions/roles/add-role";

export default async function AddRolesModal({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  return (
    <Modal>
      <AddRoleForm action={addRole} />
    </Modal>
  );
}
