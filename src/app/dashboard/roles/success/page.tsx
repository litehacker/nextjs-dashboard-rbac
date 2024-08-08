"use server";
import { SuccessMessage } from "@/app/dashboard/components/success-message";

export default async function SuccessPage({
  searchParams: { redirectToPath },
}: {
  searchParams: {
    redirectToPath?: string;
  };
}) {
  return (
    <SuccessMessage redirectToPath={redirectToPath ?? "/dashboard/roles"} />
  );
}
