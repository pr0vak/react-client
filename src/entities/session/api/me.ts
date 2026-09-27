import { http } from "@/shared/api/v1";
import type { User } from "../types";

export async function fetchMe(token?: string): Promise<User> {
  const response = await http.get(
    '/users/me', 
    token ? { headers: { Authorization: `Bearer ${token}`} } : undefined
  );

  return response.data;
}
