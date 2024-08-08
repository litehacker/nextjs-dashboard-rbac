"use server";
import { SuccessMessage } from "../components/success-message";

export default async function SuccessPage({
  searchParams: { redirectToPath },
}: {
  searchParams: {
    redirectToPath?: string;
  };
}) {
  return (
    <SuccessMessage redirectToPath={redirectToPath ?? "/dashboard/bookmarks"} />
  );
}
