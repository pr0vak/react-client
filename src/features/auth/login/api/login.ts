import { http } from "@/shared/api/v1";

export interface LoginPaylod {
  username: string;
  password: string;
}

export interface TokenResponse {
  access_token: string;
  token_type: string;
}

export async function login(payload: LoginPaylod): Promise<TokenResponse> {
  const form = new URLSearchParams();
  
  form.set("username", payload.username);
  form.set("password", payload.password);

  const response = await http.post<TokenResponse>('auth/login', form, {
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  })

  return response.data;
}
