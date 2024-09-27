import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import Icon from "../common/Icon";

export const Error404 = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md bg-muted">
        <CardHeader className="space-y-4">
          <CardTitle className="text-4xl font-bold text-center text-red-600 dark:text-red-400">404</CardTitle>
          <CardDescription className="text-center text-lg font-bold line-through">Page Not Found</CardDescription>
          <div className="flex justify-center">
            <Icon iconType="xEyes" size={96} className="text-red-600 dark:text-red-400" />
          </div>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-gray-600 dark:text-gray-300">
            Oops! The page you are looking for does not exist or has been moved.
          </p>
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
