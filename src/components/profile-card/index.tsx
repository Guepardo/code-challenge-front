import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Building, MapPin } from "lucide-react";
import ProfileCardPopoverMenu from "./profile-card-popover-menu";
import { ProfileResponse } from "@/api/profiles";

import moment from 'moment';

export default function ProfileCard({ profile }: { profile: ProfileResponse }) {
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
              {profile.username}
            </span>
            <span className="font-medium text-sm text-zinc-500">
              {profile.profile_url}
            </span>
            <div className="flex items-center gap-1">
              <MapPin size={15} />
              <span className="font-medium text-sm text-black">
                {profile.location}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Building size={15} />
              <span className="font-medium text-sm text-black">
                {profile.organization_name}
              </span>
            </div>
          </div>

          <ProfileCardPopoverMenu />
        </div>
      </div>

      <Separator className="my-4 bg-zinc-100" />

      <div className="grid grid-cols-4 mt-4 gap-3">
        <div className="flex flex-col items-center">
          <span className="font-medium text-sm text-zinc-500">Follows</span>
          <span className="font-bold text-sm text-black">
            {profile.followers_count}
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-medium text-sm text-zinc-500">Following</span>
          <span className="font-bold text-sm text-black">
            {profile.following_count}
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-medium text-sm text-zinc-500">Stars</span>
          <span className="font-bold text-sm text-black">
            {profile.stars_count}
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-medium text-sm text-zinc-500">
            Contributions
          </span>
          <span className="font-bold text-sm text-black">
            {profile.year_contributions_count}
          </span>
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
          <span className="font-bold text-sm text-black">
            {moment(profile.updated_at).fromNow()}
          </span>
        </div>
      </div>
    </div>
  );
}
