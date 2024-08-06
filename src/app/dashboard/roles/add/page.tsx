import { addRole } from "@/actions/roles/add-role";
import AddRoleForm from "../components/add-form";

export default async function AddRolesForm() {
  return <AddRoleForm action={addRole} />;
}
