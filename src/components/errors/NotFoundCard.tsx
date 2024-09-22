import React from "react";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const NotFoundCard = ({
  title = "Oops!",
  description = "No matching questions found.",
  contentText = "Please try a different search term.",
}) => {
  return (
    <div className="flex items-center justify-center">
      <Card className="w-full max-w-lg bg-muted">
        <CardHeader className="space-y-4">
          <CardTitle className="text-4xl font-bold text-center text-red-600 dark:text-red-400">{title}</CardTitle>
          <CardDescription className="text-center text-lg font-bold">{description}</CardDescription>
          <div className="flex justify-center">
            <Image
              src="/void.svg"
              width={550}
              height={550}
              alt="Not Found"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-fit sm:w-full lg:order-last"
            />
          </div>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-gray-600 dark:text-gray-300">{contentText}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFoundCard;
