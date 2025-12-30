import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CourierLogin() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#00A082] mb-8 hover:opacity-70 transition-all group mx-auto w-fit"
                >
                    <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Selection
                </Link>
                <Link to="/" className="flex justify-center mb-6 text-gray-900 hover:text-[#00A082] transition-colors">
                    <span className="font-heading font-bold text-3xl tracking-tighter">
                        Muncheez<span className="text-[#00A082]">.</span>
                    </span>
                </Link>
                <h2 className="text-center text-3xl font-heading font-light text-gray-900 tracking-tight">
                    The Fleet.
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    Welcome back, Captain. Or{' '}
                    <Link to="/courier/signup" className="font-medium text-[#00A082] hover:text-[#007F66]">
                        Join the Fleet
                    </Link>
                </p>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10"
            >
                <div className="bg-white py-8 px-4 shadow-xl border border-gray-100 sm:rounded-3xl sm:px-10">
                    <form className="space-y-6">
                        <div>
                            <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">
                                Login ID / Email
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                    <Mail size={18} />
                                </div>
                                <input
                                    type="email"
                                    required
                                    className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-2xl bg-gray-50 focus:outline-none focus:ring-1 focus:ring-[#00A082] focus:border-[#00A082] sm:text-sm transition-all"
                                    placeholder="rider@muncheez.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                    <Lock size={18} />
                                </div>
                                <input
                                    type="password"
                                    required
                                    className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-2xl bg-gray-50 focus:outline-none focus:ring-1 focus:ring-[#00A082] focus:border-[#00A082] sm:text-sm transition-all"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-2xl shadow-sm text-sm font-bold text-white bg-gray-900 hover:bg-black transition-all uppercase tracking-widest"
                            >
                                Start Shift
                                <ArrowRight size={16} />
                            </button>
                        </div>
                    </form>
                </div>
            </motion.div>
        </div>
    );
}
