import Link from "next/link";
import Icon from "../common/Icon";
const Add_New_Task = () => {
  return (
    <div>
      <Link
        href="/Pages/new-task/"
        className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        prefetch={false}>
        <Icon iconType="plus" className="h-5 w-5 mr-2" />
        Add new task
      </Link>
    </div>
  );
};
export default Add_New_Task;
