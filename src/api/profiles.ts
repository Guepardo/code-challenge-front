import { api } from "@/lib/axios";
import { PaginationSchema } from "./types/pagination";

export interface ProfileResponse {
  id: number;
  username: string;
  profile_url: string;
  organization_name?: string;
  location?: string;
  avatar_url: string;
  followers_count: number;
  following_count: number;
  stars_count: number;
  year_contributions_count: number;
  updated_at: string;
}

export interface GetProfilesResponse {
  data: ProfileResponse[];
  meta: PaginationSchema;
}

export async function getProfiles() {
  const { data } = await api.get<GetProfilesResponse>("/profiles");
  return data;
}
