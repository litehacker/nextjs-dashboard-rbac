"use server";

import InfoRoleForm from "../../components/info-form";

export default async function InfoRoleModal({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  return <InfoRoleForm />;
}
