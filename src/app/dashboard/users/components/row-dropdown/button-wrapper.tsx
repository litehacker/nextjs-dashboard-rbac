"use client";
import { useRouter } from "next/navigation";
import { HTMLProps, ReactNode } from "react";

export const ButtonLinkWrapper = ({
  children,
  className,
  href,
}: {
  children: ReactNode;
  className?: HTMLProps<HTMLElement>["className"];
  href: string;
}) => {
  const router = useRouter();
  return (
    <button onClick={() => router.replace(href)} className={className}>
      {children}
    </button>
  );
};
