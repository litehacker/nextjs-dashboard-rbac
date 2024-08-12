import { UserDetails } from "../../components/user-details";

export default async function UserDetailsPage({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  return <UserDetails id={id} />;
}
