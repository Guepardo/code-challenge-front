import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import ProfileCreateDialog from "./profile-create-dialog";

export default function ProfilesFilters() {
  return (
    <div className="flex flex-row gap-2">
      <Input placeholder="Filter by name, location, organization or url" />
      <Button variant={"outline"}>
        <Search className="mr-2 h-4 w-4" /> Filter
      </Button>
      <ProfileCreateDialog />
    </div>
  );
}
