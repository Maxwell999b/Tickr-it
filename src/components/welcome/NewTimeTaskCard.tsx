import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import CIcon from "../common/CIcons";
import Add_New_Task from "../tasks/Add_New_Task";
const NewTimeTaskCard = ({
  title = "Great Job!",
  description = "You’ve completed all your tasks.",
  contentText = "Why not start a new one and keep the momentum going?🔥",
}) => {
  return (
    <div className="flex items-center justify-center">
      <Card className="w-full max-w-lg bg-muted">
        <CardHeader className="space-y-4">
          <CardTitle className="text-4xl font-bold text-center text-pink-600">{title}</CardTitle>
          <CardDescription className="text-center text-lg font-bold">{description}</CardDescription>
          <div className="flex justify-center">
            <CIcon CIconType="trophy" size={96} className="text-blue-600 dark:text-blue-400" />
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

export default NewTimeTaskCard;
