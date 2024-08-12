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

export type Tab = {
  id?: number;
  name: string;
  name_eng?: string;
  name_code?: string;
  is_archive?: "false" | "true";
  document_level_id?: number;
  valide_period?: string;
  createdAt?: Date;
  updatedAt?: Date;
};
