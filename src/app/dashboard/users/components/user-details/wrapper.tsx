"use client";

import { useSearchParams } from "next/navigation";
import { ReactNode } from "react";

export const UserDetailsClientWrapper = ({
  children,
}: {
  children: ReactNode;
}) => {
  const searchParams = useSearchParams();
  return searchParams.get("details") === "true" && children;
};
