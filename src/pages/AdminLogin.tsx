import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AdminLogin() {
    return (
        <div className="min-h-screen bg-white flex overflow-hidden">
            {/* Left Side: Editorial Image (Desktop Only) */}
            <div className="hidden lg:block lg:w-1/2 relative bg-gray-900">
                <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
                    alt="Command Center"
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-20 left-20 z-10 max-w-lg">
                    <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#4A90E2] mb-6 block">Command Center</span>
                    <h2 className="text-6xl font-heading font-light text-white leading-[1.1] tracking-tight mb-8">
                        The <br />
                        <span className="italic opacity-50 px-2">Mission</span> <br />
                        Control.
                    </h2>
                    <p className="text-lg text-white/70 font-light leading-relaxed">
                        Precision logistics and real-time administration for Nairobi's soulful delivery network.
                    </p>
                </div>
            </div>

            {/* Right Side: Auth Form */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-12 lg:px-24 py-12 relative">
                {/* Logo & Header */}
                <div className="mb-12 relative">
                    <Link
                        to="/#contact"
                        className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#4A90E2] mb-8 hover:opacity-70 transition-all group"
                    >
                        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Selection
                    </Link>
                    <div className="flex items-center justify-between mb-8">
                        <Link to="/" className="inline-block">
                            <span className="font-heading font-bold text-3xl tracking-tighter text-gray-900">
                                Muncheez<span className="text-[#4A90E2]">.</span>
                            </span>
                        </Link>
                    </div>
                    <h1 className="text-4xl font-heading font-light text-gray-900 tracking-tight mb-3">Admin Portal.</h1>
                    <p className="text-sm text-gray-500">
                        Enter your administrative credentials to access the command center.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-md w-full"
                >
                    <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">
                                Admin Identifier
                            </label>
                            <input
                                type="email"
                                required
                                className="block w-full px-0 py-3 border-b border-gray-100 bg-transparent text-gray-900 placeholder-gray-300 focus:outline-none focus:border-[#4A90E2] sm:text-sm transition-all"
                                placeholder="name@muncheez.com"
                            />
                        </div>

                        <div>
                            <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">
                                Access Token
                            </label>
                            <input
                                type="password"
                                required
                                className="block w-full px-0 py-3 border-b border-gray-100 bg-transparent text-gray-900 placeholder-gray-300 focus:outline-none focus:border-[#4A90E2] sm:text-sm transition-all"
                                placeholder="••••••••••••"
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-[#4A90E2] focus:ring-[#4A90E2] border-gray-300 rounded"
                                />
                                <label htmlFor="remember-me" className="ml-3 block text-xs text-gray-500 hover:text-gray-900 transition-colors">
                                    Trust this device
                                </label>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="group w-full flex justify-between items-center py-5 px-8 rounded-2xl text-sm font-bold text-white bg-gray-900 hover:bg-[#4A90E2] transition-all duration-500 uppercase tracking-widest shadow-xl shadow-gray-200"
                        >
                            Authenticate Access
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>

                    <div className="mt-12 pt-8 border-t border-gray-50">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 leading-loose">
                            Security Protocol: <br />
                            Internal use only. Unauthorized attempts will be flagged by our security operations center.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
