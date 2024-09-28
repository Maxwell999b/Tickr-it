"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserPlus, Settings, MoreHorizontal, Trash2, X, Copy, Edit, Eye } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Role, Member, Team, Action, ROLES, ROLE_PERMISSIONS, ROLE_COLORS } from "./types";
type Props = {
  currentUserRole: Role;
};

export default function TeamCollaborationClient({ currentUserRole }: Props) {
  const [teams, setTeams] = useState<Team[]>([]);
  const [newTeam, setNewTeam] = useState({ name: "", description: "" });
  const [isCreateTeamDialogOpen, setIsCreateTeamDialogOpen] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);
  const [isInviteMemberDialogOpen, setIsInviteMemberDialogOpen] = useState(false);
  const [newMember, setNewMember] = useState<Omit<Member, "id" | "avatar">>({
    name: "",
    email: "",
    role: "Member",
  });
  const [isDeleteTeamDialogOpen, setIsDeleteTeamDialogOpen] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState("");
  const [isChangeRoleDialogOpen, setIsChangeRoleDialogOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [isEditTeamDialogOpen, setIsEditTeamDialogOpen] = useState(false);
  const [editedTeam, setEditedTeam] = useState<{ name: string; description: string }>({ name: "", description: "" });
  const { toast } = useToast();

  useEffect(() => {
    // Simulated API call to fetch teams
    const fetchTeams = async () => {
      const response = await new Promise<Team[]>((resolve) => {
        setTimeout(() => {
          resolve([
            {
              id: "1",
              name: "Development Team",
              description: "Frontend and backend developers",
              members: [
                { id: "1", name: "John Doe", email: "john@example.com", role: "Owner", avatar: "/placeholder.svg" },
                { id: "2", name: "Jane Smith", email: "jane@example.com", role: "Admin", avatar: "/placeholderF.svg" },
                {
                  id: "3",
                  name: "Mike Johnson",
                  email: "mike@example.com",
                  role: "Team Leader",
                  avatar: "/placeholder.svg",
                },
                {
                  id: "4",
                  name: "Emily Brown",
                  email: "emily@example.com",
                  role: "Member",
                  avatar: "/placeholderF.svg",
                },
                { id: "5", name: "Chris Lee", email: "chris@example.com", role: "Member", avatar: "/placeholder.svg" },
                {
                  id: "6",
                  name: "Sarah Davis",
                  email: "sarah@example.com",
                  role: "Watcher",
                  avatar: "/placeholderF.svg",
                },
                { id: "7", name: "You", email: "you@example.com", role: currentUserRole, avatar: "/placeholder.svg" },
              ],
            },
            {
              id: "2",
              name: "Design Team",
              description: "UI/UX designers",
              members: [
                {
                  id: "8",
                  name: "Alice Johnson",
                  email: "alice@example.com",
                  role: "Owner",
                  avatar: "/placeholderF.svg",
                },
                {
                  id: "9",
                  name: "Bob Wilson",
                  email: "bob@example.com",
                  role: "Team Leader",
                  avatar: "/placeholder.svg",
                },
                {
                  id: "10",
                  name: "Eva Martinez",
                  email: "eva@example.com",
                  role: "Member",
                  avatar: "/placeholderF.svg",
                },
                { id: "11", name: "David Kim", email: "david@example.com", role: "Member", avatar: "/placeholder.svg" },
                { id: "12", name: "You", email: "you@example.com", role: currentUserRole, avatar: "/placeholder.svg" },
              ],
            },
            {
              id: "3",
              name: "Marketing Team",
              description: "Digital marketing specialists",
              members: [
                {
                  id: "13",
                  name: "Grace Taylor",
                  email: "grace@example.com",
                  role: "Owner",
                  avatar: "/placeholderF.svg",
                },
                { id: "14", name: "Tom Harris", email: "tom@example.com", role: "Admin", avatar: "/placeholder.svg" },
                {
                  id: "15",
                  name: "Olivia Chen",
                  email: "olivia@example.com",
                  role: "Team Leader",
                  avatar: "/placeholderF.svg",
                },
                { id: "16", name: "Ryan Patel", email: "ryan@example.com", role: "Member", avatar: "/placeholder.svg" },
                {
                  id: "17",
                  name: "Sophie Martin",
                  email: "sophie@example.com",
                  role: "Watcher",
                  avatar: "/placeholderF.svg",
                },
                { id: "18", name: "You", email: "you@example.com", role: currentUserRole, avatar: "/placeholder.svg" },
              ],
            },
            {
              id: "4",
              name: "Sales Team",
              description: "Sales representatives and account managers",
              members: [
                {
                  id: "19",
                  name: "Daniel Wright",
                  email: "daniel@example.com",
                  role: "Owner",
                  avatar: "/placeholder.svg",
                },
                {
                  id: "20",
                  name: "Emma Thompson",
                  email: "emma@example.com",
                  role: "Team Leader",
                  avatar: "/placeholderF.svg",
                },
                {
                  id: "21",
                  name: "James Rodriguez",
                  email: "james@example.com",
                  role: "Member",
                  avatar: "/placeholder.svg",
                },
                {
                  id: "22",
                  name: "Sophia Lee",
                  email: "sophia@example.com",
                  role: "Member",
                  avatar: "/placeholderF.svg",
                },
                { id: "23", name: "You", email: "you@example.com", role: currentUserRole, avatar: "/placeholder.svg" },
              ],
            },
          ]);
        }, 1000);
      });
      setTeams(response);
    };
    fetchTeams();
  }, [currentUserRole]);

  const handleCreateTeam = () => {
    if (!newTeam.name) {
      setAlertMessage("Team name is required.");
      return;
    }

    if (teams.some((team) => team.name.toLowerCase() === newTeam.name.toLowerCase())) {
      setAlertMessage("A team with this name already exists.");
      return;
    }

    const newTeamData: Team = {
      id: (teams.length + 1).toString(),
      name: newTeam.name,
      description: newTeam.description || "No description provided",
      members: [{ id: "1", name: "You", email: "you@example.com", role: "Owner", avatar: "/placeholder.svg" }],
    };
    setTeams([...teams, newTeamData]);
    setNewTeam({ name: "", description: "" });
    setIsCreateTeamDialogOpen(false);
    toast({
      title: "Team Created",
      description: `${newTeamData.name} has been successfully created.`,
    });
  };

  const handleSelectTeam = (team: Team) => {
    setSelectedTeam(team);
  };

  const handleInviteMember = () => {
    if (selectedTeam) {
      if (!newMember.name || !newMember.email) {
        setAlertMessage("Name and email are required.");
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newMember.email)) {
        setAlertMessage("Please enter a valid email address.");
        return;
      }

      const emailExists = selectedTeam.members.some((member) => member.email === newMember.email);
      if (emailExists) {
        setAlertMessage("A member with this email already exists in the team.");
        return;
      }

      const nameExists = selectedTeam.members.some((member) => member.name === newMember.name);
      if (nameExists) {
        setAlertMessage("A member with this name already exists in the team.");
        return;
      }

      const updatedTeam = {
        ...selectedTeam,
        members: [
          ...selectedTeam.members,
          { ...newMember, id: (selectedTeam.members.length + 1).toString(), avatar: "/placeholder.svg" },
        ],
      };
      setTeams(teams.map((team) => (team.id === selectedTeam.id ? updatedTeam : team)));
      setSelectedTeam(updatedTeam);
      setNewMember({ name: "", email: "", role: "Member" });
      setIsInviteMemberDialogOpen(false);
      toast({
        title: "Member Invited",
        description: `${newMember.name} has been invited to ${selectedTeam.name}.`,
      });
    }
  };

  const handleRemoveMember = (memberId: string) => {
    if (selectedTeam) {
      const memberToRemove = selectedTeam.members.find((member) => member.id === memberId);
      if (memberToRemove && memberToRemove.role === "Owner") {
        setAlertMessage("You cannot remove the team owner.");
        return;
      }

      const updatedMembers = selectedTeam.members.filter((member) => member.id !== memberId);
      const updatedTeam = { ...selectedTeam, members: updatedMembers };
      setTeams(teams.map((team) => (team.id === selectedTeam.id ? updatedTeam : team)));
      setSelectedTeam(updatedTeam);
      toast({
        title: "Member Removed",
        description: "The member has been removed from the team.",
      });
    }
  };

  const handleDeleteTeam = () => {
    if (selectedTeam && deleteConfirmation === selectedTeam.name) {
      setTeams(teams.filter((team) => team.id !== selectedTeam.id));
      setSelectedTeam(null);
      setIsDeleteTeamDialogOpen(false);
      setDeleteConfirmation("");
      toast({
        title: "Team Deleted",
        description: `${selectedTeam.name} has been deleted.`,
        variant: "destructive",
      });
    } else {
      setAlertMessage("Please type the team name correctly to confirm deletion.");
    }
  };

  const handleChangeRole = (memberId: string, newRole: Role) => {
    if (selectedTeam) {
      const memberToChange = selectedTeam.members.find((member) => member.id === memberId);
      if (memberToChange && memberToChange.role === "Owner" && newRole !== "Owner") {
        setAlertMessage("You cannot change the role of the team owner.");
        return;
      }

      if (currentUserRole === "Admin" && newRole === "Owner") {
        setAlertMessage("Admins cannot change roles to Owner.");
        return;
      }

      const updatedMembers = selectedTeam.members.map((member) =>
        member.id === memberId ? { ...member, role: newRole } : member
      );
      const updatedTeam = { ...selectedTeam, members: updatedMembers };
      setTeams(teams.map((team) => (team.id === selectedTeam.id ? updatedTeam : team)));
      setSelectedTeam(updatedTeam);
      setIsChangeRoleDialogOpen(false);
      toast({
        title: "Role Changed",
        description: `Member's role has been updated to ${newRole}.`,
      });
    }
  };

  const handleEditTeam = () => {
    if (selectedTeam) {
      if (!editedTeam.name) {
        setAlertMessage("Team name is required.");
        return;
      }

      if (
        teams.some((team) => team.id !== selectedTeam.id && team.name.toLowerCase() === editedTeam.name.toLowerCase())
      ) {
        setAlertMessage("A team with this name already exists.");
        return;
      }

      const updatedTeam = {
        ...selectedTeam,
        name: editedTeam.name,
        description: editedTeam.description,
      };
      setTeams(teams.map((team) => (team.id === selectedTeam.id ? updatedTeam : team)));
      setSelectedTeam(updatedTeam);
      setIsEditTeamDialogOpen(false);
      toast({
        title: "Team Updated",
        description: `${updatedTeam.name} has been successfully updated.`,
      });
    }
  };

  const copyInviteLink = () => {
    const inviteLink = `https://yourapp.com/invite/${selectedTeam?.id}`;
    navigator.clipboard.writeText(inviteLink);
    toast({
      title: "Invite Link Copied",
      description: "The invite link has been copied to your clipboard.",
    });
  };

  const handleCollaboratorInputChange = (value: string, field: "name" | "email") => {
    setNewMember((prev) => ({ ...prev, [field]: value }));

    const allMembers = teams.flatMap((team) => team.members);
    const matchingMember = allMembers.find((m) =>
      field === "name"
        ? m.name.toLowerCase().startsWith(value.toLowerCase())
        : m.email.toLowerCase().startsWith(value.toLowerCase())
    );

    if (matchingMember) {
      setNewMember({
        name: field === "name" ? value : matchingMember.name,
        email: field === "email" ? value : matchingMember.email,
        role: matchingMember.role,
      });
    }
  };

  const canPerformAction = (action: Action): boolean => {
    return ROLE_PERMISSIONS[currentUserRole].includes(action);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {alertMessage && (
        <Alert variant="destructive" className="mb-4">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{alertMessage}</AlertDescription>
        </Alert>
      )}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 space-y-4 sm:space-y-0">
        <h1 className="text-3xl font-bold text-pink-600">Team Collaboration</h1>
        {canPerformAction("invite") && (
          <Dialog open={isCreateTeamDialogOpen} onOpenChange={setIsCreateTeamDialogOpen}>
            <DialogTrigger asChild>
              <Button className="w-full sm:w-auto">
                <UserPlus className="mr-2 h-4 w-4" />
                Create New Team
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] mx-auto w-[calc(100%-2rem)]">
              <DialogHeader>
                <DialogTitle>Create New Team</DialogTitle>
                <DialogDescription>Enter the details for your new team.</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="team-name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="team-name"
                    value={newTeam.name}
                    onChange={(e) => setNewTeam({ ...newTeam, name: e.target.value })}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="team-description" className="text-right">
                    Description
                  </Label>
                  <Input
                    id="team-description"
                    value={newTeam.description}
                    onChange={(e) => setNewTeam({ ...newTeam, description: e.target.value })}
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button onClick={handleCreateTeam}>Create Team</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <Card className="w-full lg:w-1/2">
          <CardHeader>
            <CardTitle className="text-blue-500 dark:text-blue-400">Your Teams</CardTitle>
            <CardDescription>Teams you&apos;re a part of</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>#</TableHead>
                  <TableHead>Team Name</TableHead>
                  <TableHead>Your Role</TableHead>
                  <TableHead>Members</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {teams.map((team, index) => (
                  <TableRow key={team.id}>
                    <TableCell>
                      <span className="bg-muted rounded-md text-muted-foreground">{index + 1}</span>
                    </TableCell>
                    <TableCell className="font-medium text-sky-500 dark:text-sky-400">{team.name}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className={`${ROLE_COLORS[currentUserRole]} text-white`}>
                        {currentUserRole}
                      </Badge>
                    </TableCell>
                    <TableCell>{team.members.length}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm" onClick={() => handleSelectTeam(team)}>
                        <Eye className="h-4 w-4 mr-2 text-purple-400" />
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {selectedTeam && (
          <Card className="w-full lg:w-1/2">
            <CardHeader>
              <div className="flex flex-col space-y-2">
                <div>
                  <CardTitle className="text-sky-500 dark:text-sky-400">{selectedTeam.name}</CardTitle>
                  <CardDescription>{selectedTeam.description}</CardDescription>
                </div>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  {canPerformAction("edit") && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full sm:w-auto"
                      onClick={() => {
                        setEditedTeam({ name: selectedTeam.name, description: selectedTeam.description });
                        setIsEditTeamDialogOpen(true);
                      }}>
                      <Edit className="h-4 w-4 mr-2 text-purple-400" />
                      Edit Team
                    </Button>
                  )}
                  {canPerformAction("delete") && (
                    <Button
                      variant="destructive"
                      size="sm"
                      className="w-full sm:w-auto"
                      onClick={() => setIsDeleteTeamDialogOpen(true)}>
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete Team
                    </Button>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-col space-y-2">
                  <h3 className="text-lg font-semibold text-primary">Team Members</h3>
                  <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                    {canPerformAction("invite") && (
                      <>
                        <Button variant="outline" size="sm" className="w-full sm:w-auto" onClick={copyInviteLink}>
                          <Copy className="mr-2 h-4 w-4 text-purple-400" />
                          Copy Invite Link
                        </Button>
                        <Dialog open={isInviteMemberDialogOpen} onOpenChange={setIsInviteMemberDialogOpen}>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm" className="w-full sm:w-auto">
                              <UserPlus className="mr-2 h-4 w-4 text-purple-400" />
                              Invite Member
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[425px] mx-auto w-[calc(100%-2rem)]">
                            <DialogHeader>
                              <DialogTitle className="text-pink-600">Invite New Member</DialogTitle>
                              <DialogDescription>Enter the details of the new team member.</DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                              <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="member-name" className="text-right">
                                  Name
                                </Label>
                                <Input
                                  id="member-name"
                                  value={newMember.name}
                                  onChange={(e) => handleCollaboratorInputChange(e.target.value, "name")}
                                  className="col-span-3"
                                />
                              </div>
                              <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="member-email" className="text-right">
                                  Email
                                </Label>
                                <Input
                                  id="member-email"
                                  type="email"
                                  value={newMember.email}
                                  onChange={(e) => handleCollaboratorInputChange(e.target.value, "email")}
                                  className="col-span-3"
                                />
                              </div>
                              <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="member-role" className="text-right">
                                  Role
                                </Label>
                                <Select
                                  value={newMember.role}
                                  onValueChange={(value: Role) => setNewMember({ ...newMember, role: value })}>
                                  <SelectTrigger className="col-span-3">
                                    <SelectValue placeholder="Select a role" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    {ROLES.map((role) => (
                                      <SelectItem key={role} value={role}>
                                        {role}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              </div>
                            </div>
                            <DialogFooter>
                              <Button onClick={handleInviteMember}>Invite Member</Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      </>
                    )}
                  </div>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {selectedTeam.members.map((member) => (
                      <TableRow key={member.id}>
                        <TableCell className="flex items-center space-x-2">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <Avatar>
                                  <AvatarImage src={member.avatar} alt={member.name} />
                                  <AvatarFallback>{member.name[0]}</AvatarFallback>
                                </Avatar>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="font-medium text-primary/70">{member.name}</p>
                                <p className="font-medium text-muted-foreground">{member.email}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                          <span className="font-medium text-primary">{member.name}</span>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className={`${ROLE_COLORS[member.role]} text-white`}>
                            {member.role}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              {canPerformAction("changeRole") && (
                                <DropdownMenuItem
                                  onClick={() => {
                                    setSelectedMember(member);
                                    setIsChangeRoleDialogOpen(true);
                                  }}>
                                  <Settings className="mr-2 h-4 w-4 stroke-primary" />
                                  <span className="text-sky-500 dark:text-sky-400">Change Role</span>
                                </DropdownMenuItem>
                              )}
                              <DropdownMenuSeparator />
                              {canPerformAction("remove") && (
                                <DropdownMenuItem
                                  onClick={() => handleRemoveMember(member.id)}
                                  className="text-red-600"
                                  disabled={member.role === "Owner"}>
                                  <X className="mr-2 h-4 w-4" />
                                  Remove from Team
                                </DropdownMenuItem>
                              )}
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      <Dialog open={isDeleteTeamDialogOpen} onOpenChange={setIsDeleteTeamDialogOpen}>
        <DialogContent className="sm:max-w-[425px] mx-auto w-[calc(100%-2rem)]">
          <DialogHeader>
            <DialogTitle className="text-destructive">Delete Team</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete the team{" "}
              <span className="font-semibold text-foreground">&quot;{selectedTeam?.name}&quot;</span>?
              <div className="mt-4 text-foreground">
                This action cannot be undone. To confirm, please type the team name below.
              </div>
            </DialogDescription>
          </DialogHeader>
          <Input
            value={deleteConfirmation}
            onChange={(e) => setDeleteConfirmation(e.target.value)}
            placeholder={`Type "${selectedTeam?.name}" to confirm`}
            className="mt-2"
          />
          <DialogFooter className="mt-6">
            <Button variant="outline" onClick={() => setIsDeleteTeamDialogOpen(false)}>
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={handleDeleteTeam}
              disabled={deleteConfirmation !== selectedTeam?.name}>
              Delete Team
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={isChangeRoleDialogOpen} onOpenChange={setIsChangeRoleDialogOpen}>
        <DialogContent className="sm:max-w-[425px] mx-auto w-[calc(100%-2rem)]">
          <DialogHeader>
            <DialogTitle className="text-pink-600">Change Member Role</DialogTitle>
            <DialogDescription>Select a new role for {selectedMember?.name}</DialogDescription>
          </DialogHeader>
          <Select
            value={selectedMember?.role}
            onValueChange={(value: Role) => {
              if (selectedMember) {
                handleChangeRole(selectedMember.id, value);
              }
            }}>
            <SelectTrigger>
              <SelectValue placeholder="Select a role" />
            </SelectTrigger>
            <SelectContent>
              {ROLES.map((role) => (
                <SelectItem key={role} value={role} disabled={currentUserRole === "Admin" && role === "Owner"}>
                  {role}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsChangeRoleDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setIsChangeRoleDialogOpen(false)}>Change Role</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={isEditTeamDialogOpen} onOpenChange={setIsEditTeamDialogOpen}>
        <DialogContent className="sm:max-w-[425px] mx-auto w-[calc(100%-2rem)]">
          <DialogHeader>
            <DialogTitle className="text-pink-600">Edit Team</DialogTitle>
            <DialogDescription>Update the team name and description.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="edit-team-name" className="text-right">
                Name
              </Label>
              <Input
                id="edit-team-name"
                value={editedTeam.name}
                onChange={(e) => setEditedTeam({ ...editedTeam, name: e.target.value })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="edit-team-description" className="text-right">
                Description
              </Label>
              <Input
                id="edit-team-description"
                value={editedTeam.description}
                onChange={(e) => setEditedTeam({ ...editedTeam, description: e.target.value })}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditTeamDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleEditTeam}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
