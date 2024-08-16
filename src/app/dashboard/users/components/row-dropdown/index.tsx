"use server";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { EllipsisVertical, Trash, User } from "lucide-react";
import { ButtonLinkWrapper } from "./button-wrapper";

export const RowDropdown = async ({
  id,
  hasDeleteUserPermission,
}: {
  id: string;
  hasDeleteUserPermission: boolean;
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="hover:bg-transparent p-0 !ring-0 !ring-offset-0"
        >
          <EllipsisVertical />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[248px]" side="left">
        <DropdownMenuItem className="px-4 py-3">
          <ButtonLinkWrapper
            className="flex gap-3 w-full"
            href={"/dashboard/users/" + id} // open user profile
          >
            <User color={"#323232"} />
            <span className="text-[#474747]">პროფილის ნახვა</span>
          </ButtonLinkWrapper>
        </DropdownMenuItem>
        {hasDeleteUserPermission && (
          <DropdownMenuItem className="px-4 py-3">
            <ButtonLinkWrapper
              href={`/dashboard/users/delete/${id}?modal=true`} // delete users
              className="flex gap-3 text-[#7A0000] w-full"
            >
              <Trash />
              <span>მომხმარებლის გაუქმება</span>
            </ButtonLinkWrapper>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
