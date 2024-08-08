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
import Link from "next/link";

export default async function UserDetailsPage() {
  return (
    <div className="bg-white rounded-lg w-full h-[calc(100vh-90px)] flex flex-col gap-4 shadow">
      <Header />
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
          {Array.from({ length: 3 }).map((_, index) => (
            <TableRow key={index}>
              <TableCell>
                <div className="flex items-center space-x-2">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" alt="User" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                  <span className="line-clamp-1">
                    გიორგიგიორგიგიორგიგიორგიგიორგი გიორგი გიორგი გიორგი გიორგი
                  </span>
                </div>
              </TableCell>
              <TableCell>
                <span className="line-clamp-1">აბრამიშვილი</span>
              </TableCell>
              <TableCell>
                <span className="line-clamp-1">
                  სსიპ ციფრული მმართველობის რაღაც სსიპ ციფრული მმართველობის
                  რაღაც სსიპ ციფრული მმართველობის რაღაც სსიპ ციფრული
                  მმართველობის რაღაც სსიპ ციფრული მმართველობის რაღაც
                </span>
              </TableCell>
              <TableCell>
                <span className="line-clamp-1">მენეჯერი</span>
              </TableCell>
              <TableCell>
                <span className="line-clamp-1">test@mail.com</span>
              </TableCell>
              <TableCell>
                <div className="flex justify-between items-center">
                  <span className="min-w-20">555555555</span>
                  <RowDropdown />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
