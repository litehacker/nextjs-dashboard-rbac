"use server";
import { createUser } from "@/actions/users/create";
import Modal from "@/app/dashboard/components/modal";
import { CreateUserForm } from "../../components/create-form";

export default async function CreateUserPage() {
  return (
    <Modal>
      <CreateUserForm action={createUser} />
    </Modal>
  );
}
