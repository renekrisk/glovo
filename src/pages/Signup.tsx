import { motion } from 'framer-motion';
import { Mail, Lock, User, ArrowRight, Store } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Signup() {
    const [accountType, setAccountType] = useState('user');

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <Link to="/" className="flex justify-center mb-6">
                    <span className="font-heading font-bold text-3xl tracking-tighter text-gray-900">
                        Munchezz<span className="text-[#4A90E2]">.</span>
                    </span>
                </Link>
                <h2 className="text-center text-3xl font-heading font-light text-gray-900 tracking-tight">
                    Create an account.
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    Already have one?{' '}
                    <Link to="/login" className="font-medium text-[#4A90E2] hover:text-[#357ABD]">
                        Sign in
                    </Link>
                </p>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mt-8 sm:mx-auto sm:w-full sm:max-w-md"
            >
                <div className="bg-white py-8 px-4 shadow-xl border border-gray-100 sm:rounded-3xl sm:px-10">

                    {/* Account Type Selector */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                        <button
                            onClick={() => setAccountType('user')}
                            className={`flex flex-col items-center gap-2 p-4 rounded-2xl border transition-all ${accountType === 'user' ? 'border-[#4A90E2] bg-[#4A90E2]/5 text-[#4A90E2]' : 'border-gray-100 text-gray-400 hover:bg-gray-50'}`}
                        >
                            <User size={20} />
                            <span className="text-[10px] font-bold uppercase tracking-widest">Personal</span>
                        </button>
                        <button
                            onClick={() => setAccountType('business')}
                            className={`flex flex-col items-center gap-2 p-4 rounded-2xl border transition-all ${accountType === 'business' ? 'border-[#4A90E2] bg-[#4A90E2]/5 text-[#4A90E2]' : 'border-gray-100 text-gray-400 hover:bg-gray-50'}`}
                        >
                            <Store size={20} />
                            <span className="text-[10px] font-bold uppercase tracking-widest">Business</span>
                        </button>
                    </div>

                    <form className="space-y-6">
                        <div>
                            <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">
                                Full Name
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                    <User size={18} />
                                </div>
                                <input
                                    type="text"
                                    required
                                    className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-2xl leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#4A90E2] focus:border-[#4A90E2] sm:text-sm transition-all"
                                    placeholder="Enter your name"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">
                                Email Address
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                    <Mail size={18} />
                                </div>
                                <input
                                    type="email"
                                    required
                                    className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-2xl leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#4A90E2] focus:border-[#4A90E2] sm:text-sm transition-all"
                                    placeholder="name@company.com"
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
                                    className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-2xl leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#4A90E2] focus:border-[#4A90E2] sm:text-sm transition-all"
                                    placeholder="Create a password"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-2xl shadow-sm text-sm font-bold text-white bg-gray-900 hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all uppercase tracking-widest"
                            >
                                {accountType === 'business' ? 'Apply as Partner' : 'Create Account'}
                                <ArrowRight size={16} />
                            </button>
                        </div>
                    </form>

                    <p className="mt-8 text-xs text-center text-gray-500 leading-relaxed">
                        By signing up, you agree to Munchezz's <a href="#" className="underline">Terms of Service</a> and <a href="#" className="underline">Privacy Policy</a>.
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
