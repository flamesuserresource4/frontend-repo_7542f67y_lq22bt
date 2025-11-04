import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/2hQdDqH0a8X0eQ3P/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays that don't block Spline interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/90" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/80 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start px-6 pt-28 pb-16 sm:px-8 md:pt-36">
        <motion.span
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs uppercase tracking-widest backdrop-blur"
        >
          New Drop — Carbon Plate Series
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl font-extrabold leading-tight sm:text-6xl md:text-7xl"
        >
          Own The Track
          <br />
          <span className="bg-gradient-to-r from-fuchsia-400 via-rose-400 to-amber-300 bg-clip-text text-transparent">
            With Elite Spikes
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-5 max-w-xl text-white/80 md:text-lg"
        >
          Super-light uppers, explosive plates, and traction tuned for PRs. Built for 60m bursts to 10k grit.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <a
            href="#shop"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:shadow-[0_0_30px_rgba(255,255,255,0.35)]"
          >
            Shop Spikes
            <span className="ml-2 inline-block transition-transform group-hover:translate-x-0.5">→</span>
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/20"
          >
            Explore Tech
          </a>
        </motion.div>

        {/* Metrics */}
        <div className="mt-10 grid grid-cols-3 gap-6 text-center sm:max-w-md">
          {[{ k: 'Weight', v: '119g' }, { k: 'Plate', v: 'Full Carbon' }, { k: 'Traction', v: '7-pin' }].map((item) => (
            <div key={item.k} className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <div className="text-sm text-white/60">{item.k}</div>
              <div className="text-xl font-bold">{item.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
