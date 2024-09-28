export type Role = "Owner" | "Admin" | "Team Leader" | "Member" | "Watcher";

export type Member = {
  id: string;
  name: string;
  email: string;
  role: Role;
  avatar: string;
};

export type Team = {
  id: string;
  name: string;
  description: string;
  members: Member[];
};

export type Action = "invite" | "changeRole" | "remove" | "delete" | "edit";

export const ROLES: Role[] = ["Owner", "Admin", "Team Leader", "Member", "Watcher"];

export const ROLE_PERMISSIONS: Record<Role, Action[]> = {
  Owner: ["invite", "changeRole", "remove", "delete", "edit"],
  Admin: ["invite", "changeRole"],
  "Team Leader": ["invite"],
  Member: [],
  Watcher: [],
};

export const ROLE_COLORS: Record<Role, string> = {
  Owner: "bg-red-500",
  Admin: "bg-orange-500",
  "Team Leader": "bg-yellow-500",
  Member: "bg-green-500",
  Watcher: "bg-blue-500",
};
