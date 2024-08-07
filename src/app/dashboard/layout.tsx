import { ReactNode } from "react";
import { DashboardNavigation } from "./components/navigation";
import Link from "next/link";

export default async function DashboardLayout({
  children,
  success,
}: {
  children: ReactNode;
  success?: ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <DashboardNavigation />
      <main className="flex-1 ml-[80px]  p-2 bg-gray-50">
        {children}
        {success}
      </main>
    </div>
  );
}
