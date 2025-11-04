import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const shoes = [
  {
    name: 'Velocity Pro 100',
    tag: 'Sprints 60–400m',
    price: 149,
    img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600&auto=format&fit=crop',
    gradient: 'from-fuchsia-500 to-amber-400',
  },
  {
    name: 'AeroFly Distance',
    tag: 'Distance 1500–10k',
    price: 169,
    img: 'https://images.unsplash.com/photo-1528701800489-20be3c2ea4f1?q=80&w=1600&auto=format&fit=crop',
    gradient: 'from-sky-500 to-cyan-400',
  },
  {
    name: 'LiftOff Jumps',
    tag: 'Long/Triple Jump',
    price: 159,
    img: 'https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=1600&auto=format&fit=crop',
    gradient: 'from-rose-500 to-pink-400',
  },
  {
    name: 'GripForge Throws',
    tag: 'Shot/Discus',
    price: 139,
    img: 'https://images.unsplash.com/photo-1556909114-89f63c2a5200?q=80&w=1600&auto=format&fit=crop',
    gradient: 'from-lime-500 to-emerald-400',
  },
];

const Card = ({ item }) => {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [8, -8]);
  const rotateY = useTransform(x, [-50, 50], [-8, 8]);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set(dx / 4);
    y.set(dy / 4);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY }}
      className="group relative h-96 w-72 shrink-0 snap-center overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-4 text-white backdrop-blur-xl"
    >
      <div className={`absolute inset-0 -z-0 bg-gradient-to-br ${item.gradient} opacity-20 transition-opacity group-hover:opacity-30`} />
      <img
        src={item.img}
        alt={item.name}
        className="absolute -right-8 top-6 z-10 w-80 rotate-12 rounded-xl object-cover shadow-2xl transition-transform duration-300 group-hover:scale-105"
      />
      <div className="relative z-20 flex h-full flex-col justify-between">
        <div>
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-widest">{item.tag}</span>
          <h3 className="mt-3 text-2xl font-black">{item.name}</h3>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-lg font-semibold">${item.price}</div>
          <button className="rounded-full bg-white px-4 py-2 font-semibold text-black transition hover:shadow-[0_0_25px_rgba(255,255,255,0.35)]">
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const SpikeCarousel = () => {
  return (
    <section id="shop" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Shop The Lineup</h2>
            <p className="mt-2 text-white/70">Engineered for every event. Tuned for speed.</p>
          </div>
          <a href="#" className="hidden rounded-full border border-white/20 px-4 py-2 text-sm hover:bg-white/10 sm:inline-block">
            View all
          </a>
        </div>

        <div className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6">
          {shoes.map((s) => (
            <Card key={s.name} item={s} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpikeCarousel;
