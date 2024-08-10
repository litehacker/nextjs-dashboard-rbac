"use server";
import { ReactNode } from "react";

export default async function Layout({
  children,
  table,
}: {
  children: ReactNode;
  table: ReactNode;
}) {
  return (
    <>
      {table}
      {children}
    </>
  );
}
