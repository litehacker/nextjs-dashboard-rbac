export interface User {
  id: number;
  name: string;
  lastName: string;
  agency: string;
  position: string;
  email: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
}

interface Permissions {
  tabs: number[];
  users: number[];
}

interface Roles {
  id: number;
  name: string;
  description: string;
  permissions: Permissions;
  createdAt: string;
  updatedAt: string;
}

export interface AuthUser {
  name: string;
  name_eng: string;
  lastName: string;
  lastName_eng: string;
  agency: string;
  position: string;
  email: string;
  mobile: string;
  phone: string;
  role: AuthUserRole;
  createdAt: string;
  updatedAt: string;
  id: number;
  file: string;
}
export interface AuthUserRole {
  name: string;
  description: string;
  permissions: AuthUserPermissions;
  updatedAt: string;
  id: number;
}
export interface AuthUserPermissions {
  users?: AuthUsersEntityOrTabsEntity[] | null;
  tabs?: AuthUsersEntityOrTabsEntity[] | null;
  roles?: AuthUsersEntityOrTabsEntity[] | null;
}
export interface AuthUsersEntityOrTabsEntity {
  id: number;
  key: string;
  name: string;
}
