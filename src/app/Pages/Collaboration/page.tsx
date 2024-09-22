"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Share2, UserPlus, X, MessageSquare, ChevronDown } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Mock data for tasks and collaborators
const initialTasks = [
  {
    id: 1,
    name: "Design new landing page",
    assignedTo: [
      { name: "You", email: "you@example.com" },
      { name: "Alice Johnson", email: "alice@example.com" },
    ],
    sharedWith: [
      { name: "Alice Johnson", email: "alice@example.com" },
      { name: "Bob Smith", email: "bob@example.com" },
      { name: "Charlie Brown", email: "charlie@example.com" },
      { name: "David Lee", email: "david@example.com" },
    ],
    status: "In Progress",
    comments: [],
  },
  {
    id: 2,
    name: "Implement user authentication",
    assignedTo: [{ name: "Alice Johnson", email: "alice@example.com" }],
    sharedWith: [{ name: "You", email: "you@example.com" }],
    status: "Pending",
    comments: [],
  },
  {
    id: 3,
    name: "Write API documentation",
    assignedTo: [{ name: "You", email: "you@example.com" }],
    sharedWith: [{ name: "Charlie Brown", email: "charlie@example.com" }],
    status: "Completed",
    comments: [],
  },
];

const initialCollaborators = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", avatar: "/placeholder.svg" },
  { id: 2, name: "Bob Smith", email: "bob@example.com", avatar: "/placeholder.svg" },
  { id: 3, name: "Charlie Brown", email: "charlie@example.com", avatar: "/placeholder.svg" },
];

