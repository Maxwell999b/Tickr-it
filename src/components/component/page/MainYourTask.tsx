"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Pagination, PaginationContent, PaginationItem } from "@/components/ui/pagination";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";

import Icon from "@/components/component/Icon";
interface Task {
  id: number;
  taskName: string;
  dueDate: Date;
  priority: string;
  project: string;
  type: string;
  subtasks: string[];
  frequency: string;
  attachments: boolean;
  status: boolean;
}
const initialTasks: Task[] = [
  {
    id: 1,
    taskName: "Finish project proposal",
    dueDate: new Date("2023-06-30"),
    priority: "High",
    project: "Client A",
    type: "Project",
    subtasks: ["Research competitors", "Outline proposal structure", "Write executive summary"],
    frequency: "Monthly",
    attachments: true,
    status: false,
  },
  {
    id: 2,
    taskName: "Prepare presentation",
    dueDate: new Date("2023-07-05"),
    priority: "Medium",
    project: "Client B",
    type: "Presentation",
    subtasks: ["Design slides", "Add charts", "Practice delivery"],
    frequency: "One-time",
    attachments: true,
    status: true,
  },
  {
    id: 3,
    taskName: "Team meeting preparation",
    dueDate: new Date("2023-07-10"),
    priority: "Low",
    project: "Internal",
    type: "Meeting",
    subtasks: ["Send calendar invite", "Prepare agenda", "Book meeting room"],
    frequency: "Weekly",
    attachments: false,
    status: true,
  },
];

