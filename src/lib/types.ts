export type UserPermission = {
  value: "create_user" | "edit_user" | "delete_user" | "view_user";
  title: string;
  description: string;
};

export type BookmarkPermission = {
  value: "create_record" | "edit_record" | "delete_record" | "view_record";
  title: string;
  description: string;
};
