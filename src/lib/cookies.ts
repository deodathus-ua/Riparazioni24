// Cookie utilities
export const CookieManager = {
    // Проверяет, дал ли пользователь согласие на cookies
    hasConsent: (): boolean => {
        const consent = localStorage.getItem('cookie_consent');
        return consent === 'accepted';
    },

    // Проверяет, отклонил ли пользователь cookies
    hasRejected: (): boolean => {
        const consent = localStorage.getItem('cookie_consent');
        return consent === 'rejected';
    },

    // Устанавливает cookie с проверкой согласия
    setCookie: (name: string, value: string, days: number = 30) => {
        if (!CookieManager.hasConsent()) return;

        const expires = new Date();
        expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
        document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
    },

    // Получает cookie
    getCookie: (name: string): string | null => {
        const nameEQ = name + '=';
        const cookies = document.cookie.split(';');

        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i];
            while (cookie.charAt(0) === ' ') {
                cookie = cookie.substring(1, cookie.length);
            }
            if (cookie.indexOf(nameEQ) === 0) {
                return cookie.substring(nameEQ.length, cookie.length);
            }
        }
        return null;
    },

    // Удаляет cookie
    deleteCookie: (name: string) => {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    },

    // Сохраняет данные формы в localStorage (не требует согласия)
    saveFormData: (formName: string, data: Record<string, unknown>) => {
        try {
            localStorage.setItem(`form_${formName}`, JSON.stringify(data));
        } catch (e) {
            console.warn('Failed to save form data:', e);
        }
    },

    // Получает сохраненные данные формы
    getFormData: (formName: string): Record<string, unknown> | null => {
        try {
            const data = localStorage.getItem(`form_${formName}`);
            return data ? JSON.parse(data) : null;
        } catch (e) {
            console.warn('Failed to get form data:', e);
            return null;
        }
    },

    // Удаляет сохраненные данные формы
    clearFormData: (formName: string) => {
        localStorage.removeItem(`form_${formName}`);
    }
};
