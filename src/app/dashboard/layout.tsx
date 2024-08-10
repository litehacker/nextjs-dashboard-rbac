import { ReactNode } from "react";
import { DashboardNavigation } from "./components/navigation";

export default async function DashboardLayout({
  children,
  file,
}: {
  children: ReactNode;
  file: ReactNode;
}) {
  return (
    <>
      <div className="flex min-h-screen bg-gray-50">
        <DashboardNavigation />
        <main className="flex-1 ml-[80px]  p-2 bg-gray-50">{children}</main>
      </div>
      {file}
    </>
  );
}
