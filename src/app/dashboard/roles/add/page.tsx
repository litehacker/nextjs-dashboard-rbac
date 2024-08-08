import { createRole } from "@/actions/roles/create";
import AddRoleForm from "../components/add-form";

export default async function AddRolesForm() {
  return <AddRoleForm action={createRole} />;
}
