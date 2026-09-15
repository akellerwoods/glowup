import Script from "next/script";
import { siteConfig } from "@/config/site.config";
import { Button } from "@/components/ui/Button";

/**
 * Givebutter embed. Configure `siteConfig.givebutter` (scriptSrc + widgetId).
 * Until both are set, a plain donate button pointing at the campaign URL is shown.
 */
export function GivebutterWidget({ className }: { className?: string }) {
  const { scriptSrc, widgetId, campaignUrl } = siteConfig.givebutter;
  const configured = Boolean(scriptSrc && widgetId);

  if (!configured) {
    return (
      <div className={className}>
        <div className="border-gold/40 bg-surface flex flex-col items-start gap-5 border p-8 sm:p-10">
          <p className="eyebrow">Givebutter</p>
          <p className="font-display text-2xl text-balance sm:text-3xl">
            Give securely through Givebutter.
          </p>
          <p className="max-w-md text-sm text-white/70">
            One-time or monthly. Tax-deductible. Every dollar goes toward the next
            glow-up.
          </p>
          <Button href={campaignUrl} external size="lg">
            Donate on Givebutter
          </Button>
          <p className="text-xs text-white/40">
            Site admin: paste your Givebutter embed details into{" "}
            <code className="text-white/60">site.config.ts</code> to show the widget
            inline.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <Script src={scriptSrc} strategy="lazyOnload" />
      <div className="bg-white p-2 text-black">
        <givebutter-widget id={widgetId} />
      </div>
      <p className="mt-4 text-xs text-white/50">
        Widget not loading?{" "}
        <a
          href={campaignUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline text-white/80"
        >
          Give on Givebutter
        </a>
        .
      </p>
    </div>
  );
}
