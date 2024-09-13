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
import Icon from "@/components/component/Icon";
export function MainYourTask() {
  return (
    <section className="bg-muted py-12 md:py-20">
      <h2 className="text-3xl font-bold flex justify-center text-pink-500 dark:text-secondary p-2">Your Tasks</h2>
      <div className="container">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
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
                  <div className="font-semibold dark:text-primary">Finish project proposal</div>
                </TableCell>
                <TableCell className="dark:text-accent">
                  <Badge variant="secondary">2023-06-30</Badge>
                </TableCell>
                <TableCell>
                  <Badge variant="default">High</Badge>
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
                  <div className="font-semibold dark:text-primary">Prepare for client meeting</div>
                </TableCell>
                <TableCell className="dark:text-accent">
                  <Badge variant="secondary">2023-07-05</Badge>
                </TableCell>
                <TableCell>
                  <Badge variant="secondary">Medium</Badge>
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
                  <div className="font-semibold dark:text-primary">Review marketing strategy</div>
                </TableCell>
                <TableCell className="dark:text-accent">
                  <Badge variant="secondary">2023-07-15</Badge>
                </TableCell>
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
  );
}
