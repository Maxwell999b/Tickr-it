"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
} from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Share2, UserPlus, X, MessageSquare } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

type Collaborator = {
  id: number;
  name: string;
  email: string;
  avatar: string;
};

type Comment = {
  text: string;
  author: string;
  timestamp: string;
};

type Task = {
  id: number;
  name: string;
  assignedTo: Collaborator[];
  sharedWith: Collaborator[];
  status: string;
  comments: Comment[];
};

// Mock data for tasks and collaborators
const initialTasks: Task[] = [
  {
    id: 1,
    name: "Design new landing page",
    assignedTo: [
      { id: 0, name: "You", email: "you@example.com", avatar: "/placeholder.svg" },
      { id: 1, name: "Alice Johnson", email: "alice@example.com", avatar: "/placeholderF.svg" },
    ],
    sharedWith: [
      { id: 1, name: "Alice Johnson", email: "alice@example.com", avatar: "/placeholderF.svg" },
      { id: 2, name: "Bob Smith", email: "bob@example.com", avatar: "/placeholder.svg" },
      { id: 3, name: "Charlie Brown", email: "charlie@example.com", avatar: "/placeholder.svg" },
      { id: 4, name: "David Lee", email: "david@example.com", avatar: "/placeholder.svg" },
    ],
    status: "In Progress",
    comments: [],
  },
  {
    id: 2,
    name: "Implement user authentication",
    assignedTo: [{ id: 1, name: "Alice Johnson", email: "alice@example.com", avatar: "/placeholderF.svg" }],
    sharedWith: [{ id: 0, name: "You", email: "you@example.com", avatar: "/placeholder.svg" }],
    status: "Pending",
    comments: [],
  },
  {
    id: 3,
    name: "Write API documentation",
    assignedTo: [{ id: 0, name: "You", email: "you@example.com", avatar: "/placeholder.svg" }],
    sharedWith: [{ id: 3, name: "Charlie Brown", email: "charlie@example.com", avatar: "/placeholder.svg" }],
    status: "Completed",
    comments: [],
  },
];

