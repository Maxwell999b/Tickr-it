import Add_New_Task from "@/components/tasks/Add_New_Task";
import { MainYourTask } from "@/components/tasks/MainYourTask";
export default function Hero_HomePage() {
  return (
    <div>
      <section className="bg-background py-12 md:py-20">
        <div className="container">
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold text-pink-600 md:text-4xl">Welcome to your task list</h1>
            <p className="text-muted-foreground md:text-xl">Get started by adding a new task</p>
            <Add_New_Task />
          </div>
        </div>
      </section>
      <MainYourTask />
    </div>
  );
}
