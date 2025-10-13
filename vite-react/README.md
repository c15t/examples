# c15t + Vite + React Example

This example demonstrates how to integrate c15t consent management with a Vite + React project.

## Getting Started

1. Install dependencies:

```bash
pnpm install
```

2. Run the development server:

```bash
pnpm dev
```

3. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

- `src/components/ConsentManager.tsx` - Main consent manager component with configuration
- `src/components/HomePage.tsx` - Example page showing consent manager features
- `src/components/ThemeProvider.tsx` - Theme management provider for light/dark mode
- `src/components/ThemeToggle.tsx` - Theme toggle button component
- `src/app.tsx` - Main application component
- `src/app.css` - Tailwind CSS styles and theme variables

## Key Features

- **Cookie Banner** - Automatically displays based on user's location and consent status
- **Consent Dialog** - Privacy settings dialog for managing consent preferences
- **Script Management** - Example Google Tag integration with consent categories
- **Callbacks** - Examples of `onBannerFetched`, `onConsentSet`, and `onError` callbacks
- **Frame Component** - Content blocking based on consent (see YouTube iframe example)
- **Consent State** - Real-time display of current consent and location information
- **Theme Toggle** - Light/dark mode toggle with localStorage persistence

## How It Works

`@c15t/react` handles both server and client functionality in a single provider. The `ConsentManagerProvider` accepts:

- `options` - Configuration (mode, backendURL, etc.)
- `scripts` - Array of scripts to load based on consent
- `callbacks` - Client-side callbacks for events

### Adding Client-Side Options

All client-side options (scripts, callbacks) are passed directly to the `ConsentManagerProvider` in `src/components/ConsentManager.tsx`:

```tsx
<ConsentManagerProvider
  options={{
    mode: "c15t",
    backendURL: "https://consent-io-europe-c15t-examples.c15t.dev"
  }}
  scripts={[
    gtag({
      id: "G-TFNB629WV6",
      category: "measurement"
    })
  ]}
  callbacks={{
    onBannerFetched(response) {
      console.log("onBannerFetched", response);
    },
    onConsentSet(response) {
      console.log("onConsentSet", response);
    },
    onError(response) {
      console.log("onError", response);
    }
  }}
>
  {/* ... */}
</ConsentManagerProvider>
```

## Learn More

- [c15t Documentation](https://c15t.com/docs/frameworks/react/quickstart)
- [Vite Documentation](https://vite.dev)
- [View on GitHub](https://github.com/c15t/examples)
