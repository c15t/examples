# c15t + Astro + React Example

This example demonstrates how to integrate c15t consent management with an Astro project using React components.

## Getting Started

1. Install dependencies:

```bash
pnpm install
```

2. Run the development server:

```bash
pnpm dev
```

3. Open [http://localhost:4321](http://localhost:4321) in your browser.

## Project Structure

- `src/components/ConsentManager.tsx` - Main consent manager component with configuration
- `src/components/HomePage.tsx` - Example page showing consent manager features
- `src/layouts/Layout.astro` - Base HTML layout with Tailwind CSS
- `src/pages/index.astro` - Entry page that combines all components

## Key Features

- **Cookie Banner** - Automatically displays based on user's location and consent status
- **Consent Dialog** - Privacy settings dialog for managing consent preferences
- **Script Management** - Example Google Tag integration with consent categories
- **Callbacks** - Examples of `onBannerFetched`, `onConsentSet`, and `onError` callbacks
- **Frame Component** - Content blocking based on consent (see YouTube iframe example)
- **Consent State** - Real-time display of current consent and location information

## How It Works

Unlike Next.js which requires separate server/client components for SSR, `@c15t/react` handles both server and client functionality in a single provider. The `ConsentManagerProvider` accepts:

- `options` - Configuration (mode, backendURL, etc.)
- `scripts` - Array of scripts to load based on consent
- `callbacks` - Client-side callbacks for events

### Adding Client-Side Options

Since you mentioned that the `consent-manager.client.tsx` pattern is not needed in `@c15t/react`, all client-side options (scripts, callbacks) are passed directly to the `ConsentManagerProvider` in `src/components/ConsentManager.tsx`:

```tsx
<ConsentManagerProvider
  options={{
    mode: "c15t",
    backendURL: "https://consent.io/c15t"
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
- [Astro Documentation](https://docs.astro.build)
- [View on GitHub](https://github.com/c15t/examples)
