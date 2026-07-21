"use client";

import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    twttr?: {
      widgets?: {
        load?: (element?: HTMLElement | null) => void;
      };
    };
  }
}

export function TwitterTimeline() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.twttr?.widgets?.load) {
      window.twttr.widgets.load();
    }
  }, []);

  return (
    <>
      <a
        className="twitter-timeline"
        data-theme="dark"
        data-height="600"
        data-chrome="noheader nofooter noborders transparent"
        href="https://twitter.com/PublicIntelTech"
      >
        Tweets by PublicIntelTech
      </a>
      <Script
        src="https://platform.twitter.com/widgets.js"
        strategy="lazyOnload"
        onLoad={() => {
          if (typeof window !== "undefined" && window.twttr?.widgets?.load) {
            window.twttr.widgets.load();
          }
        }}
      />
    </>
  );
}
