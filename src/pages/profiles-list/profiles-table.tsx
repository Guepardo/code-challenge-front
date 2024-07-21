import { useQuery } from "@tanstack/react-query";
import ProfileCard from "@/components/profile-card";
import { getProfiles } from "@/api/profiles";
import { useSearchParams } from "react-router-dom";
import Pagination from "@/components/pagination";
import ProfilesTableSkeleton from "./profiles-table-skeleton";

export default function ProfilesTable() {
  const [searchParams, setSearchParams] = useSearchParams();

  const term = searchParams.get("term") || "";
  const page = searchParams.get("page") || "1";

  const { data, isLoading } = useQuery({
    queryKey: ["profiles", term, page],
    queryFn: () => getProfiles({ term, page }),
  });

  function handlePageChange(newPage: number) {
    setSearchParams((prev) => {
      prev.set("page", newPage.toString());
      return prev;
    });
  }

  if (isLoading) {
    return <ProfilesTableSkeleton />;
  }

  if (!data) {
    return <div>No data</div>;
  }

  return (
    <>
      <div className="grid grid-cols-3 gap-3">
        {data.data.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
      </div>
      {data && (
        <Pagination
          totalPages={data.meta.total_pages}
          onPageChange={handlePageChange}
          currentPage={data.meta.current_page}
          totalCount={data.meta.total_count}
        />
      )}
    </>
  );
}
