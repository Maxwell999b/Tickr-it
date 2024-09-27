"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/common/Icon";
import { Badge } from "@/components/ui/badge";
import { Alert } from "@/components/ui/alert";
import { useCalendar } from "@/hooks/useCalendar";

export default function Create_NewTaskPageForm() {
  const [inputValue, setInputValue] = useState("");
  const [projects, setProjects] = useState<string[]>([]);
  const { selectedDates, handleDateSelect, formatDate } = useCalendar({ 0: new Date() }, (taskId, date) => {});
  const maxTags = 10;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault(); // Prevent default behavior
      if (inputValue.trim() && projects.length < maxTags) {
        setProjects([...projects, inputValue.trim()]);
        setInputValue("");
      }
    }
  };

  const handleBadgeClick = (projectToRemove: string) => {
    setProjects(projects.filter((project) => project !== projectToRemove));
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="py-12 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-md space-y-6">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold text-pink-600">Create a New Task</h1>
              <p className="text-muted-foreground">Fill out the form to add a new task to your list.</p>
            </div>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="task-name">Task Name</Label>
                <Input id="task-name" placeholder="Enter task name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="due-date">Due Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button id="due-date" variant="outline" className="w-full justify-start text-left font-normal">
                      <Icon iconType="calendarDays" className="mr-2 h-4 w-4" />
                      {formatDate(selectedDates[0])}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={selectedDates[0]}
                      onSelect={(date) => handleDateSelect(0, date)}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="space-y-2">
                <Label htmlFor="priority">Priority</Label>
                <Select>
                  <SelectTrigger id="priority">
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                  <SelectContent className="text-muted-foreground">
                    <SelectItem value="low" className="data-[state=checked]:text-pink-700">
                      Low
                    </SelectItem>
                    <SelectItem value="medium" className="data-[state=checked]:text-pink-700">
                      Medium
                    </SelectItem>
                    <SelectItem value="high" className="data-[state=checked]:text-pink-700">
                      High
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="project">Project</Label>
                <div className="flex flex-wrap gap-2 mb-2">
                  <Input
                    id="project"
                    placeholder="Enter projects (space-separated)"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                  />
                  {projects.map((project, index) => (
                    <Badge key={index} variant="error" onClick={() => handleBadgeClick(project)}>
                      {project}
                    </Badge>
                  ))}
                  {projects.length >= maxTags && (
                    <Alert variant="destructive">You can only add up to {maxTags} tags.</Alert>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="type">Type</Label>
                <Select>
                  <SelectTrigger id="type">
                    <SelectValue placeholder="Select task type" />
                  </SelectTrigger>
                  <SelectContent className="text-muted-foreground">
                    <SelectItem value="personal" className="data-[state=checked]:text-pink-700">
                      Personal
                    </SelectItem>
                    <SelectItem value="work" className="data-[state=checked]:text-pink-700">
                      Work
                    </SelectItem>
                    <SelectItem value="others" className="data-[state=checked]:text-pink-700">
                      Others
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subtasks">Subtasks</Label>
                <Textarea
                  id="subtasks"
                  placeholder="Enter subtasks (comma-separated)"
                  className="w-full h-30 resize-none scroll-smooth focus:scroll-auto"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="frequency">Frequency</Label>
                <Select defaultValue="one-time">
                  <SelectTrigger id="frequency">
                    <SelectValue placeholder="Select frequency" />
                  </SelectTrigger>
                  <SelectContent className="text-muted-foreground">
                    <SelectItem value="one-time" className="data-[state=checked]:text-pink-700">
                      One-time
                    </SelectItem>
                    <SelectItem value="daily" className="data-[state=checked]:text-pink-700">
                      Daily
                    </SelectItem>
                    <SelectItem value="weekly" className="data-[state=checked]:text-pink-700">
                      Weekly
                    </SelectItem>
                    <SelectItem value="monthly" className="data-[state=checked]:text-pink-700">
                      Monthly
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="attachments">Attachments</Label>
                <Select defaultValue="no-attachment">
                  <SelectTrigger id="attachment">
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                  <SelectContent className="text-muted-foreground">
                    <SelectItem value="attachment" className="data-[state=checked]:text-pink-700">
                      Attachment
                    </SelectItem>
                    <SelectItem value="no-attachment" className="data-[state=checked]:text-pink-700">
                      None
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Select defaultValue="false">
                  <SelectTrigger id="status">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent className="text-muted-foreground">
                    <SelectItem value="true" className="data-[state=checked]:text-pink-700">
                      Completed
                    </SelectItem>
                    <SelectItem value="false" className="data-[state=checked]:text-pink-700">
                      Pending
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Enter task description"
                  className="w-full h-40 resize-none scroll-smooth focus:scroll-auto"
                />
              </div>
              <Button type="submit" className="w-full">
                Create Task
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
