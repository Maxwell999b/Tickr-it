interface Task {
  id: number;
  taskName: string;
  dueDate: Date;
  priority: "High" | "Medium" | "Low";
  project: string;
  type: "Personal" | "Work" | "Others";
  subtasks: string[];
  frequency: "Monthly" | "Weekly" | "Daily" | "One-time";
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
    type: "Work",
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
    type: "Others",
    subtasks: ["Design slides", "Add charts", "Practice delivery"],
    frequency: "One-time",
    attachments: true,
    status: false,
  },
  {
    id: 3,
    taskName: "Team meeting preparation",
    dueDate: new Date("2023-07-10"),
    priority: "Low",
    project: "Internal",
    type: "Work",
    subtasks: ["Send calendar invite", "Prepare agenda", "Book meeting room"],
    frequency: "Weekly",
    attachments: false,
    status: true,
  },
  {
    id: 4,
    taskName: "Update project plan",
    dueDate: new Date("2024-07-10"),
    priority: "Medium",
    project: "Client C",
    type: "Work",
    subtasks: ["Review progress", "Adjust deadlines", "Communicate changes"],
    frequency: "Monthly",
    attachments: true,
    status: true,
  },
  {
    id: 5,
    taskName: "Organize team retreat",
    dueDate: new Date("2025-07-10"),
    priority: "High",
    project: "Internal",
    type: "Work",
    subtasks: ["Book venue", "Send invitations", "Plan activities"],
    frequency: "One-time",
    attachments: true,
    status: true,
  },
  {
    id: 6,
    taskName: "Schedule personal doctor",
    dueDate: new Date("2027-07-10"),
    priority: "Low",
    project: "Personal",
    type: "Personal",
    subtasks: ["Find available slots", "Confirm insurance", "Prepare medical records"],
    frequency: "Monthly",
    attachments: false,
    status: true,
  },
];

export { type Task, initialTasks };
