// src/app/Pages/Collaboration/Teams/page.tsx
"use client";

import { useState } from "react";
import TeamCollaborationClient from "./TeamCollaborationClient";
import { Role } from "./types";

export default function TeamCollaborationPage() {
  const [currentUserRole, setCurrentUserRole] = useState<Role>("Owner");

  return (
    <div className="mb-4">
      <TeamCollaborationClient currentUserRole={currentUserRole} />
    </div>
  );
}
