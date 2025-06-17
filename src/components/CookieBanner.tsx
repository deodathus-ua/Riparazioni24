import React, {useState, useEffect} from 'react';
import {X, Cookie, Shield, Eye} from 'lucide-react';
import {Button} from '@/components/ui/button';

const CookieBanner = () => {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        // Проверяем, дал ли пользователь согласие на cookies
        const cookieConsent = localStorage.getItem('cookie_consent');
        if (!cookieConsent) {
            setTimeout(() => setShowBanner(true), 500); // Небольшая задержка для плавного появления
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('cookie_consent', 'accepted');
        localStorage.setItem('cookie_consent_date', new Date().toISOString());
        setShowBanner(false);
    };

    const rejectCookies = () => {
        localStorage.setItem('cookie_consent', 'rejected');
        localStorage.setItem('cookie_consent_date', new Date().toISOString());
        setShowBanner(false);

        // Удаляем Google Analytics cookies если они есть
        document.cookie = '_ga=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        document.cookie = '_gid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        document.cookie = '_gat=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    };

    if (!showBanner) return null;

    return (
        <>
            {/* Backdrop с плавным появлением */}
            <div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 animate-fade-in"
                style={{
                    animation: 'fadeIn 0.3s ease-out'
                }}
            ></div>

            {/* Modal с современным дизайном */}
            <div
                className="fixed bottom-6 left-1/2 transform -translate-x-1/2 w-full max-w-md mx-4 z-50"
                style={{
                    animation: 'slideUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
                }}
            >
                <div
                    className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
                    {/* Gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-blue-50/30"></div>

                    <div className="relative p-6">
                        {/* Header with enhanced styling */}
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2.5 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-lg">
                                    <Cookie className="h-5 w-5 text-white"/>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg leading-tight">
                                        Cookie & Privacy
                                    </h3>
                                    <p className="text-xs text-gray-500 mt-0.5">
                                        La tua privacy è importante per noi
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={rejectCookies}
                                className="text-gray-400 hover:text-gray-600 p-2 rounded-xl hover:bg-gray-50/80 transition-all duration-200 group"
                                aria-label="Chiudi"
                            >
                                <X className="h-4 w-4 group-hover:rotate-90 transition-transform duration-200"/>
                            </button>
                        </div>

                        {/* Enhanced content with icons */}
                        <div className="mb-6">
                            <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                                Utilizziamo cookie essenziali per garantire il funzionamento del sito e cookie analytics
                                per migliorare la tua esperienza.
                            </p>

                            {/* Feature highlights */}
                            <div className="flex items-center gap-4 text-xs text-gray-600 mb-4">
                                <div className="flex items-center gap-1.5">
                                    <Shield className="h-3.5 w-3.5 text-green-600"/>
                                    <span>Sicuro</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <Eye className="h-3.5 w-3.5 text-blue-600"/>
                                    <span>Trasparente</span>
                                </div>
                            </div>
                        </div>

                        {/* Enhanced buttons */}
                        <div className="flex flex-col gap-3">
                            <Button
                                onClick={acceptCookies}
                                className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]"
                            >
                                <Cookie className="h-4 w-4 mr-2"/>
                                Accetta tutti i cookie
                            </Button>

                            <Button
                                onClick={rejectCookies}
                                variant="outline"
                                className="border-gray-200 text-gray-700 hover:bg-gray-50/80 px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:border-gray-300"
                            >
                                Solo cookie essenziali
                            </Button>
                        </div>

                        {/* Enhanced policy link */}
                        <div className="mt-4 text-center">
                            <a
                                href="#/cookie-policy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-emerald-600 underline text-xs font-medium transition-colors duration-200"
                            >
                                Leggi la nostra politica sui cookie →
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                @keyframes slideUp {
                    from {
                        opacity: 0;
                        transform: translateX(-50%) translateY(20px) scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(-50%) translateY(0) scale(1);
                    }
                }
            `}</style>
        </>
    );
};

export default CookieBanner;
