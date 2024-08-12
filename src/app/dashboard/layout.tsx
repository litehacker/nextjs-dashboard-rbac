"use server";
import { ReactNode } from "react";
import { DashboardNavigation } from "./components/navigation";
import { cookies } from "next/headers";
import { AuthUser } from "@/interfaces/db.interfaces";
import { Bookmark, BriefcaseBusiness, Users } from "lucide-react";
import { getAuthUser } from "@/lib/auth-check";

export default async function DashboardLayout({
  children,
  file,
}: {
  children: ReactNode;
  file: ReactNode;
}) {
  const user = await getAuthUser();
  const navigation = [];

  if (user?.role?.permissions?.tabs?.length) {
    navigation.push({
      title: "ჩანართები",
      icon: <Bookmark className="h-6 w-[60px] my-3" />,
      href: "/dashboard/bookmarks",
    });
  }

  if (user?.role?.permissions?.users?.length) {
    navigation.push({
      title: "მომხმარებლები",
      icon: <Users className="h-6 w-[60px] my-3" />,
      href: "/dashboard/users",
    });
  }

  if (user?.role?.permissions?.roles?.length) {
    navigation.push({
      title: "როლები",
      icon: <BriefcaseBusiness className="h-6 w-[60px] my-3" />,
      href: "/dashboard/roles",
    });
  }
  return (
    <>
      <div className="flex min-h-screen bg-gray-50">
        <DashboardNavigation navigation={navigation} />
        <main className="flex-1 ml-[80px]  p-2 bg-gray-50">{children}</main>
      </div>
      {file}
    </>
  );
}
