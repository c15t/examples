import type { ReactNode } from "react";
import {
  ConsentManagerDialog,
  ConsentManagerProvider,
  CookieBanner
} from "@c15t/react";
import { gtag } from "@c15t/scripts/google-tag";

/**
 * Consent management wrapper for Vite + React
 *
 * This component provides consent management using @c15t/react.
 *
 * @param props - Component properties
 * @param props.children - Child components to render within the consent manager context
 *
 * @returns The consent manager provider with banner, dialog, and children
 *
 *
 * @example
 * ```tsx
 * // In your app
 * import { ConsentManager } from './components/ConsentManager';
 *
 * <ConsentManager>
 *   <YourComponent />
 * </ConsentManager>
 * ```
 */
export function ConsentManager({ children }: { children: ReactNode }) {
  return (
    <ConsentManagerProvider
      options={{
        mode: "c15t",
        backendURL: "https://consent-io-europe-c15t-examples.c15t.dev",
        // ignoreGeoLocation: true, // Useful for development to always view the banner.
        scripts: [
          // Premade Google Tag script which you can use to load Google Analytics, Google Ads etc.
          gtag({
            id: "G-TFNB629WV6",
            category: "measurement"
          })
        ],
        callbacks: {
          onBannerFetched(response: any) {
            console.log("onBannerFetched", response);
          },
          onConsentSet(response) {
            console.log("onConsentSet", response);

            // This simulates a heavy operation that could block the click INP
            const start = performance.now();
            const end = start + 500;
            while (performance.now() < end) {
              // Intentional empty block for simulation
            }
            console.log("heavy onConsentSet callback finished");
          },
          onError(response) {
            console.log("onError", response);
          }
        }
      }}
    >
      <CookieBanner />
      <ConsentManagerDialog />
      {children}
    </ConsentManagerProvider>
  );
}
