import Image from "next/image";
import { Hero_HomePage } from "@/components/component/hero_home-page";
import { Create_NewTaskPageForm } from "@/components/component/create_new-task-page-form";
import { DashboardPage } from "@/components/component/dashboard-page";
import { EarningsPageEarningsOverview } from "@/components/component/earnings-page-earnings-overview";
import { LoginPageForm } from "@/components/component/login-page-form";
import { RegistrationPageForm } from "@/components/component/registration-page-form";
import { SettingsPageUserInformation } from "@/components/component/settings-page-user-information";
import { Task_DetailsPage } from "@/components/component/task_details-page";
import { Navbar } from "@/components/component/Nav";
export default function Home() {
  return (
    <>
      <Navbar />
      {/* <Hero_HomePage />
      <Create_NewTaskPageForm /> 
      <DashboardPage /> 
      <EarningsPageEarningsOverview />
      <LoginPageForm /> 
      <RegistrationPageForm />
      <SettingsPageUserInformation /> */}
      <Task_DetailsPage />
    </>
  );
}
