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
      <DashboardHeader>როლები</DashboardHeader>
      {children}
      {modal}
    </>
  );
}
