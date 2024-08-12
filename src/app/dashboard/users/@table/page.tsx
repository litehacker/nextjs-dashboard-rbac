"use server";

import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from "@/components/ui/table";
import { Header } from "../components/header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RowDropdown } from "../components/row-dropdown";
import { getAuthUser, getToken } from "@/lib/auth-check";
import { User } from "@/interfaces/db.interfaces";

export default async function UsersTablePage({
  searchParams: { name, lastName, agency, role },
}: {
  searchParams: {
    name?: string;
    lastName?: string;
    agency?: string;
    role?: string;
  };
}) {
  const user = await getAuthUser();
  const token = await getToken();
  const users: User[] = [];

  const hasAddUserPermission =
    user.role.permissions.users?.some(
      (permission) => permission.key === "add"
    ) ?? false;

  const searchParams = new URLSearchParams();
  if (name) {
    searchParams.append("name", name);
  }
  if (lastName) {
    searchParams.append("lastName", lastName);
  }
  if (agency) {
    searchParams.append("agency", agency);
  }
  if (role) {
    searchParams.append("role", role);
  }

  try {
    const response = await fetch(
      process.env.BASE_URL + "/api/v1/users?" + searchParams.toString(),
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    if (response.ok) {
      const internalResponseJSON = await response.json();
      if (internalResponseJSON.success) {
        const _tmpUsers = internalResponseJSON.data;
        users.push(..._tmpUsers);
      }
    }
  } catch (e) {
    console.error("Error fetching tabs", e);
  }
  return (
    <div className="bg-white rounded-lg w-full h-[calc(100vh-90px)] flex flex-col gap-4 shadow">
      <Header hasAddUserPermission={hasAddUserPermission} />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>სახელი</TableHead>
            <TableHead>გვარი</TableHead>
            <TableHead>უწყება</TableHead>
            <TableHead>თანამდებობა</TableHead>
            <TableHead>ელფოსტა</TableHead>
            <TableHead>მობილური</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user, index) => (
            <TableRow key={index}>
              <TableCell>
                <div className="flex items-center space-x-2">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" alt="User" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                  <span className="line-clamp-1">{user?.name}</span>
                </div>
              </TableCell>
              <TableCell>
                <span className="line-clamp-1">{user?.lastName}</span>
              </TableCell>
              <TableCell>
                <span className="line-clamp-1">{user?.agency}</span>
              </TableCell>
              <TableCell>
                <span className="line-clamp-1">{user?.position}</span>
              </TableCell>
              <TableCell>
                <span className="line-clamp-1">{user?.email}</span>
              </TableCell>
              <TableCell>
                <div className="flex justify-between items-center">
                  <span className="min-w-20">{user?.phone}</span>
                  <RowDropdown id={String(user.id)} />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
