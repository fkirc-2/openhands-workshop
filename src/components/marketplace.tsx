import type { Miniapp } from "@/data/miniapps";
import { MiniappCard } from "./miniapp-card";

interface MarketplaceProps {
  apps: Miniapp[];
}

export function Marketplace({ apps }: MarketplaceProps) {
  return (
    <section id="marketplace" className="mx-auto w-full max-w-6xl px-4 pb-20 sm:px-6">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {apps.map((app) => (
          <MiniappCard key={app.id} app={app} />
        ))}
      </div>
    </section>
  );
}
