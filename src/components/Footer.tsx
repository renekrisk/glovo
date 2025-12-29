import { Instagram, Facebook, Twitter, Linkedin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import appStoreIcon from '../assets/app-store-icon.png';
import googlePlayIcon from '../assets/google-play-icon.png';


export default function Footer() {
    return (
        <footer className="bg-black pt-20 pb-10 text-white" id="contact">
            <div className="container">

                {/* Newsletter */}
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-20 border-b border-gray-900 pb-20">
                    <div className="max-w-xl">
                        <h3 className="text-3xl font-heading font-bold mb-4">Join the Fam.</h3>
                        <p className="text-gray-400">Get the 254 scoop: exclusive deals, city favorites, and the latest from the kitchens you love.</p>
                    </div>
                    <div className="w-full md:w-auto">
                        <form className="flex w-full md:w-96">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-gray-900 border border-gray-800 text-white px-4 py-3 rounded-l-lg w-full focus:outline-none focus:border-gray-700 transition-colors placeholder:text-gray-600"
                            />
                            <button className="bg-white text-black font-bold px-6 py-3 rounded-r-lg hover:bg-gray-200 transition-colors">
                                <ArrowRight size={20} />
                            </button>
                        </form>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 mb-20">

                    {/* Identity */}
                    <div className="col-span-2 md:col-span-1">
                        <a href="#" className="flex items-center gap-2 mb-6">
                            <span className="font-heading font-extrabold text-xl tracking-tighter text-white">
                                Munchezz<span className="text-[var(--primary)]">.</span>
                            </span>
                        </a>
                        <p className="text-white/40 text-[10px] uppercase tracking-widest leading-loose">
                            Built for the city. Bringing Nairobi’s favorite kitchens and local gems straight to your door.
                        </p>
                        <div className="flex gap-3">
                            {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-all">
                                    <Icon size={14} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">The Selection</h4>
                        <ul className="space-y-3">
                            {['The Kitchens', 'The Pantry', '254 Gems', 'The Oven', 'Home Favs', 'Sweet Fixes'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Company</h4>
                        <ul className="space-y-3">
                            {[
                                { name: 'About Us', slug: 'about-us' },
                                { name: 'Our Team', slug: 'our-team' },
                                { name: 'Careers', slug: 'careers' },
                                { name: 'Partner With Us', href: '/partner/login' },
                                { name: 'Join as Rider', href: '/courier/login' }
                            ].map((item) => (
                                <li key={item.name}>
                                    {item.slug ? (
                                        <Link to={`/legal/${item.slug}`} className="text-sm text-gray-400 hover:text-white transition-colors">{item.name}</Link>
                                    ) : (
                                        <Link to={item.href || '#'} className="text-sm text-gray-400 hover:text-white transition-colors">{item.name}</Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Support</h4>
                        <ul className="space-y-3">
                            {[
                                { name: 'Help Center', slug: 'help-center' },
                                { name: 'Contact Us', slug: 'contact-us' },
                                { name: 'FAQs', slug: 'faq' },
                                { name: 'Terms of Service', slug: 'terms-of-service' },
                                { name: 'Privacy Policy', slug: 'privacy-policy' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link to={`/legal/${item.slug}`} className="text-sm text-gray-400 hover:text-white transition-colors">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Download */}
                    <div>
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Get the App</h4>
                        <ul className="space-y-4">
                            <li>
                                <div className="text-sm text-gray-400">
                                    <p className="text-white font-heading font-light mb-4">The city in your pocket.</p>
                                    <div className="flex flex-col gap-3">
                                        <a href="#" className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-3 rounded-2xl hover:bg-[#4A90E2] hover:border-[#4A90E2] transition-all group overflow-hidden">
                                            <img src={appStoreIcon} alt="App Store" className="w-10 h-10 rounded-lg shrink-0 object-contain invert" />
                                            <div className="flex flex-col">
                                                <span className="text-[8px] font-bold uppercase tracking-widest opacity-40 group-hover:opacity-60 text-white transition-opacity">Download on</span>
                                                <span className="text-xs font-bold font-heading text-white">App Store</span>
                                            </div>
                                        </a>
                                        <a href="#" className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-3 rounded-2xl hover:bg-[#00A082] hover:border-[#00A082] transition-all group overflow-hidden">
                                            <img src={googlePlayIcon} alt="Google Play" className="w-10 h-10 rounded-lg shrink-0 object-contain" />
                                            <div className="flex flex-col">
                                                <span className="text-[8px] font-bold uppercase tracking-widest opacity-40 group-hover:opacity-60 text-white transition-opacity">Get it on</span>
                                                <span className="text-xs font-bold font-heading text-white">Google Play</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="text-sm text-gray-400 mt-6">
                                    <p className="text-white font-medium mb-2">Follow Us</p>
                                    <p className="text-xs">@munchezz</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
                    <p>© 2025 Munchezz. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link to="/legal/privacy-policy" className="hover:text-gray-400">Privacy Policy</Link>
                        <Link to="/legal/terms-of-service" className="hover:text-gray-400">Terms of Service</Link>
                        <button className="hover:text-gray-400 text-left">Cookie Settings</button>
                    </div>
                </div>

            </div>
        </footer>
    );
}
