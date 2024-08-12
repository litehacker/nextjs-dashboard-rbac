"use server";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SearchWrapper } from "./search";
import { CircleX, SlidersHorizontal } from "lucide-react";

export const Header = ({
  hasAddUserPermission,
}: {
  hasAddUserPermission: boolean;
}) => {
  return (
    <div className="flex flex-row gap-4 px-4 py-3 ">
      {hasAddUserPermission && (
        <Link href="/dashboard/users/add?modal=true" replace>
          <Button>დამატება</Button>
        </Link>
      )}
      <form>
        <SearchWrapper>
          <button title="წაშლა" type="reset">
            <CircleX
              color="#757575"
              className="h-6 w-6 cursor-pointer hover:bg-slate-100 rounded p-1"
            />
          </button>
          <Link href="/dashboard/users/filter?modal=true" replace>
            <SlidersHorizontal className="h-6 w-6 cursor-pointer hover:bg-slate-100 rounded p-1" />
          </Link>
        </SearchWrapper>
      </form>
    </div>
  );
};
