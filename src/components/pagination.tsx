import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { Button } from "./ui/button";

type PaginationProps = {
  totalPages: number;
  currentPage: number;
  totalCount: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({
  totalPages,
  currentPage,
  totalCount,
  onPageChange,
}: PaginationProps) {
  const disableNextPageButton = currentPage === totalPages;
  const disablePreviousPageButton = currentPage === 1;

  return (
    <div className="flex justify-between items-center">
      <span className="font-semibold text-sm">Total {totalCount} item(s)</span>

      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2">
          <Button onClick={() => onPageChange(1)} variant="secondary">
            <ChevronsLeft className="h-4 w-4" />
          </Button>
          <Button
            disabled={disablePreviousPageButton}
            onClick={() => onPageChange(currentPage - 1)}
            variant="secondary"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            onClick={() => onPageChange(currentPage + 1)}
            variant="secondary"
            disabled={disableNextPageButton}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button
            onClick={() => onPageChange(totalPages)}
            variant="secondary"
            disabled={disableNextPageButton}
          >
            <ChevronsRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <span className="font-semibold text-sm">
        Page {currentPage} of {totalPages}
      </span>
    </div>
  );
}
