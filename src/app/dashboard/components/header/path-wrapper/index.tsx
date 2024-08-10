"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export const PathWrapper = ({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) => {
  const pathname = usePathname();
  return (
    <Link href={`${href}?source=${pathname}&modal=true`} replace>
      {children}
    </Link>
  );
};
