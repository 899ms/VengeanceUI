"use client";

import { WaveGridBackground } from "@/components/ui/wave-grid-background";

export function WaveGridBackgroundDemo() {
  return (
    <div className="relative h-full min-h-[360px] w-full overflow-hidden rounded-lg">
      <WaveGridBackground colorBase="#202839" colorHigh="#557cff">
        <div className="pointer-events-none flex h-full w-full items-center justify-center px-5 text-center">
          <div className="max-w-md rounded-2xl border border-white/10 bg-black/45 px-6 py-5 text-white shadow-xl backdrop-blur-sm sm:px-8 sm:py-6">
            <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">Wave Grid</h2>
            <p className="mt-3 text-sm leading-6 text-white/85 sm:text-base">
              Move your cursor across the grid to send ripples through the cubes.
            </p>
          </div>
        </div>
      </WaveGridBackground>
    </div>
  );
}
