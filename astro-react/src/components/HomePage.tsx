"use client";

import { Frame, useConsentManager } from "@c15t/react";
import { RiFileLine, RiGlobalLine, RiWindowLine } from "@remixicon/react";
import { useTheme } from "./ThemeProvider";

const BUTTON_STYLE =
  "border border-neutral rounded-md px-4 py-2 hover:border-none hover:bg-neutral/10";

export function HomePage() {
  const { theme } = useTheme();
  const { setShowPopup, setIsPrivacyDialogOpen, consents, locationInfo } =
    useConsentManager();

  return (
    <div className="mx-4 mt-2 grid min-h-screen grid-cols-1 gap-8 md:mx-0 md:mt-16 md:grid-cols-7">
      <main className="flex flex-col gap-4 md:col-start-2 md:col-end-5">
        {theme === "light" ? (
          <img
            src="/c15t-banner-light.svg"
            alt="c15t banner"
            className="w-full"
            width={568}
            height={120}
          />
        ) : (
          <img
            src="/c15t-banner-dark.svg"
            alt="c15t banner"
            className="w-full"
            width={568}
            height={120}
          />
        )}

        <div className="grid grid-cols-2 gap-2 md:gap-4 lg:grid-cols-3">
          <button
            type="button"
            className={BUTTON_STYLE}
            onClick={() => setShowPopup(true, true)}
          >
            Open Cookie Banner
          </button>
          <button
            type="button"
            className={BUTTON_STYLE}
            onClick={() => setIsPrivacyDialogOpen(true)}
          >
            Open Consent Dialog
          </button>
        </div>

        <Frame category="marketing" className="aspect-video w-full">
          <iframe
            title="Cool Duck Video"
            src="https://www.youtube.com/embed/mQJ6q1ZCzsg"
            width="100%"
            height="100%"
          />
        </Frame>
      </main>

      <aside className="flex w-full flex-col gap-4 md:col-span-2">
        <div className="space-y-2 rounded-[1.25rem] border border-neutral p-4">
          <h2 className="font-medium text-base">Current Consent: </h2>
          <pre className="font-light text-sm">
            {JSON.stringify(consents, null, 2)
              .split("\n")
              .map((line, i) => (
                <div
                  key={i}
                  style={{
                    color: line.includes("true")
                      ? "#22c55e"
                      : line.includes("false")
                      ? "#ef4444"
                      : "inherit"
                  }}
                >
                  {line}
                </div>
              ))}
          </pre>
        </div>

        <div className="space-y-2 rounded-[1.25rem] border border-neutral p-4">
          <h2 className="font-medium text-base">Location Info: </h2>
          <pre className="text-wrap font-light text-sm">
            {JSON.stringify(locationInfo, null, 2)
              .split("\n")
              .map((line, i) => (
                <div
                  key={i}
                  style={{
                    color: line.includes("true")
                      ? "#22c55e"
                      : line.includes("false")
                      ? "#ef4444"
                      : "inherit"
                  }}
                >
                  {line}
                </div>
              ))}
          </pre>
        </div>

        <footer className="flex flex-wrap items-center justify-center gap-[24px]">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://c15t.com/docs/frameworks/react/quickstart?utm_source=astro-react-example&utm_medium=referral&utm_campaign=view-docs&utm_content=docs-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiFileLine size={16} />
            Docs
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://github.com/c15t/examples/tree/main?utm_source=astro-react-example&utm_medium=referral&utm_campaign=view-on-github&utm_content="
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiWindowLine size={16} />
            Examples
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://consent.io?utm_source=astro-react-example&utm_medium=referral&utm_campaign=visit-hosted&utm_content=hosted-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiGlobalLine size={16} />
            Hosted c15t
          </a>
        </footer>
      </aside>
    </div>
  );
}
