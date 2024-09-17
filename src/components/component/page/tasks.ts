interface Task {
  id: number;
  taskName: string;
  dueDate: Date;
  priority: "High" | "Medium" | "Low";
  project: string;
  type: string;
  subtasks: string[];
  frequency: string;
  attachments: boolean;
  status: boolean;
}

const initialTasks: Task[] = [
  {
    id: 1,
    taskName: "Finish project proposal",
    dueDate: new Date("2023-06-30"),
    priority: "High",
    project: "Client A",
    type: "Project",
    subtasks: ["Research competitors", "Outline proposal structure", "Write executive summary"],
    frequency: "Monthly",
    attachments: true,
    status: false,
  },
  {
    id: 2,
    taskName: "Prepare presentation",
    dueDate: new Date("2023-07-05"),
    priority: "Medium",
    project: "Client B",
    type: "Presentation",
    subtasks: ["Design slides", "Add charts", "Practice delivery"],
    frequency: "One-time",
    attachments: true,
    status: true,
  },
  {
    id: 3,
    taskName: "Team meeting preparation",
    dueDate: new Date("2023-07-10"),
    priority: "Low",
    project: "Internal",
    type: "Meeting",
    subtasks: ["Send calendar invite", "Prepare agenda", "Book meeting room"],
    frequency: "Weekly",
    attachments: false,
    status: true,
  },
  {
    id: 4,
    taskName: "test",
    dueDate: new Date("2024-07-10"),
    priority: "Medium",
    project: "Internal",
    type: "Meeting",
    subtasks: ["Send calendar invite", "Prepare agenda", "Book meeting room"],
    frequency: "Monthly",
    attachments: false,
    status: true,
  },
  {
    id: 5,
    taskName: "test2",
    dueDate: new Date("2025-07-10"),
    priority: "High",
    project: "Internal",
    type: "Meeting",
    subtasks: ["Send calendar invite", "Prepare agenda", "Book meeting room"],
    frequency: "Weekly",
    attachments: true,
    status: false,
  },
  {
    id: 6,
    taskName: "test3",
    dueDate: new Date("2027-07-10"),
    priority: "Low",
    project: "Internal",
    type: "Meeting",
    subtasks: ["Send calendar invite", "Prepare agenda", "Book meeting room"],
    frequency: "Daily",
    attachments: false,
    status: true,
  },
];

export { type Task, initialTasks };
