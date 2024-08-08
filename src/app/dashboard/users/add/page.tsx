"use server";
import { createUser } from "@/actions/users/create";
import { CreateUserForm } from "../components/create-form";

export default async function CreateUserPage() {
  return <CreateUserForm action={createUser} />;
}
