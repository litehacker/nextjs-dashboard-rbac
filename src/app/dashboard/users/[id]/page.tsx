import { UserDetails } from "../components/user-details";

export default async function UserDetailsPage({
  params: { id },
}: {
  params: { id: string };
}) {
  console.log({ userId: id });
  return <UserDetails id={id} />;
}
