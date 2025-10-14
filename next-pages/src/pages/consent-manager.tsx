import type { ReactNode } from "react";
import {
  ConsentManagerDialog,
  ConsentManagerProvider,
  CookieBanner
} from "@c15t/nextjs/pages";
// For client-only apps (non-SSR), you can use:
// import { ConsentManagerProvider } from '@c15t/nextjs/client';
import { gtag } from "@c15t/scripts/google-tag";

/**
 * Consent management wrapper for Next.js Pages Router
 *
 * This component wraps your app with consent management functionality,
 * including the cookie banner, consent dialog, and provider.
 *
 * @param props - Component properties
 * @param props.children - Child components to render within the consent manager context
 * @param props.initialData - Initial consent data from server-side props (optional)
 *
 * @returns The consent manager provider with banner and dialog
 *
 * @remarks
 * To get initial server-side data on other pages, use:
 * ```tsx
 * import { withInitialC15TData } from '@c15t/nextjs/pages';
 *
 * export const getServerSideProps = withInitialC15TData('/api/c15t');
 * ```
 *
 * @example
 * ```tsx
 * // In your pages/_app.tsx
 * import { ConsentManager } from './consent-manager';
 *
 * export default function MyApp({ Component, pageProps }) {
 *   return (
 *     <ConsentManager initialData={pageProps.initialC15TData}>
 *       <Component {...pageProps} />
 *     </ConsentManager>
 *   );
 * }
 * ```
 */
export function ConsentManager({
  children,
  initialData
}: {
  children: ReactNode;
  initialData?: any;
}) {
  return (
    <ConsentManagerProvider
      initialData={initialData}
      options={{
        mode: "c15t",
        backendURL: "/api/c15t",
        // ignoreGeoLocation: true // Useful for development to always view the banner.
        scripts: [
          // Premade Google Tag script which you can use to load Google Analytics, Google Ads etc.
          gtag({
            id: "G-TFNB629WV6",
            category: "measurement"
          })
        ],
        callbacks: {
          onBannerFetched(response) {
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
