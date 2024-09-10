import Link from "next/link";

const Add_New_Task = () => {
  return (
    <div>
      {" "}
      <Link
        href="/Pages/new-task/"
        className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        prefetch={false}>
        <PlusIcon className="h-5 w-5 mr-2" />
        Add new task
      </Link>
    </div>
  );
};
export default Add_New_Task;

interface Hero_HomePageIconsProps {
  size?: number;
  className?: string;
}
function PlusIcon(props: Hero_HomePageIconsProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}
