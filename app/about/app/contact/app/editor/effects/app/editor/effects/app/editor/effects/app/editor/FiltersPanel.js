"use client";

import { applyNeonEffect } from "./effects/neon";
import { applyGlitchEffect } from "./effects/glitch";
import { applyVhsEffect } from "./effects/vhs";

export default function FiltersPanel({ canvasRef }) {
  function runEffect(effect) {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    if (effect === "neon") applyNeonEffect(ctx, canvas);
    if (effect === "glitch") applyGlitchEffect(ctx, canvas);
    if (effect === "vhs") applyVhsEffect(ctx, canvas);
  }

  return (
    <div className="bg-white/10 backdrop-blur-xl p-4 rounded-xl border border-white/20 mt-4">

      <h2 className="text-xl font-semibold mb-4 text-center">Gen-Z Effects</h2>

      <div className="grid grid-cols-3 gap-3">

        <button
          onClick={() => runEffect("neon")}
          className="p-3 bg-pink-600 hover:bg-pink-700 rounded-lg text-white font-semibold"
        >
          Neon
        </button>

        <button
          onClick={() => runEffect("glitch")}
          className="p-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold"
        >
          Glitch
        </button>

        <button
          onClick={() => runEffect("vhs")}
          className="p-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-semibold"
        >
          VHS
        </button>

      </div>
    </div>
  );
}
