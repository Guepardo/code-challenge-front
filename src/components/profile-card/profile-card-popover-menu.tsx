import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { EllipsisVertical, Logs, RefreshCw } from "lucide-react";
import ProfileCardEditDialog from "./profile-card-edit-dialog";
import { Separator } from "../ui/separator";


export default function ProfileCardPopoverMenu() {
  return (
    <Popover>
      <PopoverTrigger className="hover:bg-accent rounded p-1">
        <EllipsisVertical size={25} />
      </PopoverTrigger>
      <PopoverContent className="flex flex-col w-40">
        <ProfileCardEditDialog />
        <Button className="justify-start" variant={"ghost"}>
          <RefreshCw className="mr-2 h-4 w-4" /> Refresh
        </Button>
        <Separator className="my-1" />
        <Button className="justify-start" variant={"ghost"}>
          <Logs className="mr-2 h-4 w-4" /> Logs
        </Button>
      </PopoverContent>
    </Popover>
  );
}