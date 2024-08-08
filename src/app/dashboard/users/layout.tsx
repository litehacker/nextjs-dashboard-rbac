"use server";

import { ReactNode } from "react";
import { DashboardHeader } from "@/app/dashboard/components/header";

export default async function Layout({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) {
  return (
    <>
      <DashboardHeader>მომხმარებლები</DashboardHeader>
      {children}
      {modal}
    </>
  );
}
