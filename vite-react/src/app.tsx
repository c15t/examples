import { ConsentManager } from "./components/ConsentManager";
import { HomePage } from "./components/HomePage";
import { ThemeProvider } from "./components/ThemeProvider";
import { ThemeToggle } from "./components/ThemeToggle";

function App() {
  return (
    <ThemeProvider>
      <ConsentManager>
        <ThemeToggle />
        <HomePage />
      </ConsentManager>
    </ThemeProvider>
  );
}

export default App;
