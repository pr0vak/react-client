import { AppRouter } from "@/app/providers/router";
import { QueryProvider } from "./app/providers/query";

function App() {
  return (
    <QueryProvider>
      <AppRouter />
    </QueryProvider>
	);
}

export default App
