import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/6f6f06d8-a244-4110-92b4-5a99574e1624/files/5bcf4adb-59e3-48a0-b886-22a9f18e0faa.jpg"
          alt="Lunex fashion brand hero"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          LUNEX
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto px-6 opacity-90">
          Одежда, созданная для тех, кто живёт в своём ритме
        </p>
        <button className="mt-8 border border-white text-white px-8 py-3 uppercase text-sm tracking-widest hover:bg-white hover:text-black transition-all duration-300">
          Смотреть коллекцию
        </button>
      </div>
    </div>
  );
}