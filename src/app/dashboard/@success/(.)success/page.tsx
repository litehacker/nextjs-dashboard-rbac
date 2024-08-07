"use server";
import { useRouter } from "next/navigation";
import Modal from "../../components/modal";
import { SuccessMessage } from "../../components/success-message";

export default async function SuccessPage({
  searchParams: { redirectToPath },
}: {
  searchParams: {
    redirectToPath?: string;
  };
}) {
  return (
    <Modal>
      <SuccessMessage
        redirectToPath={redirectToPath ?? "/dashboard/bookmarks"}
      />
    </Modal>
  );
}
