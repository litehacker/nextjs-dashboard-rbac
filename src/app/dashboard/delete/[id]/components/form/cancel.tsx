"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

export const CancelForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const source = searchParams.get("source") ?? "/dashboard/bookmarks";
  return (
    <Link href={source} replace>
      <Button onClick={() => router.replace(source)}>არა</Button>
    </Link>
  );
};
