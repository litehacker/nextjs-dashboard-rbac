"use server";

import { deleteRole } from "@/actions/roles/delete";
import { DeleteRoleDialogForm } from "../../components/table/components/delete-role/form";
type Params = Promise<{ id: string }>;

export default async function DeleteRoleModal({ params }: { params: Params }) {
  const { id } = await params;
  const deleteRoleWithId = deleteRole.bind(null, id);
  return <DeleteRoleDialogForm action={deleteRoleWithId} />;
}
