import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Building, MapPin } from "lucide-react";
import ProfileCardPopoverMenu from "./profile-card-popover-menu";


export default function ProfileCard() {
  return (
    <div className="bg-white w-full rounded-lg border p-4">
      <div>
        <div className="flex items-center">
          <img
            className="rounded-full h-20 w-20"
            src="https://avatars.githubusercontent.com/u/6763464?v=4"
            alt=""
          />
          <div className="flex flex-1 flex-col pl-3">
            <span className="font-medium text-sm text-black">
              Allyson Maciel Guimarães
            </span>
            <span className="font-medium text-sm text-zinc-500">
              https://allyson.dev
            </span>
            <div className="flex items-center gap-1">
              <MapPin size={15} />
              <span className="font-medium text-sm text-black">
                Anápolis, Goiás
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Building size={15} />
              <span className="font-medium text-sm text-black">Github</span>
            </div>
          </div>

          <ProfileCardPopoverMenu />
        </div>
      </div>

      <Separator className="my-4 bg-zinc-100" />

      <div className="grid grid-cols-4 mt-4 gap-3">
        <div className="flex flex-col items-center">
          <span className="font-medium text-sm text-zinc-500">Fallows</span>
          <span className="font-bold text-sm text-black">100</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-medium text-sm text-zinc-500">Fallowing</span>
          <span className="font-bold text-sm text-black">100</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-medium text-sm text-zinc-500">Stars</span>
          <span className="font-bold text-sm text-black">100</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-medium text-sm text-zinc-500">
            Contributions
          </span>
          <span className="font-bold text-sm text-black">100</span>
        </div>
      </div>

      <Separator className="my-4 bg-zinc-100" />

      <div className="grid grid-cols-2 mt-4 gap-3">
        <div className="flex flex-col items-center">
          <span className="font-medium text-sm text-zinc-500">Sync Status</span>
          <Badge variant={"secondary"}>
            <span className="font-bold text-sm">Success</span>
          </Badge>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-medium text-sm text-zinc-500">Last Update</span>
          <span className="font-bold text-sm text-black">5 days ago</span>
        </div>
      </div>
    </div>
  );
}
