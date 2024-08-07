"use server";

import { deleteRole } from "@/actions/roles/delete-role";
import { DeleteModalForm } from "@/app/dashboard/bookmarks/components/delete-modal-form";
import { DeleteRoleDialogForm } from "../../components/table/components/delete-role/form";

export default async function DeleteRoleModal({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  const deleteRoleWithId = deleteRole.bind(null, id);
  return <DeleteRoleDialogForm action={deleteRoleWithId} />;
}
