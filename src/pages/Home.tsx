import Hero from "../components/Hero";
import Services from "../components/Services";
import Collections from "../components/Collections";
import HowItWorks from "../components/HowItWorks";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import AppDownload from "../components/AppDownload";
import Footer from "../components/Footer";
import { FadeIn } from "../components/ui/fade-in";

export default function Home() {
    return (
        <main>
            <Hero />

            <FadeIn>
                <Services />
            </FadeIn>

            <FadeIn>
                <Collections />
            </FadeIn>

            <FadeIn>
                <HowItWorks />
            </FadeIn>

            <Stats />

            <FadeIn>
                <Testimonials />
            </FadeIn>

            {/* Quiet Luxury Partner/Rider Section */}
            <section className="py-0 bg-white">
                <div className="flex flex-col lg:flex-row border-y border-gray-200/50">

                    {/* Merchant Canvas */}
                    <div className="flex-1 p-20 lg:p-32 border-b lg:border-b-0 lg:border-r border-gray-200/50 group relative overflow-hidden">
                        <div className="relative z-10 transition-transform duration-700 group-hover:-translate-y-2">
                            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-gray-400 mb-12 block">Merchant Collective</span>
                            <h2 className="text-5xl font-heading font-light text-gray-900 mb-10 leading-[1.1] tracking-tight">
                                Elevate Your <br />
                                Fine Selection.
                            </h2>
                            <p className="text-lg text-gray-500 font-light max-w-sm mb-16 leading-relaxed">
                                Join our network of intentional partners and scale your presence with absolute precision.
                            </p>
                            <a href="#" className="inline-block text-[10px] font-bold uppercase tracking-[0.3em] text-gray-900 border-b border-gray-900 pb-2 hover:text-gray-400 hover:border-gray-400 transition-colors">
                                Apply to Partner
                            </a>
                        </div>
                        {/* Faint Texture */}
                        <div className="absolute inset-0 opacity-[0.03] grayscale pointer-events-none group-hover:opacity-[0.08] transition-opacity duration-1000">
                            <img src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1000" alt="" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* Rider Canvas */}
                    <div className="flex-1 p-20 lg:p-32 group relative overflow-hidden">
                        <div className="relative z-10 transition-transform duration-700 group-hover:-translate-y-2">
                            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-gray-400 mb-12 block">Courier Fleet</span>
                            <h2 className="text-5xl font-heading font-light text-gray-900 mb-10 leading-[1.1] tracking-tight">
                                Sovereignty in <br />
                                Every Journey.
                            </h2>
                            <p className="text-lg text-gray-500 font-light max-w-sm mb-16 leading-relaxed">
                                Curate your own time and experience the pinnacle of professional flexible earnings.
                            </p>
                            <a href="#" className="inline-block text-[10px] font-bold uppercase tracking-[0.3em] text-gray-900 border-b border-gray-900 pb-2 hover:text-gray-400 hover:border-gray-400 transition-colors">
                                Join the Fleet
                            </a>
                        </div>
                        {/* Faint Texture */}
                        <div className="absolute inset-0 opacity-[0.03] grayscale pointer-events-none group-hover:opacity-[0.08] transition-opacity duration-1000">
                            <img src="https://images.unsplash.com/photo-1526367790999-0150786686a2?q=80&w=1000" alt="" className="w-full h-full object-cover" />
                        </div>
                    </div>

                </div>
            </section>

            <AppDownload />

            <Footer />
        </main>
    )
}
