export type UserPermission = {
  value: "add" | "update" | "delete" | "view";
  title: string;
  description: string;
};

export type BookmarkPermission = {
  value: "add_archive" | "edit" | "delete" | "view" | "add";
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
