import { useState, useEffect } from "react";

export const useTaskReminders = () => {
  const [remindersEnabled, setRemindersEnabled] = useState<boolean>(true);

  useEffect(() => {
    const storedPreference = localStorage.getItem("taskReminders");
    setRemindersEnabled(storedPreference === "true");
  }, []);

  const toggleTaskReminders = () => {
    const newPreference = !remindersEnabled;
    setRemindersEnabled(newPreference);
    localStorage.setItem("taskReminders", newPreference.toString());
  };

  return { remindersEnabled, toggleTaskReminders };
};
