import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import Icon from "../common/Icon";

export const TaskNotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md bg-muted rounded-lg shadow-lg">
        <CardHeader className="space-y-4">
          <CardTitle className="text-4xl font-bold text-center text-accent">Task Not Found</CardTitle>
          <CardDescription className="text-center text-lg  text-gray-400 dark:text-gray-600 font-bold">
            Sorry, we could not find the task you are looking for.
          </CardDescription>
          <div className="flex justify-center">
            <Icon iconType="grinningSweat" size={96} className="text-red-600 dark:text-red-400" />
          </div>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-foreground">Please make sure the task exists or return to the home page.</p>
        </CardContent>
        <CardFooter className="flex justify-center pt-4">
          <Link href="/" passHref>
            <Button variant="secondary">Return to Home</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};
