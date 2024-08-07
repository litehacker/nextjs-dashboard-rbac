"use server";

import Modal from "@/app/dashboard/components/modal";
import InfoRoleForm from "../../../components/info-form";

export default async function InfoRoleModal({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  return (
    <Modal>
      <InfoRoleForm />
    </Modal>
  );
}
