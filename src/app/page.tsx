"use client";
import React, { useState, useEffect } from "react";
import Hero_HomePage from "./Pages/hero_home/page";
import LandingPage from "./Pages/landing_page/page";
import { WelcomeOverlay } from "@/components/welcome/WelcomeOverlay";
export default function Home() {
  const [showOverlay, setShowOverlay] = useState<"" | boolean>("");

  useEffect(() => {
    const hideOverlay = localStorage.getItem("hideWelcomeOverlay");
    if (!hideOverlay) {
      setShowOverlay(true);
    }
  }, []);

  const handleClose = () => {
    setShowOverlay(false);
  };

  return (
    <div>
      {showOverlay && <WelcomeOverlay userName="Abdulrahman" onClose={handleClose} />}
      <LandingPage />
    </div>
  );
}
