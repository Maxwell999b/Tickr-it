"use client";
import { useParams } from "next/navigation";
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

export default function Task_EditPage() {
  const params = useParams();
  const taskId = Number(params.id);
  const task = initialTasks.find((t) => t.id === taskId);

  if (!task) {
    return <TaskNotFound />;
  }

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
                  <Input id="title" type="text" defaultValue={task.taskName} />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="dueDate" className="text-muted-foreground">
                    Due Date
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button id="dueDate" variant="outline" className="w-full justify-start text-left font-normal">
                        <Icon iconType="calendarDays" className="mr-1 h-4 w-4 -translate-x-1" />
                        {task.dueDate.toDateString()}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar initialFocus mode="single" selected={task.dueDate} />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="space-y-1">
                  <Label id="priority" htmlFor="priority" className="text-muted-foreground">
                    Priority
                  </Label>
                  <Select defaultValue={task.priority}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="low">Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="type" className="text-muted-foreground">
                    Type
                  </Label>
                  <Select defaultValue={task.type}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="personal">Personal</SelectItem>
                      <SelectItem value="work">Work</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="project" className="text-muted-foreground">
                    Project
                  </Label>
                  <Input id="project" type="text" defaultValue={task.project} />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="attachments" className="text-muted-foreground">
                    Attachments
                  </Label>
                  <Select defaultValue={task.attachments ? "yes" : "no"}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select attachments" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">Yes</SelectItem>
                      <SelectItem value="no">No</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center gap-2">
                <Link href={`/Pages/task_details/${task.id}`}>
                  <Button variant="outline">Cancel</Button>
                </Link>
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
