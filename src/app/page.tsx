import type { Metadata } from "next";
import Image from "next/image";
import { Hero } from "@/components/hero";
import { LiveTokenMarket } from "@/components/live-token-market";
import { siteName } from "@/data/navigation";

export const metadata: Metadata = {
  title: siteName,
  description:
    "AIR FORCE STRIKE is a premium futuristic air combat game focused on skill, speed, and aircraft progression.",
};

export default function HomePage() {
  return (
    <div className="relative isolate overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[980px] overflow-hidden"
      >
        <Image
          src="/images/home-hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_24%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,4,5,0.12)_0%,rgba(4,4,5,0.45)_42%,rgba(4,4,5,0.88)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,186,64,0.22),transparent_30%),radial-gradient(circle_at_75%_18%,rgba(255,93,93,0.12),transparent_24%)]" />
      </div>

      <div className="relative z-10 space-y-20 pb-20">
        <Hero
          title={
            <>
              <span className="block bg-gradient-to-b from-slate-100 via-slate-300 to-slate-500 bg-clip-text text-transparent sm:inline">
                AIR FORCE
              </span>{" "}
              <span className="block bg-gradient-to-b from-red-200 via-red-500 to-red-900 bg-clip-text text-transparent sm:inline">
                STRIKE
              </span>
            </>
          }
          description="A premium air combat experience built around skill, speed, aircraft progression, and rewards."
        />

        <LiveTokenMarket />
      </div>
    </div>
  );
}
