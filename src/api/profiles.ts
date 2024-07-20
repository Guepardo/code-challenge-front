import { api } from "@/lib/axios";
import { PaginationSchema } from "./types/pagination";
import { NewProfileSchemaType } from "@/schemas/profile-schema";

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

export async function createProfile({
  username,
  profile_url,
}: NewProfileSchemaType) {
  const { data } = await api.post<ProfileResponse>("/profiles", {
    username,
    profile_url,
  });
  return data;
}

export async function updateProfile(
  id: string,
  { username, profile_url }: NewProfileSchemaType
) {
  const { data } = await api.put(`/profiles/${id}`, {
    username,
    profile_url,
  });
  return data;
}