export function MainYourTask() {
  const [tasks, setTasks] = useState(initialTasks);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editingField, setEditingField] = useState(null);

  const handleDoubleClick = (taskId: any, field: any) => {
    setEditingTaskId(taskId);
    setEditingField(field);
  };

  const handleInputChange = (taskId: any, field: any, value: any) => {
    setTasks(tasks.map((task) => (task.id === taskId ? { ...task, [field]: value } : task)));
  };

  const handleInputBlur = () => {
    setEditingTaskId(null);
    setEditingField(null);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleInputBlur();
    }
  };

  const handlePriorityChange = (taskId: any, priority: any) => {
    setTasks(tasks.map((task) => (task.id === taskId ? { ...task, priority } : task)));
  };

  const handleFrequencyChange = (taskId: any, frequency: any) => {
    setTasks(tasks.map((task) => (task.id === taskId ? { ...task, frequency } : task)));
  };

  const handleDateChange = (taskId: any, date: any) => {
    setTasks(tasks.map((task) => (task.id === taskId ? { ...task, dueDate: date } : task)));
  };

  const handleStatusChange = (taskId: any, checked: any) => {
    setTasks(tasks.map((task) => (task.id === taskId ? { ...task, status: checked } : task)));
  };
  const getPriorityBadgeVariant = (priority: any) => {
    switch (priority) {
      case "High":
        return "default";
      case "Medium":
        return "secondary";
      case "Low":
        return "muted";
      default:
        return "outline";
    }
  };
  return (
    <section className="py-2 md:py-4">
      <div className="container mx-auto space-y-4">
        <div className="flex items-center justify-between px-2">
          <h2 className="text-sm md:text-2xl font-bold flex justify-center text-pink-500 dark:text-secondary p-2">
            Your Tasks
          </h2>
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="shrink-0">
                  <Icon iconType="arrowUp" className="w-4 h-4 mr-2" />
                  Sort by
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[200px]" align="end">
                <DropdownMenuRadioGroup value="due_date">
                  <DropdownMenuRadioItem value="due_date">Due Date</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="priority">Priority</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="status">Status</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="shrink-0">
                  <Icon iconType="filter" className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[200px]" align="end">
                <DropdownMenuLabel>Filter by:</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem>Assigned to me</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>High priority</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Overdue</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Completed</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Recurring</DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <Button size="icon" variant="outline" className="h-8 w-8 ">
                    <Icon iconType="leftArrow" className="h-4 w-4" />
                    <span className="sr-only">Previous</span>
                  </Button>
                </PaginationItem>
                <PaginationItem>
                  <Button size="icon" variant="outline" className="h-8 w-8">
                    <Icon iconType="rightArrow" className="h-4 w-4" />
                    <span className="sr-only">Next</span>
                  </Button>
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Task Name</TableHead>
              <TableHead>Due Date</TableHead>
              <TableHead>Priority</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Tags</TableHead>
              <TableHead>Subtasks</TableHead>
              <TableHead>Recurring</TableHead>
              <TableHead>Attachments</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tasks.map((task) => (
              <TableRow key={task.id}>
                <TableCell>
                  {editingTaskId === task.id && editingField === "taskName" ? (
                    <Input
                      type="text"
                      value={task.taskName}
                      onChange={(e) => handleInputChange(task.id, "taskName", e.target.value)}
                      onBlur={handleInputBlur}
                      onKeyDown={handleInputKeyDown}
                      autoFocus
                    />
                  ) : (
                    <div
                      className="font-semibold dark:text-primary cursor-pointer"
                      onDoubleClick={() => handleDoubleClick(task.id, "taskName")}>
                      {task.taskName}
                    </div>
                  )}
                </TableCell>
                <TableCell>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-[180px] justify-start text-left font-normal">
                        <Icon iconType="calendar" className="mr-2 h-4 w-4" />
                        {format(task.dueDate, "PPP")}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={task.dueDate}
                        onSelect={(date) => handleDateChange(task.id, date)}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="w-full">
                      <Badge
                        variant={getPriorityBadgeVariant(task.priority)}
                        className="cursor-pointer w-full justify-center">
                        {task.priority}
                      </Badge>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      <DropdownMenuRadioGroup
                        value={task.priority}
                        onValueChange={(value) => handlePriorityChange(task.id, value)}>
                        <DropdownMenuRadioItem value="High">
                          <Badge variant="default">High</Badge>
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="Medium">
                          <Badge variant="secondary">Medium</Badge>
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="Low">
                          <Badge variant="muted">Low</Badge>
                        </DropdownMenuRadioItem>
                      </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
                <TableCell>
                  <Checkbox
                    id={`task-${task.id}`}
                    checked={task.status}
                    onCheckedChange={(checked) => handleStatusChange(task.id, checked)}
                  />
                </TableCell>
                <TableCell>
                  <Badge variant="outline">{task.type}</Badge>
                  <Badge variant="outline">{task.project}</Badge>
                </TableCell>
                <TableCell>
                  <ul className="list-disc pl-4">
                    {task.subtasks.map((subtask, i) => (
                      <li key={i}>{subtask}</li>
                    ))}
                  </ul>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="w-full">
                      <Badge variant="outline" className="cursor-pointer">
                        {task.frequency}
                      </Badge>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      <DropdownMenuRadioGroup
                        value={task.frequency}
                        onValueChange={(value) => handleFrequencyChange(task.id, value)}>
                        <DropdownMenuRadioItem value="Monthly">
                          <Badge variant="outline">Monthly</Badge>
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="Weekly">
                          <Badge variant="outline">Weekly</Badge>
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="Daily">
                          <Badge variant="outline">Daily</Badge>
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="One-time">
                          <Badge variant="outline">One-time</Badge>
                        </DropdownMenuRadioItem>
                      </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
                <TableCell>
                  {task.attachments ? (
                    <Button
                      variant="outline"
                      onClick={() => {
                        window.open("/attachments/1", "_blank");
                      }}>
                      View attachments
                    </Button>
                  ) : (
                    <span className="px-4 text-red-600/70 font-bold">No attachments</span>
                  )}
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="icon" className="h-8 w-8">
                        <Icon iconType="moveHorizontal" className="h-4 w-4" />
                        <span className="sr-only">Task actions</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Link href="/Pages/task_details/" className="flex items-center gap-2" prefetch={false}>
                          <Icon iconType="eye" className="h-4 w-4" />
                          <span>View</span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href="/Pages/task_edit/" className="flex items-center gap-2" prefetch={false}>
                          <Icon iconType="filePen" className="h-4 w-4" />
                          <span>Edit</span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href="#" className="flex items-center gap-2" prefetch={false}>
                          <Icon iconType="trash" className="h-4 w-4" />
                          <span>Delete</span>
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}
