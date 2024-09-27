import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import CIcon from "../common/CIcons";
import Add_New_Task from "../tasks/Add_New_Task";
const FirstTimeTaskCard = ({
  title = "Welcome!",
  description = "You have no tasks yet.",
  contentText = "Start adding tasks to organize your to-do list.",
}) => {
  return (
    <div className="flex items-center justify-center">
      <Card className="w-full max-w-lg bg-muted">
        <CardHeader className="space-y-4">
          <CardTitle className="text-4xl font-bold text-center text-pink-600">{title}</CardTitle>
          <CardDescription className="text-center text-lg font-bold">{description}</CardDescription>
          <div className="flex justify-center">
            <CIcon CIconType="confetti" size={96} className="text-blue-600 dark:text-blue-400" />
          </div>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-gray-600 dark:text-gray-300">{contentText}</p>
        </CardContent>
        <CardFooter className="flex justify-center pt-4">
          <Add_New_Task />
        </CardFooter>
      </Card>
    </div>
  );
};

export default FirstTimeTaskCard;
