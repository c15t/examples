"use client";

import type { ReactNode } from "react";

import { ClientSideOptionsProvider } from "@c15t/nextjs/client";
import { gtag } from "@c15t/scripts/google-tag";
/**
 * Client-side consent manager wrapper for handling scripts and callbacks
 *
 * This component is rendered on the client and provides the ability to:
 * - Load integration scripts (Google Tag Manager, Meta Pixel, TikTok Pixel, etc.)
 * - Handle client-side callbacks (onConsentSet, onError, onBannerFetched)
 * - Manage script lifecycle (onLoad, onDelete)
 *
 * @param props - Component properties
 * @param props.children - Child components to render within the client-side context
 *
 * @returns The client-side options provider with children
 *
 * @see https://c15t.com/docs/frameworks/next/callbacks
 * @see https://c15t.com/docs/frameworks/next/script-loader
 */
export function ConsentManagerClient({ children }: { children: ReactNode }) {
  return (
    <ClientSideOptionsProvider
      scripts={[
        // Premade Google Tag script which you can use to load Google Analytics, Google Ads etc.
        gtag({
          id: "G-TFNB629WV6",
          category: "measurement"
        })
      ]}
      callbacks={{
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
      }}
    >
      {children}
    </ClientSideOptionsProvider>
  );
}
