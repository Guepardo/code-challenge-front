import { api } from "@/lib/axios";

export async function creteProfileSync(id: string) {
  const { data } = await api.post(`/profiles/${id}/sync`);
  return data;
}
