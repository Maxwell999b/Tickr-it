"use client";

import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import { Users, DollarSign, TrendingUp, ClipboardList, Edit, Trash2 } from "lucide-react";
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
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarDays } from "lucide-react";

import NoSearchResults from "@/components/errors/no-search-results";
// Mock data for charts
const userGrowthData = [
  { name: "Jan", users: 400 },
  { name: "Feb", users: 300 },
  { name: "Mar", users: 200 },
  { name: "Apr", users: 278 },
  { name: "May", users: 189 },
  { name: "Jun", users: 239 },
  { name: "Jul", users: 349 },
];

const taskCompletionData = [
  { name: "Mon", completed: 12, pending: 5 },
  { name: "Tue", completed: 19, pending: 3 },
  { name: "Wed", completed: 3, pending: 15 },
  { name: "Thu", completed: 5, pending: 8 },
  { name: "Fri", completed: 2, pending: 20 },
  { name: "Sat", completed: 3, pending: 12 },
  { name: "Sun", completed: 9, pending: 7 },
];

const revenueData = [
  { name: "Jan", revenue: 4000 },
  { name: "Feb", revenue: 3000 },
  { name: "Mar", revenue: 2000 },
  { name: "Apr", revenue: 2780 },
  { name: "May", revenue: 1890 },
  { name: "Jun", revenue: 2390 },
  { name: "Jul", revenue: 3490 },
];

type User = {
  id: number;
  name: string;
  email: string;
  status: string;
  role: string;
};

type Task = {
  id: number;
  name: string;
  assignedTo: string;
  dueDate: string;
  status: string;
};

// Initial mock data
const initialUsers: User[] = [
  { id: 1, name: "John Doe", email: "john@example.com", status: "Active", role: "User" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", status: "Inactive", role: "Admin" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", status: "Active", role: "User" },
];

const initialTasks: Task[] = [
  { id: 1, name: "Implement new feature", assignedTo: "John Doe", dueDate: "2023-07-15", status: "In Progress" },
  { id: 2, name: "Fix login bug", assignedTo: "Jane Smith", dueDate: "2023-07-20", status: "Pending" },
  { id: 3, name: "Update documentation", assignedTo: "Bob Johnson", dueDate: "2023-07-10", status: "Completed" },
];

const statusColorsTasks = {
  "In Progress": "bg-yellow-500",
  Pending: "bg-red-500",
  Completed: "bg-green-500",
};
const statusColorsUsers = {
  Active: "bg-green-500",
  Inactive: "bg-red-500",
};
const roleColors = {
  User: "bg-slate-700",
  Admin: "bg-blue-500",
};

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

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return <OverviewTab />;
      case "users":
        return <UsersTab />;
      case "tasks":
        return <TasksTab />;
      case "earnings":
        return <EarningsTab />;
      default:
        return <OverviewTab />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-pink-600">Admin Dashboard</h1>
      </div>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <nav className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-4 md:mb-6">
          <Button
            variant={activeTab === "overview" ? "default" : "outline"}
            onClick={() => setActiveTab("overview")}
            className="flex justify-between">
            <TrendingUp className="stroke-muted-foreground" />
            <span>Overview</span>
          </Button>
          <Button
            variant={activeTab === "users" ? "default" : "outline"}
            onClick={() => setActiveTab("users")}
            className="flex justify-between">
            <Users className="stroke-muted-foreground" />
            <span>Users</span>
          </Button>
          <Button
            variant={activeTab === "tasks" ? "default" : "outline"}
            onClick={() => setActiveTab("tasks")}
            className="flex justify-between">
            <ClipboardList className="stroke-muted-foreground" />
            <span>Tasks</span>
          </Button>
          <Button
            variant={activeTab === "earnings" ? "default" : "outline"}
            onClick={() => setActiveTab("earnings")}
            className="flex justify-between">
            <DollarSign className="stroke-muted-foreground" />
            <span>Earnings</span>
          </Button>
        </nav>

        {renderTabContent()}
      </main>
    </div>
  );
}

