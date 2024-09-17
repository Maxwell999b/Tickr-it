import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { MainYourTask } from "@/components/component/page/MainYourTask";
import Icon from "@/components/component/Icon";
export default function Task_DetailsPage() {
  return (
    <div>
      <section className="bg-background py-12 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl">
            <div className="space-y-6 m-2">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold text-pink-500 dark:text-secondary">Task Details</h1>
                <p className="text-muted-foreground">Provide specific information about your task.</p>
              </div>
              <div className="bg-card text-card-foreground p-6 rounded-lg shadow-lg space-y-6 m-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Badge variant="info">Important</Badge>
                    <h2 className="lg:text-2xl font-bold dark:text-primary ">Finish project proposal</h2>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="due-date" className="text-muted-foreground mb-1 block">
                      Due Date
                    </Label>
                    <div className="dark:text-accent font-semibold">
                      <Badge variant="secondary"> 2023-06-30</Badge>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="priority" className="text-muted-foreground mb-1 block">
                      Priority
                    </Label>
                    <Badge variant="default" className="text-sm font-medium">
                      High
                    </Badge>
                  </div>
                </div>

                <div>
                  <Label htmlFor="description" className="text-muted-foreground mb-1 block">
                    Description
                  </Label>
                  <div className="text-foreground dark:text-accent">
                    Finish the project proposal for the client meeting on June 30th. Include details on the scope,
                    timeline, and budget.
                  </div>
                </div>

                <div className="flex justify-between pt-4">
                  <Link
                    href="#"
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
