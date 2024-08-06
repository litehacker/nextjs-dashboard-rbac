"use client";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useSearchParams } from "next/navigation";
import { ReactNode } from "react";

export default function Modal({ children }: { children: ReactNode }) {
  const searchParams = useSearchParams();

  return (
    <Dialog open={Boolean(searchParams.get("modal") === "true")}>
      <DialogContent className="max-w-screen-md max-h-[600px] overflow-y-auto bg-transparent border-none p-4 rounded-2xl bg-gray-100">
        {children}
      </DialogContent>
    </Dialog>
  );
}
