"use server";
import { Card } from "@/components/ui/card";
import { FolderIcon } from "lucide-react";
import { FolderDropdown } from "./components/dropdown";

export const FolderCard = () => {
  return (
    <Card className="flex flex-col p-4 space-y-2 group relative">
      <div className="flex justify-center">
        <div
          id="folder"
          className="flex flex-col p-3 rounded-lg justify-center items-center group-hover:bg-[#F5F8FF]"
        >
          <FolderIcon className="w-12 h-12 text-gray-400" />
          <span className="text-sm text-gray-500">12/24/2023</span>
        </div>
      </div>
      <h2 className="text-lg font-semibold pb-4">პროექტის დასახელება</h2>
      <div className="flex flex-row justify-between">
        <span className="text-sm text-gray-500">NAMECODE102</span>
        <span className="text-sm text-gray-500">სტატუსი</span>
      </div>
      <span className="absolute right-4">
        <FolderDropdown />
      </span>
    </Card>
  );
};
