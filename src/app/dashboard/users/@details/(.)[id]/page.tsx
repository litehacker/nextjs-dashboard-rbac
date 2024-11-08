import { UserDetails } from "../../components/user-details";
type Params = Promise<{ id: string }>;

export default async function UserDetailsPage({ params }: { params: Params }) {
  const { id } = await params;
  return <UserDetails id={id} />;
}
