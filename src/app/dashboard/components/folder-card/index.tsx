"use server";
import { Card } from "@/components/ui/card";
import { FolderIcon } from "lucide-react";
import { FolderDropdown } from "./components/dropdown";
import { Tab } from "@/lib/types";
import { formatDate } from "@/lib/date-format";

export const FolderCard = async ({
  tab,
  hasEditPermission,
}: {
  tab: Tab;
  hasEditPermission: boolean;
}) => {
  return (
    <Card className="flex flex-col p-4 space-y-2 group relative">
      <div className="flex justify-center">
        <div
          id="folder"
          className="flex flex-col p-3 rounded-lg justify-center items-center group-hover:bg-[#F5F8FF]"
        >
          <FolderIcon className="w-12 h-12 text-gray-400" />
          <span className="text-sm text-gray-500">
            {formatDate(tab.updatedAt ?? "")}
          </span>
        </div>
      </div>
      <h2 className="text-lg font-semibold pb-4">{tab.name}</h2>
      <div className="flex flex-row justify-between">
        <span className="text-sm text-gray-500">{tab.name_code}</span>
        <span className="text-sm text-gray-500">{tab.document_level_id}</span>
      </div>
      <span className="absolute right-4">
        {hasEditPermission && tab.id && <FolderDropdown id={tab.id} />}
      </span>
    </Card>
  );
};
