"use server";

import Modal from "@/app/dashboard/components/modal";
import { SuccessMessage } from "@/app/dashboard/components/success-message";
type SearchParams = Promise<{ redirectToPath?: string }>;

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { redirectToPath } = await searchParams;
  return (
    <Modal>
      <SuccessMessage
        redirectToPath={redirectToPath ?? "/dashboard/bookmarks"}
      />
    </Modal>
  );
}
