"use client";
import React, { useState, useEffect } from "react";
import Hero_HomePage from "./Pages/hero_home/page";
import LandingPage from "./Pages/landing_page/page";
import { WelcomeOverlay } from "@/components/welcome/WelcomeOverlay";
// Push
import AuthPage from "./Pages/auth/page";
import HelpFAQ from "./Pages/help_faq/page";
import ContactUsPage from "./Pages/contact_us/page";
import Privacy_PolicyPage from "./Pages/privacy-policy/page";
import Terms_Of_ServicePage from "./Pages/terms-of-service/page";
import ForgotPassword from "./Pages/forgot_pwd/page";
import LearnMore from "./Pages/learn_more/page";
import AboutUsPage from "./Pages/about_us/page";
import DashboardPage from "./Pages/dashboard/page";
import ProfileUserInfo from "./Pages/profile/page";
import SettingsPageUserInformation from "./Pages/settings/page";
import Task_DetailsPage from "./Pages/task_details/[id]/page";
import Task_EditPage from "./Pages/task_edit/[id]/page";
import { Error404 } from "@/components/errors/Error404";
import { TaskNotFound } from "@/components/errors/TaskNotFound";
import FirstTimeTaskCard from "@/components/welcome/FirstTimeTaskCard";
import NewTimeTaskCard from "@/components/welcome/NewTimeTaskCard";
import { DeleteTaskConfirmation } from "@/components/tasks/DeleteTaskConfirmation";
import Create_NewTaskPageForm from "./Pages/new-task/page";
import EarningsPageEarningsOverview from "./Pages/earnings/page";
import TaskCollaboration from "./Pages/Collaboration/page";
import TeamCollaboration from "./Pages/Collaboration/Teams/page";
// in progress
import AdminDashboard from "./Pages/admin_dashboard/page";
import TeamCollaborationTest from "./Pages/Collaboration/Teams/test";
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
      {/* <WelcomeOverlay userName={userName} onClose={onClose} /> */}
      {/* <Hero_HomePage /> */}

      {/* <AdminDashboard /> */}

      {/* <EarningsPageEarningsOverview /> */}

      {/* <FirstTimeTaskCard />
      <NewTimeTaskCard />
      <Error404 />
      <TaskNotFound /> */}
    </div>
  );
}
