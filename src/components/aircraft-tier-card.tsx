import type { AircraftTier } from "@/data/aircraft";

type AircraftTierCardProps = {
  tier: AircraftTier;
};

export function AircraftTierCard({ tier }: AircraftTierCardProps) {
  const videoSources = tier.videoSources?.length ? tier.videoSources : [tier.videoSrc];
  const totalSlots = 4;

  return (
    <article className="group rounded-[1.6rem] border border-gold/20 bg-[linear-gradient(180deg,rgba(18,18,20,0.98),rgba(8,8,10,0.98))] p-6 shadow-[0_0_0_1px_rgba(212,175,55,0.05)] transition duration-300 hover:-translate-y-1 hover:border-gold/40">
      <div className="rounded-[1.4rem] border border-gold/15 bg-black/50 p-3">
        <div className="grid grid-cols-2 gap-3">
          {Array.from({ length: totalSlots }).map((_, index) => {
            const src = videoSources[index];

            if (!src) {
              return (
                <div
                  key={`${tier.name}-empty-${index}`}
                  className="relative flex h-28 items-center justify-center overflow-hidden rounded-[1.1rem] border border-dashed border-gold/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(0,0,0,0.35))] text-center sm:h-32"
                >
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gold/60">
                      Slot {index + 1}
                    </p>
                    <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-foreground-soft">
                      Clip pending
                    </p>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={`${tier.name}-${src}-${index}`}
                className="relative overflow-hidden rounded-[1.1rem] border border-gold/15 bg-black/60"
              >
                <video
                  className="h-28 w-full object-cover sm:h-32"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  src={src}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,4,6,0.05),rgba(4,4,6,0.5)_72%,rgba(4,4,6,0.86))]" />
                <div className="absolute left-3 top-3 rounded-full border border-gold/25 bg-black/65 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.26em] text-gold">
                  Clip {index + 1}
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-3 flex items-center justify-between gap-3 border-t border-gold/10 pt-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold/80">
              Tier media
            </p>
            <p className="mt-1 text-sm font-semibold uppercase tracking-[0.16em] text-silver">
              {tier.name}
            </p>
          </div>
          <div className="rounded-full border border-strike/25 bg-strike/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-strike">
            {videoSources.length}/{totalSlots} Ready
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold/85">
          Aircraft Tier
        </p>
        <p className="rounded-full border border-gold/25 bg-gold/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">
          {tier.name}
        </p>
      </div>
      <h3 className="mt-4 font-display text-2xl font-semibold tracking-[0.08em] text-silver">
        {tier.name}
      </h3>
      <p className="mt-3 text-sm leading-7 text-foreground-soft sm:text-base">
        {tier.description}
      </p>
      <dl className="mt-5 grid gap-3 text-sm">
        <div className="rounded-2xl border border-gold/15 bg-white/[0.03] px-4 py-3">
          <dt className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold/70">
            Combat value
          </dt>
          <dd className="mt-1 text-foreground">{tier.combatValue}</dd>
        </div>
        <div className="rounded-2xl border border-gold/15 bg-white/[0.03] px-4 py-3">
          <dt className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold/70">
            Progression note
          </dt>
          <dd className="mt-1 text-foreground">{tier.progressionNote}</dd>
        </div>
      </dl>
      <div className="mt-5 rounded-2xl border border-strike/25 bg-strike/10 px-4 py-3 text-sm leading-7 text-foreground">
        {tier.playerValue}
      </div>
    </article>
  );
}
