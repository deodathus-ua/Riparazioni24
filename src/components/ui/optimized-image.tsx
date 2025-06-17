import React, {useState, useRef, useEffect, useCallback} from 'react';

interface OptimizedImageProps {
    src: string;
    alt: string;
    className?: string;
    width?: number;
    height?: number;
    priority?: boolean;
    sizes?: string;
    quality?: number;
    placeholder?: string;
    onLoad?: () => void;
    onError?: () => void;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
                                                           src,
                                                           alt,
                                                           className = '',
                                                           width,
                                                           height,
                                                           priority = false,
                                                           sizes = '100vw',
                                                           quality = 80,
                                                           placeholder = 'blur',
                                                           onLoad,
                                                           onError
                                                       }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [imageSrc, setImageSrc] = useState(src);
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.unobserve(entry.target);
                }
            },
            {threshold: 0.1, rootMargin: '50px'}
        );

        if (imgRef.current && !priority) {
            observer.observe(imgRef.current);
        } else if (priority) {
            setIsInView(true);
        }

        return () => {
            if (imgRef.current) {
                observer.unobserve(imgRef.current);
            }
        };
    }, [priority]);

    const handleLoad = useCallback(() => {
        setIsLoaded(true);
        onLoad?.();
    }, [onLoad]);

    const handleError = useCallback(() => {
        setIsLoaded(false);
        setHasError(true);
        setImageSrc(placeholder);
        onError?.();
    }, [placeholder, onError]);

    // Preload image if priority
    useEffect(() => {
        if (priority && src) {
            const img = new Image();
            img.src = src;
        }
    }, [src, priority]);

    const shouldLoad = priority || isInView;

    return (
        <div className={`relative overflow-hidden ${className}`}>
            {!isLoaded && shouldLoad && !hasError && (
                <div
                    className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center"
                    style={{width, height}}
                >
                    <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
                </div>
            )}
            <img
                ref={imgRef}
                src={shouldLoad ? imageSrc : undefined}
                alt={alt}
                width={width}
                height={height}
                loading={priority ? 'eager' : 'lazy'}
                decoding="async"
                fetchpriority={priority ? 'high' : 'low'}
                sizes={sizes}
                onLoad={handleLoad}
                onError={handleError}
                className={`transition-opacity duration-300 ${
                    isLoaded ? 'opacity-100' : 'opacity-0'
                } ${className}`}
                style={{width: '100%', height: 'auto'}}
            />
            {hasError && (
                <div className="absolute inset-0 bg-gray-100 flex items-center justify-center text-gray-500 text-sm">
                    Immagine non disponibile
                </div>
            )}
        </div>
    );
};

export default OptimizedImage;
