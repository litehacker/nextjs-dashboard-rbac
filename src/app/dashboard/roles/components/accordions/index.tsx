"use client";
import { useCallback, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { CircleCheckIcon, X } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import { BookmarkPermission, UserPermission } from "@/lib/types";

const userPermissions: UserPermission[] = [
  {
    value: "create_user",
    title: "მომხმარებლის შექმნა",
    description: "მომხმარებლის შექმნის უფლების ჩანაწერი",
  },
  {
    value: "edit_user",
    title: "მომხმარებლის რედაქტირება",
    description: "მომხმარებლის შექმნის უფლების ჩანაწერის რედაქტირება",
  },
  {
    value: "delete_user",
    title: "მომხმარებლის წაშლა",
    description: "მომხმარებლის შექმნის უფლების ჩანაწერის წაშლა",
  },
];
const bookmarkPermissions: BookmarkPermission[] = [
  {
    value: "create_record",
    title: "ჩანაწერის შექმნა",
    description: "მომხმარებლის შექმნის უფლების ჩანაწერი",
  },
  {
    value: "edit_record",
    title: "ჩანაწერის რედაქტირება",
    description: "მომხმარებლის შექმნის უფლების ჩანაწერის რედაქტირება",
  },
  {
    value: "delete_record",
    title: "ჩანაწერის წაშლა",
    description: "მომხმარებლის შექმნის უფლების ჩანაწერის წაშლა",
  },
];

export const AccordionInputs = () => {
  const [selectedBookmarkPermissions, setSelectedBookmarkPermissions] =
    useState<BookmarkPermission["value"][]>([]);
  const [selectedUserPermissions, setSelectedUserPermissions] = useState<
    UserPermission["value"][]
  >([]);
  const handleBookmarkPermissionChange = useCallback(
    (permission: "create_record" | "edit_record" | "delete_record") => {
      if (selectedBookmarkPermissions.includes(permission)) {
        setSelectedBookmarkPermissions(
          selectedBookmarkPermissions.filter((p) => p !== permission)
        );
      } else {
        setSelectedBookmarkPermissions([
          ...selectedBookmarkPermissions,
          permission,
        ]);
      }
    },
    [selectedBookmarkPermissions]
  );
  const handleUserPermissionChange = useCallback(
    (permission: "create_user" | "edit_user" | "delete_user") => {
      if (selectedUserPermissions.includes(permission)) {
        setSelectedUserPermissions(
          selectedUserPermissions.filter((p) => p !== permission)
        );
      } else {
        setSelectedUserPermissions([...selectedUserPermissions, permission]);
      }
    },
    [selectedUserPermissions]
  );
  return (
    <div className="overflow-y-auto">
      <Label className="block text-sm font-medium">როლის უფლებები</Label>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem
          value="item-1"
          className="border rounded-md p-4 mt-2 flex flex-col gap-4"
        >
          <AccordionTrigger className="py-0">
            <div className="flex items-center h-[35px]">
              <span className="text-sm font-bold">ჩანაწერები</span>
              <div className="flex items-center justify-between px-4 w-full">
                {selectedBookmarkPermissions.length ? (
                  <div className="flex items-center space-x-2 text-blue-500">
                    <CircleCheckIcon className="w-6 h-6" />
                    <span>
                      {
                        // total amount of checked roles inside the permissions
                        selectedBookmarkPermissions.length
                      }
                    </span>
                  </div>
                ) : null}
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {bookmarkPermissions.map((permission) => {
                const checked = selectedBookmarkPermissions.includes(
                  permission.value
                );
                return (
                  <div key={permission.value}>
                    <div
                      className={cn(
                        "border rounded-md flex p-2 justify-between items-center",
                        {
                          "bg-[#F5F8FF]": checked,
                          "bg-white": !checked,
                        }
                      )}
                    >
                      <div>
                        <p
                          className={cn("text-sm font-medium", {
                            "text-[#0A3998]": checked,
                          })}
                        >
                          {permission.title}
                        </p>
                        <p
                          className={cn("text-xs ", {
                            "text-gray-500": !checked,
                            "text-blue-600": checked,
                          })}
                        >
                          {permission.description}
                        </p>
                      </div>
                      <Checkbox
                        checked={checked}
                        onCheckedChange={() =>
                          handleBookmarkPermissionChange(permission.value)
                        }
                        className="text-blue-600"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem
          value="item-2"
          className="border rounded-md p-4 mt-2 flex flex-col gap-4"
        >
          <AccordionTrigger className="py-0">
            <div className="flex items-center h-[35px]">
              <span className="text-sm font-bold">მომხმარებლები</span>
              <div className="flex items-center justify-between px-4 w-full">
                {selectedUserPermissions.length ? (
                  <div className="flex items-center space-x-2 text-blue-500">
                    <CircleCheckIcon className="w-6 h-6" />
                    <span>
                      {
                        // total amount of checked roles inside the permissions
                        selectedUserPermissions.length
                      }
                    </span>
                  </div>
                ) : null}
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {userPermissions.map((permission) => {
                const checked = selectedUserPermissions.includes(
                  permission.value
                );
                return (
                  <div key={permission.value}>
                    <div
                      className={cn(
                        "border rounded-md flex p-2 justify-between items-center",
                        {
                          "bg-[#F5F8FF]": checked,
                          "bg-white": !checked,
                        }
                      )}
                    >
                      <div>
                        <p
                          className={cn("text-sm font-medium", {
                            "text-[#0A3998]": checked,
                          })}
                        >
                          {permission.title}
                        </p>
                        <p
                          className={cn("text-xs ", {
                            "text-gray-500": !checked,
                            "text-blue-600": checked,
                          })}
                        >
                          {permission.description}
                        </p>
                      </div>
                      <Checkbox
                        checked={checked}
                        onCheckedChange={() =>
                          handleUserPermissionChange(permission.value)
                        }
                        className="text-blue-600"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
