import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Building, MapPin } from "lucide-react";
import ProfileCardPopoverMenu from "./profile-card-popover-menu";
import { ProfileResponse } from "@/api/profiles";

import moment from "moment";
import { formatNumber } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function ProfileCard({ profile }: { profile: ProfileResponse }) {
  const badgeColorsBySyncStatus: { [key: string]: string } = {
    pending: "bg-blue-400",
    failure: "bg-red-400",
    success: "bg-green-400",
  };

  const badgeColor =
    badgeColorsBySyncStatus[profile.sync_status] || "bg-gray-400";

  return (
    <div className="bg-white w-full rounded-lg border p-4">
      <div>
        <div className="flex items-center">
          <Avatar className="rounded-full h-20 w-20">
            <AvatarImage src={profile.avatar_url} />
            <AvatarFallback>{profile.username[0].toUpperCase()}</AvatarFallback>
          </Avatar>
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
                {profile.location || "No location"}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Building size={15} />
              <span className="font-medium text-sm text-black">
                {profile.organization_name || "No organization"}
              </span>
            </div>
          </div>

          <ProfileCardPopoverMenu profile={profile} />
        </div>
      </div>

      <Separator className="my-4 bg-zinc-100" />

      <div className="grid grid-cols-4 mt-4 gap-3">
        <div className="flex flex-col items-center">
          <span className="font-medium text-sm text-zinc-500">Follows</span>
          <span className="font-bold text-sm text-black">
            {formatNumber(profile.followers_count)}
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-medium text-sm text-zinc-500">Following</span>
          <span className="font-bold text-sm text-black">
            {formatNumber(profile.following_count)}
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-medium text-sm text-zinc-500">Stars</span>
          <span className="font-bold text-sm text-black">
            {formatNumber(profile.stars_count)}
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
          <Badge
            className={`rounded-full ${badgeColor} hover:${badgeColor}`}
            variant={"secondary"}
          >
            <span className="font-bold text-sm text-white">
              {profile.sync_status}
            </span>
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
