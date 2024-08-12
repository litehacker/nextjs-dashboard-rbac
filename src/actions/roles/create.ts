"use server";
import { redirect, RedirectType } from "next/navigation";

export const createRole = async (formData: FormData) => {
  console.log("adding", { formData: Object.fromEntries(formData) });

  try {
    await fetch("/api/v1/role/add", {
      method: "POST",
      body: formData,
    });
  } catch (e: any) {
    console.error("Error creating role", e);
    return new Response(JSON.stringify({ success: false, error: e.message }), {
      status: 500,
      headers: { "content-type": "application/json" },
    });
  }
  redirect("/dashboard/roles/success?modal=true", RedirectType.replace);
};
