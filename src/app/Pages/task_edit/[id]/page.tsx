"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { initialTasks } from "@/components/component/data/tasks";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import Icon from "@/components/component/Icon";
import { TaskNotFound } from "@/components/errors/TaskNotFound";
import { useCalendar } from "@/hooks/useCalendar";

export default function Task_EditPage() {
  const params = useParams();
  const taskId = Number(params.id);
  const task = initialTasks.find((t) => t.id === taskId);

  const [taskName, setTaskName] = useState(task?.taskName || "");
  const [subtasks, setSubtasks] = useState(task?.subtasks || []);
  const [priority, setPriority] = useState(task?.priority || "");
  const [type, setType] = useState(task?.type || "");
  const [frequency, setFrequency] = useState(task?.frequency || "");
  const [status, setStatus] = useState(task?.status ? "Completed" : "In Process");
  const [project, setProject] = useState(task?.project || "");
  const [attachments, setAttachments] = useState(task?.attachments ? "yes" : "no");

  const { selectedDates, handleDateSelect, formatDate } = useCalendar({ [taskId]: task?.dueDate || undefined });

  useEffect(() => {
    if (task) {
      setTaskName(task.taskName);
      setSubtasks(task.subtasks);
      setPriority(task.priority);
      setType(task.type);
      setFrequency(task.frequency);
      setStatus(task.status ? "Completed" : "In Process");
      setProject(task.project);
      setAttachments(task.attachments ? "yes" : "no");
    }
  }, [task]);

  if (!task) {
    return <TaskNotFound />;
  }

  const handleSubtaskChange = (index: number, value: string) => {
    const updatedSubtasks = [...subtasks];
    updatedSubtasks[index] = value;
    setSubtasks(updatedSubtasks);
  };

  const addSubtask = () => {
    if (subtasks[subtasks.length - 1]?.trim() !== "") {
      setSubtasks([...subtasks, ""]);
    }
  };

  const removeSubtask = (index: number) => {
    const updatedSubtasks = subtasks.filter((_, i) => i !== index);
    setSubtasks(updatedSubtasks);

    if (updatedSubtasks.length === 0) {
      setSubtasks([""]);
    }
  };

  const handleSaveChanges = () => {
    console.log("Saving changes:", {
      taskName,
      subtasks,
      priority,
      type,
      frequency,
      status,
      project,
      attachments,
      dueDate: selectedDates[taskId],
    });
  };

  return (
    <div>
      <section className="bg-background py-12 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl">
            <div className="space-y-2 m-2">
              <h1 className="text-3xl font-bold text-pink-500 dark:text-secondary">Edit Task</h1>
              <p className="text-muted-foreground">Update the details of your task.</p>
            </div>
            <Card className="bg-card text-card-foreground p-6 rounded-lg shadow-lg space-y-6 m-4">
              <CardContent className="space-y-4">
                <div className="space-y-1">
                  <Label htmlFor="title" className="text-muted-foreground">
                    Title
                  </Label>
                  <Input id="title" type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="dueDate" className="text-muted-foreground">
                    Due Date
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button id="due-date" variant="outline" className="w-full justify-start text-left font-normal">
                        <Icon iconType="calendarDays" className="mr-2 h-4 w-4" />
                        {selectedDates[taskId] ? formatDate(selectedDates[taskId]) : "No date set"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={selectedDates[taskId]}
                        onSelect={(date) => handleDateSelect(taskId, date)}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="space-y-1">
                  <Label id="priority" htmlFor="priority" className="text-muted-foreground">
                    Priority
                  </Label>
                  <Select value={priority} onValueChange={setPriority}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select priority">{priority}</SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="High">High</SelectItem>
                      <SelectItem value="Medium">Medium</SelectItem>
                      <SelectItem value="Low">Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="type" className="text-muted-foreground">
                    Type
                  </Label>
                  <Select value={type} onValueChange={setType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type">{type}</SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="personal">Personal</SelectItem>
                      <SelectItem value="work">Work</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="frequency" className="text-muted-foreground">
                    Frequency
                  </Label>
                  <Select value={frequency} onValueChange={setFrequency}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select frequency">{frequency}</SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="monthly">Monthly</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="onetime">One-time</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="project" className="text-muted-foreground">
                    Project
                  </Label>
                  <Input id="project" type="text" value={project} onChange={(e) => setProject(e.target.value)} />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="status" className="text-muted-foreground">
                    Status
                  </Label>
                  <Select value={status} onValueChange={setStatus}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select status">{status}</SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Completed">Completed</SelectItem>
                      <SelectItem value="In Process">In Process</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="attachments" className="text-muted-foreground">
                    Attachments
                  </Label>
                  <Select value={attachments} onValueChange={setAttachments}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select attachments">{attachments}</SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">Yes</SelectItem>
                      <SelectItem value="no">No</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="subtasks" className="text-muted-foreground">
                    Subtasks
                  </Label>
                  <ul className="list-none space-y-2">
                    {subtasks.map((subtask, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <Input
                          type="text"
                          value={subtask}
                          onChange={(e) => handleSubtaskChange(index, e.target.value)}
                          className="flex-1"
                        />
                        <Button variant="destructive" onClick={() => removeSubtask(index)}>
                          <Icon iconType="trash" />
                        </Button>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-2">
                    <Button
                      className="w-1/4 h-12 text-background font-bold transition-colors duration-150 rounded-lg focus:shadow-outline"
                      variant="secondary"
                      onClick={addSubtask}>
                      <Icon iconType="plus" />
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center gap-2">
                <Link href={`/Pages/task_details/${task.id}`}>
                  <Button variant="outline">Cancel</Button>
                </Link>
                <Button onClick={handleSaveChanges}>Save Changes</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
