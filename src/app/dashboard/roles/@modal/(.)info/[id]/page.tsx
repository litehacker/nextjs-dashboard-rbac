"use server";

import Modal from "@/app/dashboard/components/modal";
import InfoRoleForm from "../../../components/info-form";
type Params = Promise<{ id: string }>;

export default async function InfoRoleModal() {
  return (
    <Modal>
      <InfoRoleForm />
    </Modal>
  );
}
