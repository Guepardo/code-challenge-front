import { useQuery } from "@tanstack/react-query";
import ProfileCard from "@/components/profile-card";
import { getProfiles } from "@/api/profiles";

export default function ProfilesTable() {
  const { data, isLoading } = useQuery({
    queryKey: ["profiles"],
    queryFn: () => getProfiles(),
  });

  if (isLoading) {
    return <div>Loading...</div>;
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
    </>
  );
}