export default function TaskCollaboration() {
  const [tasks, setTasks] = useState(initialTasks);
  const [collaborators, setCollaborators] = useState(initialCollaborators);
  const [selectedTask, setSelectedTask] = useState(null);
  const [isShareDialogOpen, setIsShareDialogOpen] = useState(false);
  const [isCommentDialogOpen, setIsCommentDialogOpen] = useState(false);
  const [isAssignDialogOpen, setIsAssignDialogOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [newCollaborator, setNewCollaborator] = useState({ name: "", email: "" });
  const [newComment, setNewComment] = useState("");

  const updateCollaborators = useCallback(() => {
    const allCollaborators = new Set();
    tasks.forEach((task) => {
      task.assignedTo.forEach((person) => allCollaborators.add(JSON.stringify(person)));
      task.sharedWith.forEach((person) => allCollaborators.add(JSON.stringify(person)));
    });
    const updatedCollaborators = Array.from(allCollaborators).map(JSON.parse);
    setCollaborators(updatedCollaborators);
  }, [tasks]);

  useEffect(() => {
    updateCollaborators();
  }, [tasks, updateCollaborators]);

  const handleShareTask = (taskId) => {
    setSelectedTask(tasks.find((task) => task.id === taskId));
    setIsShareDialogOpen(true);
  };

  const handleAssignTask = (taskId) => {
    setSelectedTask(tasks.find((task) => task.id === taskId));
    setIsAssignDialogOpen(true);
  };

  const handleAddCollaborator = (type) => {
    if (newCollaborator.name && newCollaborator.email) {
      const updatedTasks = tasks.map((task) =>
        task.id === selectedTask.id ? { ...task, [type]: [...task[type], newCollaborator] } : task
      );
      setTasks(updatedTasks);
      setSelectedTask({ ...selectedTask, [type]: [...selectedTask[type], newCollaborator] });
      setNewCollaborator({ name: "", email: "" });
    }
  };

  const handleRemoveCollaborator = (type, collaboratorEmail) => {
    const updatedTasks = tasks.map((task) =>
      task.id === selectedTask.id ? { ...task, [type]: task[type].filter((c) => c.email !== collaboratorEmail) } : task
    );
    setTasks(updatedTasks);
    setSelectedTask({ ...selectedTask, [type]: selectedTask[type].filter((c) => c.email !== collaboratorEmail) });
  };

  const handleOpenCommentDialog = (taskId) => {
    setSelectedTask(tasks.find((task) => task.id === taskId));
    setIsCommentDialogOpen(true);
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      const updatedTasks = tasks.map((task) =>
        task.id === selectedTask.id
          ? {
              ...task,
              comments: [...task.comments, { text: newComment, author: "You", timestamp: new Date().toISOString() }],
            }
          : task
      );
      setTasks(updatedTasks);
      setSelectedTask({
        ...selectedTask,
        comments: [...selectedTask.comments, { text: newComment, author: "You", timestamp: new Date().toISOString() }],
      });
      setNewComment("");
    }
  };

  const filteredTasks = tasks.filter(
    (task) =>
      (task.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.assignedTo.some(
          (person) =>
            person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            person.email.toLowerCase().includes(searchTerm.toLowerCase())
        ) ||
        task.sharedWith.some(
          (person) =>
            person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            person.email.toLowerCase().includes(searchTerm.toLowerCase())
        )) &&
      (statusFilter === "all" || task.status === statusFilter)
  );

  const renderCollaborators = (collaborators, max = 3) => {
    const visibleCollaborators = collaborators.slice(0, max);
    const remainingCount = collaborators.length - max;

    return (
      <div className="flex items-center">
        <div className="flex -space-x-2 overflow-hidden">
          {visibleCollaborators.map((collaborator, index) => (
            <Avatar key={index} className="inline-block border-2 border-background">
              <AvatarFallback>{collaborator.name[0]}</AvatarFallback>
            </Avatar>
          ))}
        </div>
        {remainingCount > 0 && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="ml-2 h-8 w-8 rounded-full">
                +{remainingCount}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {collaborators.slice(max).map((collaborator, index) => (
                <DropdownMenuItem key={index}>
                  {collaborator.name} ({collaborator.email})
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <h1 className="text-3xl font-bold mb-8">Task Collaboration</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Your Collaborative Tasks</CardTitle>
          <CardDescription>Manage and share your tasks with team members</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center mb-4">
            <Input
              type="text"
              placeholder="Search tasks..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-sm mr-2"
            />
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="In Progress">In Progress</SelectItem>
                <SelectItem value="Pending">Pending</SelectItem>
                <SelectItem value="Completed">Completed</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Task Name</TableHead>
                <TableHead>Assigned To</TableHead>
                <TableHead>Shared With</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTasks.map((task) => (
                <TableRow key={task.id}>
                  <TableCell>{task.name}</TableCell>
                  <TableCell>
                    {renderCollaborators(task.assignedTo, 2)}
                    <Button onClick={() => handleAssignTask(task.id)} variant="ghost" size="sm" className="ml-2">
                      <UserPlus className="w-4 h-4" />
                    </Button>
                  </TableCell>
                  <TableCell>{renderCollaborators(task.sharedWith)}</TableCell>
                  <TableCell>{task.status}</TableCell>
                  <TableCell>
                    <Button onClick={() => handleShareTask(task.id)} variant="outline" size="sm" className="mr-2">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                    <Button onClick={() => handleOpenCommentDialog(task.id)} variant="outline" size="sm">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Comment
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Your Collaborators</CardTitle>
          <CardDescription>People you&apos;re working with on various tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className={`grid gap-4 ${collaborators.length % 2 === 0 ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
            {collaborators.map((collaborator) => (
              <Popover key={collaborator.id}>
                <PopoverTrigger asChild>
                  <div className="flex items-center space-x-4 p-4 bg-card rounded-lg shadow cursor-pointer hover:bg-muted transition-colors">
                    <Avatar>
                      <AvatarImage src={collaborator.avatar} alt={collaborator.name} />
                      <AvatarFallback>{collaborator.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{collaborator.name}</p>
                      <p className="text-sm text-muted-foreground">{collaborator.email}</p>
                    </div>
                  </div>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center space-x-2">
                      <Avatar>
                        <AvatarImage src={collaborator.avatar} />
                        <AvatarFallback>{collaborator.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold">{collaborator.name}</h4>
                        <p className="text-sm">{collaborator.email}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <h5 className="font-semibold mb-1">Shared Tasks:</h5>
                    <ul className="text-sm">
                      {tasks
                        .filter(
                          (task) =>
                            task.sharedWith.some((person) => person.email === collaborator.email) ||
                            task.assignedTo.some((person) => person.email === collaborator.email)
                        )
                        .map((task) => (
                          <li key={task.id}>{task.name}</li>
                        ))}
                    </ul>
                  </div>
                </PopoverContent>
              </Popover>
            ))}
          </div>
        </CardContent>
      </Card>

      <Dialog open={isShareDialogOpen} onOpenChange={setIsShareDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Share Task</DialogTitle>
            <DialogDescription>Add or remove collaborators for this task</DialogDescription>
          </DialogHeader>
          {selectedTask && (
            <div>
              <h3 className="font-medium mb-2">Task: {selectedTask.name}</h3>
              <div className="flex items-center space-x-2 mb-4">
                <Input
                  placeholder="Name"
                  value={newCollaborator.name}
                  onChange={(e) => setNewCollaborator({ ...newCollaborator, name: e.target.value })}
                />
                <Input
                  placeholder="Email"
                  value={newCollaborator.email}
                  onChange={(e) => setNewCollaborator({ ...newCollaborator, email: e.target.value })}
                />
                <Button onClick={() => handleAddCollaborator("sharedWith")}>
                  <UserPlus className="w-4 h-4 mr-2" />
                  Add
                </Button>
              </div>
              <div className="space-y-2">
                {selectedTask.sharedWith.map((collaborator, index) => (
                  <div key={index} className="flex items-center justify-between bg-muted p-2 rounded">
                    <span>
                      {collaborator.name} ({collaborator.email})
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleRemoveCollaborator("sharedWith", collaborator.email)}>
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}
          <DialogFooter>
            <Button onClick={() => setIsShareDialogOpen(false)}>Done</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={isAssignDialogOpen} onOpenChange={setIsAssignDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Assign Task</DialogTitle>
            <DialogDescription>Add or remove assignees for this task</DialogDescription>
          </DialogHeader>
          {selectedTask && (
            <div>
              <h3 className="font-medium mb-2">Task: {selectedTask.name}</h3>
              <div className="flex items-center space-x-2 mb-4">
                <Input
                  placeholder="Name"
                  value={newCollaborator.name}
                  onChange={(e) => setNewCollaborator({ ...newCollaborator, name: e.target.value })}
                />
                <Input
                  placeholder="Email"
                  value={newCollaborator.email}
                  onChange={(e) => setNewCollaborator({ ...newCollaborator, email: e.target.value })}
                />
                <Button onClick={() => handleAddCollaborator("assignedTo")}>
                  <UserPlus className="w-4 h-4 mr-2" />
                  Assign
                </Button>
              </div>
              <div className="space-y-2">
                {selectedTask.assignedTo.map((assignee, index) => (
                  <div key={index} className="flex items-center justify-between bg-muted p-2 rounded">
                    <span>
                      {assignee.name} ({assignee.email})
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleRemoveCollaborator("assignedTo", assignee.email)}>
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}
          <DialogFooter>
            <Button onClick={() => setIsAssignDialogOpen(false)}>Done</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={isCommentDialogOpen} onOpenChange={setIsCommentDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Task Comments</DialogTitle>
            <DialogDescription>View and add comments for this task</DialogDescription>
          </DialogHeader>
          {selectedTask && (
            <div>
              <h3 className="font-medium mb-2">Task: {selectedTask.name}</h3>
              <div className="space-y-4 mb-4 max-h-60 overflow-y-auto">
                {selectedTask.comments.map((comment, index) => (
                  <div key={index} className="bg-muted p-3 rounded">
                    <p className="text-sm font-medium">{comment.author}</p>
                    <p className="text-sm text-muted-foreground">{new Date(comment.timestamp).toLocaleString()}</p>
                    <p className="mt-1">{comment.text}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                <Textarea
                  placeholder="Add a comment..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                />
                <Button onClick={handleAddComment}>Add Comment</Button>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button onClick={() => setIsCommentDialogOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
