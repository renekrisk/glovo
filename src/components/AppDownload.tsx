import appStoreIcon from '../assets/app-store-icon.png';
import googlePlayIcon from '../assets/google-play-icon.png';

export default function AppDownload() {
    return (
        <section className="py-20 bg-white border-t border-gray-200/50" id="app-download">
            <div className="container">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

                    {/* Text */}
                    <div>
                        <h2 className="text-3xl font-heading font-light text-gray-900 mb-2">
                            Get the app
                        </h2>
                        <p className="text-sm text-gray-400 font-light">
                            Available on iOS and Android
                        </p>
                    </div>

                    {/* App Icons */}
                    <div className="flex gap-6">
                        <a href="#" className="transition-opacity hover:opacity-70">
                            <img src={appStoreIcon} alt="App Store" className="w-12 h-12" />
                        </a>
                        <a href="#" className="transition-opacity hover:opacity-70">
                            <img src={googlePlayIcon} alt="Google Play" className="w-12 h-12" />
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}
