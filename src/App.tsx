import { AppRouter } from "@/app/providers/router";
import { QueryProvider } from "./app/providers/query";
import { SessionProvider } from "./entities/session";

function App() {
  return (
    <SessionProvider>
      <QueryProvider>
        <AppRouter />
      </QueryProvider>
    </SessionProvider>
	);
}

export default App
