"use server";

import { editRole } from "@/actions/roles/edit-role";
import EditRoleForm from "../../components/edit-form";

export default async function EditRoleModal({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  const editRoleWithId = editRole.bind(null, id);
  return <EditRoleForm action={editRoleWithId} />;
}
