import { ConsentManager } from "./ConsentManager";
import { HomePage } from "./HomePage";
import { ThemeProvider } from "./ThemeProvider";
import { ThemeToggle } from "./ThemeToggle";

/**
 * Main App component that wraps the entire React application
 * This ensures ConsentManager and HomePage are in the same React tree
 */
export function App() {
  return (
    <ThemeProvider>
      <ConsentManager>
        <ThemeToggle />
        <HomePage />
      </ConsentManager>
    </ThemeProvider>
  );
}
