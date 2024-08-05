"use client";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useSearchParams } from "next/navigation";
import { ReactNode } from "react";

export default function Modal({ children }: { children: ReactNode }) {
  const searchParams = useSearchParams();

  return (
    <Dialog open={Boolean(searchParams.get("modal") === "true")}>
      <DialogContent className="max-w-screen max-h-screen overflow-y-auto bg-transparent border-none ">
        <div className="p-4 rounded-2xl bg-white">{children}</div>
      </DialogContent>
    </Dialog>
  );
}
