import { api } from "@/lib/axios";
import { PaginationSchema } from "./types/pagination";
import { NewProfileSchemaType } from "@/schemas/profile-schema";

export interface ProfileResponse {
  id: string;
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
  sync_status: string;
  nanoid: string;
}

export interface GetProfilesResponse {
  data: ProfileResponse[];
  meta: PaginationSchema;
}

export async function getProfiles({
  term,
  page,
}: {
  term: string;
  page: string;
}) {
  const { data } = await api.get<GetProfilesResponse>("/profiles", {
    params: { term, page },
  });
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

export async function deleteProfile(id: string) {
  const { data } = await api.delete(`/profiles/${id}`);
  return data;
}
