"use server";

import Modal from "@/app/dashboard/components/modal";
import { SuccessMessage } from "@/app/dashboard/components/success-message";

export default async function SuccessPage({
  searchParams: { redirectToPath },
}: {
  searchParams: {
    redirectToPath?: string;
  };
}) {
  return (
    <Modal>
      <SuccessMessage redirectToPath={redirectToPath ?? "/dashboard/roles"} />
    </Modal>
  );
}
