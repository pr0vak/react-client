import { useCallback, useState, type ReactNode } from "react";
import { clearSession, loadSession, saveSession } from "../lib/storage";
import type { Session } from "../types";
import { SessionContext } from "./context";

interface ProviderProps {
  children: ReactNode;
}

export function SessionProvider({ children }: ProviderProps) {
  const [session, setSession] = useState<Session | null>(loadSession());

  const signIn = useCallback((next: Session) => {
    saveSession(next);
    setSession(next);
  }, []);

  const signOut = useCallback(() => {
    clearSession();
    setSession(null);
  }, []);

  return (
    <SessionContext.Provider value={{ session, signIn, signOut }}>
      {children}
    </SessionContext.Provider>
  )
}
