import { useSession, type Session } from "@/entities/session";
import { fetchMe } from "@/entities/session/api/me";
import { useMutation } from "@tanstack/react-query";
import { login as loginApi, type LoginPaylod } from "../api/login";

export function useLogin() {
  const { signIn } = useSession();

  return useMutation({
    // если будет ошибка, попробовать в тип ответа добавить null
    // или убрать тип ответа
    mutationFn: async (payload: LoginPaylod): Promise<Session>  => {
      const tokenResponse = await loginApi(payload);
      const user = await fetchMe(tokenResponse.access_token);
      const session = { token: tokenResponse.access_token, user } as Session;
      signIn(session);
      return session;
    }
  })
}
