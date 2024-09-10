import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Pagination, PaginationContent, PaginationItem } from "@/components/ui/pagination";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Add_New_Task from "@/components/component/Add_New_Task";
import Icon from "@/components/component/Icon";

export default function Hero_HomePage() {
  return (
    <div>
      <section className="bg-background py-12 md:py-20">
        <div className="container">
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold md:text-4xl">Welcome to your task list</h1>
            <p className="text-muted-foreground md:text-xl">Get started by adding a new task</p>
            <Add_New_Task />
          </div>
        </div>
      </section>
      <section className="bg-muted py-12 md:py-20">
        <div className="container">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Your Tasks</h2>
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <Button size="icon" variant="outline" className="h-8 w-8 ">
                      <Icon iconType="moveHorizontal" className="h-4 w-4" />
                      <span className="sr-only">Previous</span>
                    </Button>
                  </PaginationItem>
                  <PaginationItem>
                    <Button size="icon" variant="outline" className="h-8 w-8">
                      <Icon iconType="moveHorizontal" className="h-4 w-4" />
                      <span className="sr-only">Next</span>
                    </Button>
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Task Name</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Finish project proposal</div>
                  </TableCell>
                  <TableCell>2023-06-30</TableCell>
                  <TableCell>
                    <Badge variant="secondary">High</Badge>
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
                          <Link href="#" className="flex items-center gap-2" prefetch={false}>
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
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Prepare for client meeting</div>
                  </TableCell>
                  <TableCell>2023-07-05</TableCell>
                  <TableCell>
                    <Badge>Medium</Badge>
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
                          <Link href="#" className="flex items-center gap-2" prefetch={false}>
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
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Review marketing strategy</div>
                  </TableCell>
                  <TableCell>2023-07-15</TableCell>
                  <TableCell>
                    <Badge variant="outline">Low</Badge>
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
                          <Link href="#" className="flex items-center gap-2" prefetch={false}>
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
              </TableBody>
            </Table>
          </div>
        </div>
      </section>
    </div>
  );
}
