import Script from "next/script";
import { siteConfig } from "@/config/site.config";
import { Button } from "@/components/ui/Button";

/**
 * Givebutter embed. Configure `siteConfig.givebutter` (scriptSrc + widgetId).
 * Until both are set, a plain button pointing at the campaign URL is shown.
 */
export function GivebutterWidget({ className }: { className?: string }) {
  const { scriptSrc, widgetId, campaignUrl } = siteConfig.givebutter;
  const configured = Boolean(scriptSrc && widgetId);

  if (!configured) {
    return (
      <div className={className}>
        <div className="rule pt-4">
          <p className="label text-gold">Give</p>
          <p className="font-display mt-6 text-2xl">Give securely through Givebutter.</p>
          <p className="text-bone/70 mt-4 max-w-md">
            One-time or monthly. Tax-deductible. Every dollar goes toward the next
            glow-up.
          </p>
          <div className="mt-8">
            <Button href={campaignUrl} external>
              Sponsor on Givebutter
            </Button>
          </div>
          <p className="text-bone/40 mt-6 text-xs">
            Site admin: paste your Givebutter embed details into{" "}
            <code className="text-bone/60">site.config.ts</code> to show the widget
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
      <p className="text-bone/50 mt-4 text-xs">
        Widget not loading?{" "}
        <a
          href={campaignUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-bone/80 hover:text-gold"
        >
          Give on Givebutter
        </a>
        .
      </p>
    </div>
  );
}
