import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

/**
 * WELCOME SCREEN
 * Redesigned for maximum "wow". 
 * - Branding: Muncheez. (Blue Dot)
 * - Motion: Staggered reveal + cinematic grain.
 */
interface WelcomeScreenProps {
    onComplete: () => void;
}

export default function WelcomeScreen({ onComplete }: WelcomeScreenProps) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 800);
        }, 3500);

        return () => clearTimeout(timer);
    }, [onComplete]);

    const EASE = [0.16, 1, 0.3, 1] as const;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center overflow-hidden h-screen supports-[height:100dvh]:h-[100dvh]"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.05, filter: "blur(20px)", transition: { duration: 0.8, ease: EASE } }}
                >
                    <div className="relative z-10 flex flex-col items-center justify-center">
                        <div className="overflow-hidden flex items-baseline">
                            <motion.span
                                initial={{ y: 100 }}
                                animate={{ y: 0 }}
                                transition={{ duration: 1, ease: EASE, delay: 0.2 }}
                                className="text-5xl md:text-8xl font-heading font-extrabold tracking-tighter text-white"
                            >
                                Muncheez
                            </motion.span>
                            <motion.span
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1], delay: 0.8 }}
                                className="text-5xl md:text-8xl font-heading font-extrabold tracking-tighter text-[#4A90E2]"
                            >
                                .
                            </motion.span>
                        </div>

                        <div className="overflow-hidden mt-2">
                            <motion.p
                                initial={{ y: "100%", opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1, ease: EASE, delay: 1 }}
                                className="text-xs md:text-sm font-bold uppercase tracking-[0.5em] text-white/50"
                            >
                                The 254 Selection
                            </motion.p>
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 3.5, ease: "easeInOut" }}
                        className="absolute bottom-0 left-0 w-full h-[2px] bg-[#4A90E2] origin-left"
                    />

                    {/* Texture */}
                    <div className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