function OverviewTab() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-sky-600 dark:text-sky-400">User Growth</CardTitle>
          <CardDescription>New user registrations over time</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={userGrowthData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="users" stroke="#fa78ff" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-sky-600 dark:text-sky-400">Task Completion</CardTitle>
          <CardDescription>Completed vs Pending tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={taskCompletionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="completed" fill="#E06CD0" />
              <Bar dataKey="pending" fill="#38BDF8" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-sky-600 dark:text-sky-400">Quick Stats</CardTitle>
          <CardDescription>Key metrics at a glance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Total Users</span>
              <span className="font-bold text-primary">1,234</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Active Tasks</span>
              <span className="font-bold text-primary">567</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Completed Tasks</span>
              <span className="font-bold text-primary">890</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Total Revenue</span>
              <span className="font-bold text-primary">$12,345</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function UsersTab() {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [isAddUserDialogOpen, setIsAddUserDialogOpen] = useState(false);
  const [newUser, setNewUser] = useState<Omit<User, "id">>({ name: "", email: "", status: "Active", role: "User" });
  const [addUserError, setAddUserError] = useState<string | null>(null);

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddUser = () => {
    if (isValidUser(newUser)) {
      const userToAdd: User = { ...newUser, id: users.length + 1 };
      setUsers([...users, userToAdd]);
      setNewUser({ name: "", email: "", status: "Active", role: "User" });
      setIsAddUserDialogOpen(false);
      setAddUserError(null);
    } else {
      setAddUserError("Please enter a valid name and email address.");
    }
  };

  const handleEditUser = (user: User) => {
    setEditingUser({ ...user });
  };

  const handleUpdateUser = () => {
    if (editingUser && isValidUser(editingUser)) {
      setUsers(users.map((u) => (u.id === editingUser.id ? editingUser : u)));
      setEditingUser(null);
    } else {
      alert("Please enter a valid name and email address.");
    }
  };

  const handleDeleteUser = (userId: number) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  const clearSearch = () => {
    setSearchTerm("");
  };

  const isValidUser = (user: Omit<User, "id">): boolean => {
    return user.name.trim() !== "" && isValidEmail(user.email);
  };

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <Input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
        <Dialog open={isAddUserDialogOpen} onOpenChange={setIsAddUserDialogOpen}>
          <DialogTrigger asChild>
            <Button>Add New User</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New User</DialogTitle>
              <DialogDescription>Enter the details of the new user.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  value={newUser.name}
                  onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={newUser.email}
                  onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                  className="col-span-3"
                />
              </div>
              {addUserError && <p className="text-red-500 text-sm">{addUserError}</p>}
            </div>
            <DialogFooter>
              <Button onClick={handleAddUser}>Add User</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {filteredUsers.length > 0 ? (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  {editingUser?.id === user.id ? (
                    <Input
                      value={editingUser.name}
                      onChange={(e) => setEditingUser({ ...editingUser, name: e.target.value })}
                    />
                  ) : (
                    <span className="text-pink-600">{user.name}</span>
                  )}
                </TableCell>
                <TableCell>
                  {editingUser?.id === user.id ? (
                    <Input
                      type="email"
                      value={editingUser.email}
                      onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
                    />
                  ) : (
                    <span className="text-purple-400">{user.email}</span>
                  )}
                </TableCell>
                <TableCell>
                  {editingUser?.id === user.id ? (
                    <Select
                      value={editingUser.status}
                      onValueChange={(value) => setEditingUser({ ...editingUser, status: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(statusColorsUsers).map(([status, color]) => (
                          <SelectItem key={status} value={status}>
                            <div className="flex items-center">
                              <div className={`w-3 h-3 rounded-full ${color} mr-2`}></div>
                              {status}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  ) : (
                    <Badge
                      variant="outline"
                      className={`${statusColorsUsers[user.status as keyof typeof statusColorsUsers]} text-white`}>
                      {user.status}
                    </Badge>
                  )}
                </TableCell>
                <TableCell>
                  {editingUser?.id === user.id ? (
                    <Select
                      value={editingUser.role}
                      onValueChange={(value) => setEditingUser({ ...editingUser, role: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select role" />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(roleColors).map(([role, color]) => (
                          <SelectItem key={role} value={role}>
                            <div className="flex items-center">
                              <div className={`w-3 h-3 rounded-full ${color} mr-2`}></div>
                              {role}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  ) : (
                    <Badge
                      variant="outline"
                      className={`${roleColors[user.role as keyof typeof roleColors]} text-white`}>
                      {user.role}
                    </Badge>
                  )}
                </TableCell>
                <TableCell>
                  {editingUser?.id === user.id ? (
                    <Button onClick={handleUpdateUser} variant="outline" size="sm" className="mr-2">
                      Save
                    </Button>
                  ) : (
                    <Button onClick={() => handleEditUser(user)} variant="outline" size="sm" className="mr-2">
                      <Edit className="w-4 h-4 mr-1" />
                      Edit
                    </Button>
                  )}
                  <Button onClick={() => handleDeleteUser(user.id)} variant="destructive" size="sm">
                    <Trash2 className="w-4 h-4 mr-1" />
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <NoSearchResults clearSearch={clearSearch} message="No users match the current search" />
      )}
    </div>
  );
}

function TasksTab() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  const filteredTasks = tasks.filter(
    (task) =>
      (task.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.assignedTo.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (statusFilter === "all" || task.status === statusFilter)
  );

  const handleEditTask = (task: Task) => {
    setEditingTask({ ...task });
    setSelectedDate(new Date(task.dueDate));
  };

  const handleUpdateTask = () => {
    if (editingTask && selectedDate) {
      const updatedTask = {
        ...editingTask,
        dueDate: selectedDate.toISOString().split("T")[0],
      };
      setTasks(tasks.map((t) => (t.id === updatedTask.id ? updatedTask : t)));
      setEditingTask(null);
      setSelectedDate(undefined);
    }
  };

  const handleDeleteTask = (taskId: number) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const clearSearch = () => {
    setSearchTerm("");
    setStatusFilter("all");
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <Input
          type="text"
          placeholder="Search tasks..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            {Object.entries(statusColorsTasks).map(([status, color]) => (
              <SelectItem key={status} value={status}>
                <div className="flex items-center">
                  <div className={`w-3 h-3 rounded-full ${color} mr-2`}></div>
                  {status}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {filteredTasks.length > 0 ? (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Task Name</TableHead>
              <TableHead>Assigned To</TableHead>
              <TableHead>Due Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredTasks.map((task) => (
              <TableRow key={task.id}>
                <TableCell>
                  {editingTask?.id === task.id ? (
                    <Input
                      value={editingTask.name}
                      onChange={(e) => setEditingTask({ ...editingTask, name: e.target.value })}
                    />
                  ) : (
                    <span className="text-primary">{task.name}</span>
                  )}
                </TableCell>
                <TableCell>
                  {editingTask?.id === task.id ? (
                    <Input
                      value={editingTask.assignedTo}
                      onChange={(e) => setEditingTask({ ...editingTask, assignedTo: e.target.value })}
                    />
                  ) : (
                    <span className="text-pink-600">{task.assignedTo}</span>
                  )}
                </TableCell>
                <TableCell>
                  {editingTask?.id === task.id ? (
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={`w-[280px] justify-start text-left font-normal ${
                            !selectedDate && "text-muted-foreground"
                          }`}>
                          <CalendarDays className="mr-2 h-4 w-4" />
                          {selectedDate ? format(selectedDate, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" selected={selectedDate} onSelect={setSelectedDate} initialFocus />
                      </PopoverContent>
                    </Popover>
                  ) : (
                    <Badge variant="date">{task.dueDate}</Badge>
                  )}
                </TableCell>
                <TableCell>
                  {editingTask?.id === task.id ? (
                    <Select
                      value={editingTask.status}
                      onValueChange={(value) => setEditingTask({ ...editingTask, status: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.keys(statusColorsTasks).map((status) => (
                          <SelectItem key={status} value={status}>
                            {status}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  ) : (
                    <Badge
                      variant={getStatusBadgeVariant(task.status)}
                      className="w-full justify-center text-muted-foreground">
                      {task.status}
                    </Badge>
                  )}
                </TableCell>
                <TableCell>
                  {editingTask?.id === task.id ? (
                    <Button onClick={handleUpdateTask} variant="outline" size="sm" className="mr-2">
                      Save
                    </Button>
                  ) : (
                    <Button onClick={() => handleEditTask(task)} variant="outline" size="sm" className="mr-2">
                      <Edit className="w-4 h-4 mr-1" />
                      Edit
                    </Button>
                  )}
                  <Button onClick={() => handleDeleteTask(task.id)} variant="destructive" size="sm">
                    <Trash2 className="w-4 h-4 mr-1" />
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <NoSearchResults clearSearch={clearSearch} message="No tasks match the current filters" />
      )}
    </div>
  );
}

function EarningsTab() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-sky-600 dark:text-sky-400">Revenue Overview</CardTitle>
          <CardDescription>Monthly revenue trend</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="revenue" fill="#E06CD0" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-sky-600 dark:text-sky-400">Financial Summary</CardTitle>
          <CardDescription>Key financial metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="text-muted-foreground">Total Revenue</p>
              <p className="text-2xl font-bold text-primary">$54,321</p>
            </div>
            <div className="space-y-2">
              <p className="text-muted-foreground">Monthly Recurring Revenue</p>
              <p className="text-2xl font-bold text-primary">$4,567</p>
            </div>
            <div className="space-y-2">
              <p className="text-muted-foreground">Average Revenue per User</p>
              <p className="text-2xl font-bold text-primary">$27.50</p>
            </div>
            <div className="space-y-2">
              <p className="text-muted-foreground">Churn Rate</p>
              <p className="text-2xl font-bold text-primary">2.3%</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
