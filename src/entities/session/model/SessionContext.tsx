import { setTokenGetter } from "@/shared/api";
import { useCallback, useEffect, useState, type ReactNode } from "react";
import { setUnauthorizedHandler } from "../../../shared/api/unauthorized";
import { clearSession, loadSession, saveSession } from "../lib/storage";
import type { Session } from "../types";
import { SessionContext } from "./context";

interface ProviderProps {
  children: ReactNode;
}

export function SessionProvider({ children }: ProviderProps) {
  const [session, setSession] = useState<Session | null>(() => loadSession());

  const signIn = useCallback((next: Session) => {
    saveSession(next);
    setSession(next);
  }, []);

  const signOut = useCallback(() => {
    clearSession();
    setSession(null);
  }, []);

  useEffect(() => {
    setTokenGetter (() => loadSession()?.token ?? null);
    setUnauthorizedHandler(() => {
      clearSession();
      setSession(null);

      if (window.location.pathname !== "/login") {
        window.location.href = "/login";
      }
    });
  }, []);

  return (
    <SessionContext.Provider value={{ session, signIn, signOut }}>
      {children}
    </SessionContext.Provider>
  )
}
