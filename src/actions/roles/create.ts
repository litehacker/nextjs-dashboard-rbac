"use server";
import { getToken } from "@/lib/auth-check";
import { redirect, RedirectType } from "next/navigation";

export const createRole = async (formData: FormData) => {
  console.log("adding", { formData: Object.fromEntries(formData) });
  const formDataObject = Object.fromEntries(formData);
  const data = {
    name: formDataObject?.name,
    description: formDataObject?.description,
    permissions: {
      users: [],
      tabs: [],
      roles: [1, 2, 3, 4],
    },
  };

  const updatedPermissions: {
    users: { key: string; name: FormDataEntryValue }[];
    tabs: { key: string; name: FormDataEntryValue }[];
  } = {
    users: [],
    tabs: [],
  };

  for (const [key, value] of formData.entries()) {
    if (key.startsWith("user_")) {
      updatedPermissions.users.push({ key, name: value });
    } else if (key.startsWith("tab_")) {
      updatedPermissions.tabs.push({ key, name: value });
    }
  }

  console.log("Generated permissions object:", updatedPermissions);

  try {
    const token = await getToken();

    await fetch(process.env.BASE_URL + "/api/v1/role/add", {
      method: "POST",
      body: JSON.stringify({
        ...data,
        permissions: { ...data.permissions, ...updatedPermissions },
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
  } catch (e: any) {
    console.error("Error creating role", e);
    redirect("/dashboard/roles/error?modal=true", RedirectType.replace);
  }
  redirect("/dashboard/roles/success?modal=true", RedirectType.replace);
};
