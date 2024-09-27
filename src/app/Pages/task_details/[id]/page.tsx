"use client";
import { useParams } from "next/navigation";
import { initialTasks } from "@/components/tasks/tasks";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/common/Icon";
import { TaskNotFound } from "@/components/errors/TaskNotFound";

export default function Task_DetailsPage() {
  const params = useParams();
  const taskId = params ? Number(params.id) : 0;
  const task = initialTasks.find((t) => t.id === taskId);

  if (!task) {
    return <TaskNotFound />;
  }

  return (
    <div>
      <section className="bg-background py-12 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl">
            <div className="space-y-6 m-2">
              <div className="space-y-2 text-center">
                <h1 className="text-3xl font-bold text-pink-600">Task Details</h1>
                <p className="text-muted-foreground">Provide specific information about your task.</p>
              </div>
              <div className="bg-card text-card-foreground p-6 rounded-lg shadow-lg space-y-6 m-4">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="lg:text-2xl font-bold dark:text-primary">{task.taskName}</h2>
                  <div className="flex gap-2">
                    <Badge variant="info">{task.type}</Badge>
                    <Badge variant="urgent">{task.project}</Badge>
                    {task.status ? <Icon iconType="checkMark" /> : <Icon iconType="crossMark" />}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="due-date" className="text-muted-foreground mb-1 block">
                      Due Date
                    </Label>
                    <div className="dark:text-accent font-semibold">
                      <Badge variant="secondary">{task.dueDate.toDateString()}</Badge>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="priority" className="text-muted-foreground mb-1 block">
                      Priority
                    </Label>
                    <Badge variant="default" className="text-sm font-medium">
                      {task.priority}
                    </Badge>
                  </div>
                  <div>
                    <Label htmlFor="frequency" className="text-muted-foreground mb-1 block">
                      Frequency
                    </Label>
                    <div className="dark:text-accent font-semibold">
                      <Badge variant="accent">{task.frequency}</Badge>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="attachments" className="text-muted-foreground mb-1 block">
                      Attachments
                    </Label>
                    <div className="flex items-center gap-1">
                      <span className="dark:text-info font-semibold">{task.attachments ? "Yes" : "No"}</span>
                      <Icon iconType={task.attachments ? "attachment" : "noAttachment"} className="mr-2" size={16} />
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="description" className="text-muted-foreground mb-1 block">
                    Subtasks
                  </Label>
                  <div className="text-foreground dark:text-accent">
                    <ul className="list-disc pl-5 mt-2">
                      {task.subtasks.map((subtask, index) => (
                        <li key={index} className="mb-1">
                          {subtask}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex justify-between pt-4">
                  <Link
                    href={`/Pages/task_edit/${task.id}`}
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    prefetch={false}>
                    <Icon iconType="filePen" className="h-5 w-5 mr-2" />
                    Edit
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-md bg-destructive px-4 py-2 text-sm font-medium text-destructive-foreground shadow transition-colors hover:bg-destructive/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    prefetch={false}>
                    <Icon iconType="trash" className="h-5 w-5 mr-2" />
                    Delete
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
