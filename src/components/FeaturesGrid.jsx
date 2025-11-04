import React from 'react';
import { Activity, Zap, Feather, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Zap,
    title: 'Explosive Propulsion',
    desc: 'Full-length carbon plate returns energy and launches every stride.',
  },
  {
    icon: Feather,
    title: 'Featherweight Upper',
    desc: 'Mono-mesh upper breathes and locks down without weighing you down.',
  },
  {
    icon: Activity,
    title: 'Race-Tuned Traction',
    desc: '7-pin layout with micro lugs grips the curve and the finish.',
  },
  {
    icon: Trophy,
    title: 'Podium Proven',
    desc: 'Designed with feedback from national champions and coaches.',
  },
];

const FeaturesGrid = () => {
  return (
    <section id="features" className="relative w-full bg-gradient-to-b from-black to-zinc-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Tech That Wins Races</h2>
          <p className="mt-3 text-white/70">Every detail is engineered for speed, control, and comfort on the clock.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10"
            >
              <div className="mb-4 inline-flex rounded-xl bg-white/10 p-3">
                {React.createElement(f.icon, { size: 24 })}
              </div>
              <h3 className="text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-white/70">{f.desc}</p>
              <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-gradient-to-br from-fuchsia-500/30 to-amber-400/30 blur-2xl transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
