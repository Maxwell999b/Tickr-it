import { useState, useEffect } from "react";

export const useTwoFactorAuth = () => {
  const [twoAuthEnabled, setTwoAuthEnabled] = useState<boolean>(false);

  useEffect(() => {
    const storedPreference = localStorage.getItem("twoFactorAuth");
    setTwoAuthEnabled(storedPreference === "true");
  }, []);

  const toggleTwoFactorAuth = () => {
    const newPreference = !twoAuthEnabled;
    setTwoAuthEnabled(newPreference);
    localStorage.setItem("twoFactorAuth", newPreference.toString());
  };

  return { twoAuthEnabled, toggleTwoFactorAuth };
};
