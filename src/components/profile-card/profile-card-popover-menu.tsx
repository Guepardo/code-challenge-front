import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { EllipsisVertical, Link, Logs, RefreshCw } from "lucide-react";
import ProfileCardEditDialog from "./profile-card-edit-dialog";
import { Separator } from "../ui/separator";
import { ProfileResponse } from "@/api/profiles";
import { toast } from "../ui/use-toast";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { creteProfileSync } from "@/api/profile_syncs";

export default function ProfileCardPopoverMenu({
  profile,
}: {
  profile: ProfileResponse;
}) {
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();

  const { mutateAsync: profileSyncMutation } = useMutation({
    mutationFn: () => creteProfileSync(profile.id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profiles"] });
    },
  });

  function handleShortLink() {
    const link = `${import.meta.env.VITE_BASE_URL}/${profile.nanoid}`;

    navigator.clipboard.writeText(link);

    toast({
      title: "Copied",
      description: `Link "${link}" was successfully copied to clipboard`,
    });

    setOpen(false);
  }

  async function handleRefresh() {
    try {
      await profileSyncMutation();
      toast({
        title: "Success",
        description: "Profile will be refreshed soon",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to refresh profile. Please try again",
      });
    }
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className="hover:bg-accent rounded p-1">
        <EllipsisVertical size={25} />
      </PopoverTrigger>
      <PopoverContent className="flex flex-col w-40">
        <ProfileCardEditDialog profile={profile} />
        <Button
          className="justify-start"
          variant={"ghost"}
          onClick={handleRefresh}
        >
          <RefreshCw className="mr-2 h-4 w-4" /> Refresh
        </Button>
        <Button
          className="justify-start"
          variant={"ghost"}
          onClick={handleShortLink}
        >
          <Link className="mr-2 h-4 w-4" /> Short Link
        </Button>
        <Separator className="my-1" />
        <Button className="justify-start" variant={"ghost"}>
          <Logs className="mr-2 h-4 w-4" /> Logs
        </Button>
      </PopoverContent>
    </Popover>
  );
}
