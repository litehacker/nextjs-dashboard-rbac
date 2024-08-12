"use server";

import { getAuthUser, getToken } from "@/lib/auth-check";
import { redirect, RedirectType } from "next/navigation";

export const deleteUser = async (id: string, formData: FormData) => {
  console.log("deleting", { id, formData: Object.fromEntries(formData) });
  const currentUser = await getAuthUser();
  // check that the users don't delete themselves
  if (Number(id) === currentUser?.id) {
    return;
  }

  await fetch(`${process.env.BASE_URL}/api/v1/users/delete/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${await getToken()}`,
    },
  });
  redirect("/dashboard/users/success?modal=true", RedirectType.replace);
};
