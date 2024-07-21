import ProfilesFilters from "./profiles-filters";
import ProfilesTable from "./profiles-table";

export default function ProfilesList() {
  return (
    <div className="flex flex-col gap-5">
      <ProfilesFilters />
      <ProfilesTable />
    </div>
  );
}
