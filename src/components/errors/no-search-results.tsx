import { Button } from "@/components/ui/button";
import { Frown } from "lucide-react";

interface NoSearchResultsProps {
  clearSearch: () => void;
  message: string;
}

export default function NoSearchResults({ clearSearch, message }: NoSearchResultsProps) {
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <p className="text-xl font-semibold mb-4 text-red-600">
        {message} <Frown className="inline-block stroke-primary" />
      </p>
      <Button onClick={clearSearch} variant="secondary">
        Clear Search
      </Button>
    </div>
  );
}
