import React, { useState, useEffect } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface DeleteTaskConfirmationProps {
  isOpen: boolean;
  taskId: number;
  taskName: string;
  onConfirmDelete: (id: number) => void;
  onCancel: () => void;
}

export const DeleteTaskConfirmation: React.FC<DeleteTaskConfirmationProps> = ({
  taskId,
  taskName,
  onConfirmDelete,
}) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (taskId !== null) {
      setOpen(true);
    }
  }, [taskId]);

  const handleClose = () => setOpen(false);

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className="sm:max-w-[425px]">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-xl font-semibold text-red-600 dark:text-red-400">
            Confirm Deletion
          </AlertDialogTitle>
          <AlertDialogDescription className="text-sm text-gray-500 dark:text-gray-400">
            Are you sure you want to delete the task:{" "}
            <span className="text-gray-700 dark:text-gray-300 font-bold">{taskName}</span>?{" "}
            <span className="text-red-600">This action cannot be undone.</span>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="sm:space-x-4">
          <AlertDialogCancel className="w-full sm:w-auto" onClick={handleClose}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={() => {
              onConfirmDelete(taskId);
              handleClose();
            }}
            className="w-full sm:w-auto bg-red-600 text-white hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800">
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
