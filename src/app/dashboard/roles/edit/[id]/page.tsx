"use server";

import { updateRole } from "@/actions/roles/update";
import EditRoleForm from "@/app/dashboard/roles/components/edit-form";
type Params = Promise<{ id: string }>;

export default async function EditRoleModal({ params }: { params: Params }) {
  const { id } = await params;
  const updateRoleWithId = updateRole.bind(null, id);
  return <EditRoleForm action={updateRoleWithId} />;
}
