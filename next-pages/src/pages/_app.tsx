/**
 * Note: To get the initial server-side data on other pages, add this to each page:
 *
 * import { withInitialC15TData } from '@c15t/nextjs/pages';
 *
 * export const getServerSideProps = withInitialC15TData('/api/c15t');
 *
 * This will automatically pass initialC15TData to pageProps.initialC15TData
 */

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ConsentManager } from "./consent-manager";
import { ThemeProvider } from "next-themes";
import { ThemeToggle } from "./theme-toggle";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <ConsentManager initialData={pageProps.initialC15TData}>
        <ThemeToggle />
        <Component {...pageProps} />
      </ConsentManager>
    </ThemeProvider>
  );
}
