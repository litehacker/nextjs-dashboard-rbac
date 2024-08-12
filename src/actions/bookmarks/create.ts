"use server";
import { getToken } from "@/lib/auth-check";
import { Tab } from "@/lib/types";
import { redirect, RedirectType } from "next/navigation";

export const createBookmark = async (formData: FormData) => {
  console.log("creating", { formData: formData });
  const data: Tab = {
    name: formData.get("name") as string,
    name_eng: formData.get("name_eng") as string,
    name_code: formData.get("name_code") as string,
    is_archive: formData.get("is_archive") as "false" | "true",
    document_level_id: Number(formData.get("document_level_id")),
    valide_period: formData.get("valide_period") as string,
    updatedAt: new Date(),
  };

  const response = await fetch(`${process.env.BASE_URL}/api/v1/tabs/add/`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      Authorization: `Bearer ${await getToken()}`,
    },
  });
  if (!response.ok) {
    console.log("Failed to update bookmark", { response: response });
    throw new Error("Failed to update bookmark");
  }
  redirect("/dashboard/bookmarks/success?modal=true", RedirectType.replace);
};
