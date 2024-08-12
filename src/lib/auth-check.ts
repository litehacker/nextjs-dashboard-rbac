"use server";
import { AuthUser } from "@/interfaces/db.interfaces";
import { cookies } from "next/headers";

export const getAuthUser = async () => {
  const cookieStore = cookies();
  const userString = cookieStore.get("dashboard-user")?.value ?? "{}";
  const user: AuthUser = JSON.parse(userString);
  return user;
};
export const getToken = async () => {
  const cookieStore = cookies();
  return cookieStore.get("auth-token")?.value ?? "";
};
