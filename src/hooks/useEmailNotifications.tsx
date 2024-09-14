import { useState, useEffect } from "react";

export const useEmailNotifications = () => {
  const [receiveAll, setReceiveAll] = useState<boolean>(true);

  useEffect(() => {
    const storedPreference = localStorage.getItem("emailNotifications");
    setReceiveAll(storedPreference === "true");
  }, []);

  const toggleEmailNotifications = () => {
    const newPreference = !receiveAll;
    setReceiveAll(newPreference);
    localStorage.setItem("emailNotifications", newPreference.toString());
  };

  return { receiveAll, toggleEmailNotifications };
};
