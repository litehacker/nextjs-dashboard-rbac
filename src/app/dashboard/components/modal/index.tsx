"use client";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useSearchParams } from "next/navigation";
import { ReactNode } from "react";

export default function Modal({ children }: { children: ReactNode }) {
  const searchParams = useSearchParams();

  return (
    <Dialog open={Boolean(searchParams.get("modal") === "true")}>
      <DialogContent className="max-h-[100vh] overflow-hidden bg-transparent border-none p-0 rounded-2xl bg-gray-100 max-w-[800px]">
        {children}
      </DialogContent>
    </Dialog>
  );
}
