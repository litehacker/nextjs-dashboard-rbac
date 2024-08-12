"use server";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  BriefcaseIcon,
  BuildingIcon,
  ChevronRightIcon,
  IdCard,
  MailIcon,
  Pencil,
  PhoneIcon,
  X,
} from "lucide-react";
import { MaleIcon } from "./icons/male";
import Link from "next/link";
import { getAuthUser, getToken } from "@/lib/auth-check";
import { User } from "@/interfaces/db.interfaces";

export const UserDetails = async ({ id }: { id: string }) => {
  const authUser = await getAuthUser();
  const token = await getToken();
  const hasEditUserPermission =
    authUser.role.permissions.users?.some(
      (permission) => permission.key === "update"
    ) ?? false;

  let user: User | undefined = undefined;

  try {
    console.log("requesting: ", process.env.BASE_URL + "/api/v1/users/" + id);
    const response = await fetch(process.env.BASE_URL + "/api/v1/users/" + id, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    if (response.ok) {
      const internalResponseJSON = await response.json();
      if (internalResponseJSON.success) {
        user = internalResponseJSON.data[0];
      }
    }
  } catch (e) {
    console.error(e);
  }

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow min-w-[380px]">
      <header className="flex items-center justify-between mb-4">
        <Link href="/dashboard/users" replace>
          <Button variant="ghost" size="icon">
            <X className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-sm">მომხმარებლის დეტალები</h1>
        <div>
          {hasEditUserPermission && (
            <Link href="/dashboard/users/edit/1?modal=true">
              <Button variant="ghost" size="icon">
                <Pencil className="h-4 w-4" />
              </Button>
            </Link>
          )}
        </div>
      </header>
      <div className="flex items-center mb-4">
        <Avatar className="mr-4">
          <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
          <AvatarFallback>GA</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-2">
          <h2 className="">
            {user?.name} {user?.lastName}
          </h2>
          <span className="flex w-fit px-4 py-1 rounded-full bg-[#F5F8FF] text-sm">
            {user?.position}
          </span>
        </div>
      </div>
      <section className="mb-4">
        <h3 className="text-sm font-thin text-muted-foreground">
          პირადი ინფორმაცია
        </h3>
        <div className="flex flex-col gap-2 p-4 mt-2 bg-gray-50 rounded-lg text-sm">
          <div className="flex items-center gap-2">
            <MaleIcon className="h-4 w-4" />
            <span>უცნობი</span>
          </div>
          <div className="flex items-center gap-2">
            <IdCard className="h-4 w-4" />
            <span>უცნობი</span>
          </div>
          <div className="flex items-center gap-2">
            <BuildingIcon className="h-4 w-4" />
            <span>{user?.agency}</span>
          </div>
          <div className="flex items-center gap-2">
            <BriefcaseIcon className="h-4 w-4" />
            <span>{user?.position}</span>
          </div>
        </div>
      </section>
      <section className="mb-4 text-sm">
        <h3 className="text-sm font-thin text-muted-foreground">
          საკონტაქტო ინფორმაცია
        </h3>
        <div className="p-4 mt-2 bg-gray-50 rounded-lg">
          <div className="flex items-center mb-2">
            <MailIcon className="h-4 w-4 mr-2" />
            <span>{user?.email}</span>
          </div>
          <div className="flex items-center">
            <PhoneIcon className="h-4 w-4 mr-2" />
            <span>{user?.phone}</span>
          </div>
        </div>
      </section>
      <Button variant="outline" className="w-full">
        <span className="flex items-center justify-between w-full">
          <span>ჩანაწერის როლი</span>
          <ChevronRightIcon className="h-4 w-4" />
        </span>
      </Button>
    </div>
  );
};
