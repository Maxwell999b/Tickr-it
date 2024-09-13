import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import Icon from "@/components/component/Icon";
export default function Task_EditPage() {
  return (
    <div>
      <section className="bg-muted py-12 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl">
            <div className="space-y-2 m-2">
              <h1 className="text-3xl font-bold text-pink-500 dark:text-secondary cent">Edit Task</h1>
              <p className="text-muted-foreground">Update the details of your task.</p>
            </div>
            <Card className="bg-card text-card-foreground p-6 rounded-lg shadow-lg space-y-6 m-4">
              <CardContent className="space-y-4">
                <div className="space-y-1">
                  <Label htmlFor="title" className="text-muted-foreground">
                    Title
                  </Label>
                  <Input id="title" type="text" defaultValue="Finish project proposal" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="dueDate" className="text-muted-foreground">
                    Due Date
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button id="dueDate" variant="outline" className="w-full justify-start text-left font-normal">
                        <Icon iconType="calendarDays" className="mr-1 h-4 w-4 -translate-x-1" />
                        2023-06-30
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar initialFocus mode="single" />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="space-y-1">
                  <Label id="priority" htmlFor="priority" className="text-muted-foreground">
                    Priority
                  </Label>
                  <Select>
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
              </CardContent>
              <CardFooter className="flex justify-center gap-2">
                <Button variant="outline">Cancel</Button>
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