const initialCollaborators: Collaborator[] = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", avatar: "/placeholderF.svg" },
  { id: 2, name: "Bob Smith", email: "bob@example.com", avatar: "/placeholder.svg" },
  { id: 3, name: "Charlie Brown", email: "charlie@example.com", avatar: "/placeholder.svg" },
];
const getStatusBadgeVariant = (status: string) => {
  switch (status) {
    case "Completed":
      return "completed";
    case "In Progress":
      return "inProgress";
    case "Pending":
      return "pending";
    default:
      return "outline";
  }
};
export default function TaskCollaboration() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [collaborators, setCollaborators] = useState<Collaborator[]>(initialCollaborators);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [isShareDialogOpen, setIsShareDialogOpen] = useState(false);
  const [isCommentDialogOpen, setIsCommentDialogOpen] = useState(false);
  const [isAssignDialogOpen, setIsAssignDialogOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [newCollaborator, setNewCollaborator] = useState<Omit<Collaborator, "id" | "avatar">>({ name: "", email: "" });
  const [newComment, setNewComment] = useState("");

  const updateCollaborators = useCallback(() => {
    const allCollaborators = new Set<string>();
    tasks.forEach((task) => {
      task.assignedTo.forEach((person) => allCollaborators.add(JSON.stringify(person)));
      task.sharedWith.forEach((person) => allCollaborators.add(JSON.stringify(person)));
    });

    const updatedCollaborators = Array.from(allCollaborators).map((collaborator) => {
      return JSON.parse(collaborator) as Collaborator;
    });

    setCollaborators(updatedCollaborators);
  }, [tasks]);

  useEffect(() => {
    updateCollaborators();
  }, [tasks, updateCollaborators]);

  const handleShareTask = (taskId: number) => {
    setSelectedTask(tasks.find((task) => task.id === taskId) || null);
    setIsShareDialogOpen(true);
  };

  const handleAssignTask = (taskId: number) => {
    setSelectedTask(tasks.find((task) => task.id === taskId) || null);
    setIsAssignDialogOpen(true);
  };

  const handleAddCollaborator = (type: "assignedTo" | "sharedWith") => {
    if (newCollaborator.name && newCollaborator.email && selectedTask) {
      const newCollaboratorWithId: Collaborator = {
        ...newCollaborator,
        id: Math.max(...collaborators.map((c) => c.id), 0) + 1,
        avatar: "/placeholder.svg",
      };
      const updatedTasks = tasks.map((task) =>
        task.id === selectedTask.id ? { ...task, [type]: [...task[type], newCollaboratorWithId] } : task
      );
      setTasks(updatedTasks);
      setSelectedTask({ ...selectedTask, [type]: [...selectedTask[type], newCollaboratorWithId] });
      setNewCollaborator({ name: "", email: "" });
    }
  };

  const handleRemoveCollaborator = (type: "assignedTo" | "sharedWith", collaboratorEmail: string) => {
    if (selectedTask) {
      const updatedTasks = tasks.map((task) =>
        task.id === selectedTask.id
          ? { ...task, [type]: task[type].filter((c) => c.email !== collaboratorEmail) }
          : task
      );
      setTasks(updatedTasks);
      setSelectedTask({ ...selectedTask, [type]: selectedTask[type].filter((c) => c.email !== collaboratorEmail) });
    }
  };

  const handleOpenCommentDialog = (taskId: number) => {
    setSelectedTask(tasks.find((task) => task.id === taskId) || null);
    setIsCommentDialogOpen(true);
  };

  const handleAddComment = () => {
    if (newComment.trim() && selectedTask) {
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

  const renderCollaborators = (collaborators: Collaborator[], max = 3) => {
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background text-foreground p-8">
      <h1 className="text-3xl font-bold mb-8 text-pink-600">Task Collaboration</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-blue-500 dark:text-blue-400">Your Collaborative Tasks</CardTitle>
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
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="In Progress">Progress</SelectItem>
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
              <AnimatePresence>
                {filteredTasks.map((task) => (
                  <motion.tr
                    key={task.id}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}>
                    <TableCell className="text-violet-600 dark:text-violet-400">{task.name}</TableCell>
                    <TableCell className="text-primary">
                      {renderCollaborators(task.assignedTo, 2)}
                      <Button onClick={() => handleAssignTask(task.id)} variant="ghost" size="sm" className="ml-2">
                        <UserPlus className="w-4 h-4 text-purple-400" />
                      </Button>
                    </TableCell>
                    <TableCell className="text-accent">{renderCollaborators(task.sharedWith)}</TableCell>
                    <TableCell className="text-primary">
                      <Badge variant={getStatusBadgeVariant(task.status)} className="w-full justify-center">
                        {task.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button onClick={() => handleShareTask(task.id)} variant="outline" size="sm" className="mr-2">
                        <Share2 className="w-4 h-4 mr-2 text-purple-400" />
                        Share
                      </Button>
                      <Button onClick={() => handleOpenCommentDialog(task.id)} variant="outline" size="sm">
                        <MessageSquare className="w-4 h-4 mr-2 text-purple-400" />
                        Comment
                      </Button>
                    </TableCell>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-blue-500 dark:text-blue-400">Your Collaborators</CardTitle>
          <CardDescription>People you&apos;re working with on various tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <motion.div
            className={`grid gap-4 ${collaborators.length % 2 === 0 ? "md:grid-cols-2" : "md:grid-cols-3"}`}
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}>
            {collaborators.map((collaborator) => (
              <motion.div
                key={collaborator.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}>
                <Popover>
                  <PopoverTrigger asChild>
                    <div className="flex items-center space-x-4 p-4 bg-card rounded-lg shadow cursor-pointer hover:bg-muted transition-colors">
                      <Avatar>
                        <AvatarImage src={collaborator.avatar} alt={collaborator.name} />
                        <AvatarFallback>{collaborator.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-primary">{collaborator.name}</p>
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
                          <h4 className="font-semibold text-primary">{collaborator.name}</h4>
                          <p className="text-sm text-muted-foreground">{collaborator.email}</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2">
                      <h5 className="font-semibold mb-1 text-blue-500 dark:text-blue-400">Shared Tasks:</h5>
                      <ul className="text-sm text-violet-600 dark:text-violet-400">
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
              </motion.div>
            ))}
          </motion.div>
        </CardContent>
      </Card>

      <Dialog open={isShareDialogOpen} onOpenChange={setIsShareDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-pink-600">Share Task</DialogTitle>
            <DialogDescription>Add or remove collaborators for this task</DialogDescription>
          </DialogHeader>
          {selectedTask && (
            <div>
              <h3 className="font-medium mb-2 text-blue-500 dark:text-blue-400">Task: {selectedTask.name}</h3>
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
                      <span className="text-gray-700 dark:text-gray-200">{collaborator.name}</span>
                      <span className="text-slate-500 dark:text-slate-400"> ({collaborator.email})</span>
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
            <DialogTitle className="text-pink-600">Assign Task</DialogTitle>
            <DialogDescription>Add or remove assignees for this task</DialogDescription>
          </DialogHeader>
          {selectedTask && (
            <div>
              <h3 className="font-medium mb-2 text-blue-500 dark:text-blue-400">Task: {selectedTask.name}</h3>
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
                      <span className="text-gray-700 dark:text-gray-200">{assignee.name}</span>
                      <span className="text-slate-500 dark:text-slate-400"> ({assignee.email})</span>
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
            <DialogTitle className="text-pink-600">Task Comments</DialogTitle>
            <DialogDescription>View and add comments for this task</DialogDescription>
          </DialogHeader>
          {selectedTask && (
            <div>
              <h3 className="font-medium mb-2 text-blue-500 dark:text-blue-400">Task: {selectedTask.name}</h3>
              <div className="space-y-4 mb-4 max-h-60 overflow-y-auto">
                {selectedTask.comments.map((comment, index) => (
                  <div key={index} className="bg-muted p-3 rounded">
                    <p className="text-sm font-medium text-primary">{comment.author}</p>
                    <p className="text-sm text-muted-foreground">{new Date(comment.timestamp).toLocaleString()}</p>
                    <p className="mt-1 text-blue-500 dark:text-blue-400">{comment.text}</p>
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
    </motion.div>
  );
}
