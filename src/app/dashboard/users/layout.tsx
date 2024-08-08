"use server";

import { ReactNode } from "react";
import { DashboardHeader } from "@/app/dashboard/components/header";

export default async function Layout({
  children,
  modal,
  table,
  details,
}: {
  children: ReactNode;
  modal?: ReactNode;
  table?: ReactNode;
  details?: ReactNode;
}) {
  return (
    <>
      <DashboardHeader>მომხმარებლები</DashboardHeader>
      <div className="flex gap-2">
        {table}
        {children ?? null}
        {details ?? null}
      </div>
      {modal}
    </>
  );
}
