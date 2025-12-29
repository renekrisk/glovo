import { motion, useScroll, useTransform } from 'framer-motion';
import { Search } from 'lucide-react';
import { useRef } from 'react';

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [0.1, 0]);

    const title = "Munchezz Selection.";
    const words = title.split(" ");

    return (
        <section ref={ref} className="relative h-screen min-h-[700px] flex items-center justify-center bg-[#4A90E2] overflow-hidden">

            {/* Cinematic Parallax & Zoom Background */}
            <motion.div
                style={{ y, opacity }}
                initial={{ scale: 1.15 }}
                animate={{ scale: 1.05 }}
                transition={{ duration: 30, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
                className="absolute inset-0 pointer-events-none"
            >
                <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay grayscale">
                    <img
                        src="file:///C:/Users/User/.gemini/antigravity/brain/a9883f27-a6a0-4f9b-b6c2-e99ee887978b/munchezz_hero_cinematic_1767003484933.png"
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>
            </motion.div>

            <div className="container relative z-10 px-8 text-center">
                <div className="max-w-5xl mx-auto">

                    {/* Main Heading - The Statement */}
                    <div className="overflow-hidden mb-12">
                        <motion.h1 className="text-[12vw] md:text-[10vw] font-heading font-light tracking-[-0.05em] text-white leading-[0.8] mb-0 flex flex-wrap justify-center gap-[0.2em]">
                            {words.map((word, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ y: "100%" }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 1.2, delay: 0.2 + (i * 0.15), ease: [0.16, 1, 0.3, 1] }}
                                    className="inline-block"
                                >
                                    {word}
                                </motion.span>
                            ))}
                        </motion.h1>
                    </div>

                    {/* Subheading */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
                        className="text-lg md:text-xl text-white font-light tracking-[0.1em] mb-20 max-w-2xl mx-auto lowercase"
                    >
                        bridging the gap between premier kitchens, local boutiques, and your doorstep.
                    </motion.p>

                    {/* Minimalist Address Trigger */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
                        className="relative max-w-md mx-auto group"
                    >
                        <div className="flex items-center justify-between bg-white/5 hover:bg-white/10 backdrop-blur-3xl border border-white/10 rounded-full pl-8 pr-2 py-2 transition-all cursor-pointer group-hover:border-white/20">
                            <span className="text-white/40 font-light text-sm tracking-wide">Enter delivery address...</span>
                            <div className="bg-white text-[#4A90E2] p-3 rounded-full shadow-2xl transition-transform group-hover:scale-95">
                                <Search size={18} />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 2 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
            >
                <div className="w-[1px] h-12 bg-gradient-to-t from-white/40 to-transparent"></div>
            </motion.div>

        </section>
    );
}
