"use server";

import { updateRole } from "@/actions/roles/update";
import EditRoleForm from "@/app/dashboard/roles/components/edit-form";

export default async function EditRoleModal({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  const updateRoleWithId = updateRole.bind(null, id);
  return <EditRoleForm action={updateRoleWithId} />;
}
