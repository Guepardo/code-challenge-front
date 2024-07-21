import { Skeleton } from "@/components/ui/skeleton";

export default function ProfilesTableSkeleton() {
  return (
    <div className="grid grid-cols-3 gap-3">
      {[...Array(6)].map((_, index) => (
        <Skeleton key={index} className="rounded h-64 w-full border" />
      ))}
    </div>
  );
}
