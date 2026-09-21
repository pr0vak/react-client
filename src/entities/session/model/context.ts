import { createContext } from "react";
import type { Session } from "../types";

interface SessionContextValue {
  session: Session | null;
  signIn: (next: Session) => void;
  signOut: () => void;
}

export const SessionContext = createContext<SessionContextValue | null>(null);
