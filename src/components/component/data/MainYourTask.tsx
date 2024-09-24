"use client";
import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import confetti from "canvas-confetti";
import "./Task.css";
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
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import Icon from "@/components/component/Icon";
import { Task, initialTasks } from "./tasks";
import { DeleteTaskConfirmation } from "../DeleteTaskConfirmation";

type SortOption = "dueDate" | "priority" | "status";

export function MainYourTask() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
  const [editingField, setEditingField] = useState<string | null>(null);
  const [taskToDelete, setTaskToDelete] = useState<any | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [sortBy, setSortBy] = useState<SortOption>("dueDate");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [filters, setFilters] = useState({
    priority: false,
    overdue: false,
    status: false,
    frequency: false,
    attachments: false,
  });

  const tasksPerPage = 10;
  const sortAndFilterTasks = useCallback(() => {
    let sortedTasks = [...initialTasks];

    sortedTasks.sort((a, b) => {
      const order = sortOrder === "asc" ? 1 : -1;
      switch (sortBy) {
        case "dueDate":
          return order * (a.dueDate.getTime() - b.dueDate.getTime());
        case "priority":
          const priorityOrder: { [key: string]: number } = { High: 3, Medium: 2, Low: 1 };
          return order * (priorityOrder[a.priority] - priorityOrder[b.priority]);
        case "status":
          return order * (a.status === b.status ? 0 : a.status ? -1 : 1);
        default:
          return 0;
      }
    });

    sortedTasks = sortedTasks.filter((task) => {
      if (filters.priority && task.priority !== "High") return false;
      if (filters.overdue && task.dueDate >= new Date()) return false;
      if (filters.status && !task.status) return false;
      if (filters.frequency && task.frequency === "One-time") return false;
      if (filters.attachments && !task.attachments) return false;
      return true;
    });

    setTasks(sortedTasks);
  }, [sortBy, sortOrder, filters]);

  useEffect(() => {
    sortAndFilterTasks();
  }, [sortAndFilterTasks]);

  const handleDeleteTask = (taskId: any) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    console.log(`Deleted task with ID: ${taskId}`);
    setTaskToDelete(null);
  };
  const handleConfirmDelete = (id: number) => {
    handleDeleteTask(id);
    setTaskToDelete(null);
  };

  const handleCancel = () => {
    setTaskToDelete(null);
  };
  const handleSortChange = (newSortBy: string) => {
    if (newSortBy === sortBy) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(newSortBy as SortOption);
      setSortOrder("desc");
    }
  };

  const handleFilterChange = (filterType: keyof typeof filters) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: !prevFilters[filterType],
    }));
  };
  const handlePageChange = (direction: "next" | "prev") => {
    if (direction === "next") {
      setCurrentPage((prev) => (prev + 1) % Math.ceil(tasks.length / tasksPerPage));
    } else {
      setCurrentPage(
        (prev) => (prev - 1 + Math.ceil(tasks.length / tasksPerPage)) % Math.ceil(tasks.length / tasksPerPage)
      );
    }
  };

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
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, status: checked };
      }
      return task;
    });
    setTasks(updatedTasks);
    if (updatedTasks.every((task) => task.status)) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
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
                  <Icon iconType="DoubleArrow" className="w-4 h-4 mr-2 stroke-primary" />
                  Sort by
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[200px]" align="end">
                <DropdownMenuRadioGroup value={sortBy} onValueChange={handleSortChange}>
                  <DropdownMenuRadioItem value="dueDate">
                    Due Date{" "}
                    {sortBy === "dueDate" && (
                      <Icon
                        iconType={sortOrder === "asc" ? "arrowUp" : "arrowDown"}
                        className="w-4 h-4 ml-2 stroke-primary"
                      />
                    )}
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="priority">
                    Priority{" "}
                    {sortBy === "priority" && (
                      <Icon
                        iconType={sortOrder === "asc" ? "arrowUp" : "arrowDown"}
                        className="w-4 h-4 ml-2 stroke-primary"
                      />
                    )}
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="status">
                    Status{" "}
                    {sortBy === "status" && (
                      <Icon
                        iconType={sortOrder === "asc" ? "arrowUp" : "arrowDown"}
                        className="w-4 h-4 ml-2 stroke-primary"
                      />
                    )}
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="shrink-0">
                  <Icon iconType="filter" className="w-4 h-4 mr-2 stroke-primary" />
                  Filter
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[200px]" align="end">
                <DropdownMenuLabel>Filter by:</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem
                  checked={filters.priority}
                  onCheckedChange={() => handleFilterChange("priority")}>
                  High priority
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={filters.overdue}
                  onCheckedChange={() => handleFilterChange("overdue")}>
                  Overdue
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked={filters.status} onCheckedChange={() => handleFilterChange("status")}>
                  Completed
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={filters.frequency}
                  onCheckedChange={() => handleFilterChange("frequency")}>
                  Recurring
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={filters.attachments}
                  onCheckedChange={() => handleFilterChange("attachments")}>
                  Has attachments
                </DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <div className="flex items-center gap-2">
              <Button size="icon" variant="outline" className="h-8 w-8" onClick={() => handlePageChange("prev")}>
                <Icon iconType="leftArrow" className="h-4 w-4" />
                <span className="sr-only">Previous</span>
              </Button>
              <Button size="icon" variant="outline" className="h-8 w-8" onClick={() => handlePageChange("next")}>
                <Icon iconType="rightArrow" className="h-4 w-4" />
                <span className="sr-only">Next</span>
              </Button>
            </div>
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
              <TableHead>Frequency</TableHead>
              <TableHead>Attachments</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tasks.slice(currentPage * tasksPerPage, (currentPage + 1) * tasksPerPage).map((task) => (
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
                      className={`font-semibold cursor-pointer ${
                        task.status ? "text-gray-400 line-through-animation-active" : "dark:text-primary text-slate-700"
                      } line-through-animation`}
                      onDoubleClick={() => handleDoubleClick(task.id, "taskName")}>
                      <span className="inline-block whitespace-nowrap">{task.taskName}</span>
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
                        <DropdownMenuRadioItem value="One-time">
                          <Badge variant="outline">One-time</Badge>
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="Daily">
                          <Badge variant="outline">Daily</Badge>
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="Weekly">
                          <Badge variant="outline">Weekly</Badge>
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="Monthly">
                          <Badge variant="outline">Monthly</Badge>
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
                        <Link
                          href={`/Pages/task_details/${task.id}`}
                          className="flex items-center gap-2"
                          prefetch={false}>
                          <Icon iconType="eye" className="h-4 w-4 stroke-primary" />
                          <span className="text-sky-600 dark:text-sky-400">View</span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href={`/Pages/task_edit/${task.id}`} className="flex items-center gap-2" prefetch={false}>
                          <Icon iconType="filePen" className="h-4 w-4 stroke-primary" />
                          <span className="text-sky-600 dark:text-sky-400">Edit</span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link
                          href="#"
                          className="flex items-center gap-2 text-red-600 hover:text-red-800"
                          prefetch={false}
                          onClick={(e) => {
                            e.preventDefault();
                            setTaskToDelete(task.id);
                          }}>
                          <Icon iconType="trash" className="h-4 w-4" />
                          <span>Delete</span>
                        </Link>
                      </DropdownMenuItem>
                      {taskToDelete !== null && (
                        <DeleteTaskConfirmation
                          isOpen={taskToDelete !== null}
                          taskId={taskToDelete}
                          taskName={tasks.find((t) => t.id === taskToDelete)?.taskName || ""}
                          onConfirmDelete={handleConfirmDelete}
                          onCancel={handleCancel}
                        />
                      )}
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
