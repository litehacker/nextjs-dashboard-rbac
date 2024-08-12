"use server";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Role, RolesTable } from "./components/table";
import Link from "next/link";
import { getAuthUser, getToken } from "@/lib/auth-check";

export default async function Roles() {
  const token = await getToken();
  const authUser = await getAuthUser();
  const hasAddRolePermission = authUser.role.permissions.roles?.some(
    (permission) => permission.key === "add"
  );
  const roles: any[] = [];
  try {
    const response = await fetch(process.env.BASE_URL + "/api/v1/role", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    if (response.ok) {
      const internalResponseJSON = await response.json();
      if (internalResponseJSON.success) {
        roles.push(...internalResponseJSON.data);
      }
    }
  } catch (e) {
    console.error(e);
  }

  return (
    <>
      <div className="p-2 h-full">
        <Card className="flex flex-col">
          <div className="flex justify-between px-4 py-2 items-center">
            {hasAddRolePermission && (
              <Link href="/dashboard/roles/add?modal=true">
                <Button variant="secondary">დამატება</Button>
              </Link>
            )}
            <span className="text-[#636971]">სულ {roles.length}</span>
          </div>
          <RolesTable roles={roles} />
        </Card>
      </div>
    </>
  );
}
