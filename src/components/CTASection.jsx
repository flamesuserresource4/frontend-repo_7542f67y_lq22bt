import React from 'react';
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section className="relative isolate overflow-hidden bg-black py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(244,114,182,0.25),transparent),radial-gradient(900px_500px_at_90%_10%,rgba(251,191,36,0.2),transparent)]" />
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-10 backdrop-blur">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h3 className="text-3xl font-bold sm:text-4xl">Ready to set a new PR?</h3>
              <p className="mt-3 text-white/70">Join thousands of athletes training and competing in our most advanced spikes yet.</p>
              <div className="mt-6 flex gap-4">
                <a href="#shop" className="rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:shadow-[0_0_25px_rgba(255,255,255,0.35)]">Shop Now</a>
                <a href="#" className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white hover:bg-white/10">Find Your Fit</a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1543970217-9f1f6c1f0baf?q=80&w=1600&auto=format&fit=crop"
                  alt="Athlete on track"
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
