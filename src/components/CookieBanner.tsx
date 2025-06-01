import React, {useState, useEffect} from 'react';
import {X, Cookie} from 'lucide-react';
import {Button} from '@/components/ui/button';

const CookieBanner = () => {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        // Проверяем, дал ли пользователь согласие на cookies
        const cookieConsent = localStorage.getItem('cookie_consent');
        if (!cookieConsent) {
            setShowBanner(true);
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
            {/* Overlay */}
            <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>

            {/* Modal */}
            <div
                className="fixed bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-lg mx-4 bg-white rounded-lg shadow-2xl border z-50">
                <div className="p-6">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                            <Cookie className="h-6 w-6 text-[#1e3a8a]"/>
                            <h3 className="font-bold text-gray-900 text-xl">
                                Cookie
                            </h3>
            </div>
              <button
                  onClick={rejectCookies}
                  className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100"
                  aria-label="Chiudi"
              >
                  <X className="h-5 w-5"/>
              </button>
          </div>

            {/* Content */}
            <p className="text-gray-700 text-sm mb-6 leading-relaxed">
                Utilizziamo cookie base per migliorare la tua esperienza e analizzare il traffico.
                Accettando, ci aiuti a fornirti un servizio migliore.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
                <Button
                    onClick={acceptCookies}
                    className="bg-[#10b981] hover:bg-[#059669] text-white px-6 py-2.5 flex-1"
                >
                    Accetta
                </Button>

                <Button
                    onClick={rejectCookies}
                    variant="outline"
                    className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-2.5 flex-1"
                >
                    Rifiuta
                </Button>
            </div>

            {/* Link to policy */}
            <div className="mt-4 text-center">
                <a
                    href="/cookie-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1e3a8a] hover:text-[#10b981] underline text-xs"
                >
                    Informazioni sui cookie
                </a>
            </div>
        </div>
      </div>
    </>
  );
};

export default CookieBanner;
