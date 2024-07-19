import ProfileCard from "@/components/profile-card";

export default function ProfilesList() {
  return (
    <>
      <div className="grid grid-cols-3 gap-3">
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
      </div>
    </>
  );
}
