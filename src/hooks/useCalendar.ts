// useCalendar.ts
import { useState } from "react";

type DateChangeCallback = (taskId: number, date: Date | undefined) => void;

export function useCalendar(initialDates: { [taskId: number]: Date | undefined }, onDateChange?: DateChangeCallback) {
  const [selectedDates, setSelectedDates] = useState<{ [taskId: number]: Date | undefined }>(initialDates);

  const handleDateSelect = (taskId: number, date: Date | undefined) => {
    setSelectedDates((prevDates) => ({
      ...prevDates,
      [taskId]: date,
    }));
    if (onDateChange) {
      onDateChange(taskId, date);
    }
  };

  const formatDate = (date: Date | undefined) => {
    if (!date) return "No date set";
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return {
    selectedDates,
    handleDateSelect,
    formatDate,
  };
}
