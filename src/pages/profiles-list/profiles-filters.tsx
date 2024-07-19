import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";

export default function ProfilesFilters() {
  return (
    <div className="flex flex-row gap-2">
      <Input placeholder="Filter by name, location, organization or url"/>
      <Button variant={"outline"}>
        <Search className="mr-2 h-4 w-4" /> Filter
      </Button>
      <Button>
        <Plus className="mr-2 h-4 w-4" /> Create Profile
      </Button>
    </div>
  );
}