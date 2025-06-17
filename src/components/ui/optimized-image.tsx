import React, {useState, useRef, useEffect} from 'react';

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
                                                           placeholder = 'blur'
                                                       }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
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

    const handleLoad = () => {
        setIsLoaded(true);
    };

    const shouldLoad = priority || isInView;

    return (
        <div className={`relative overflow-hidden ${className}`}>
            {!isLoaded && shouldLoad && (
                <div
                    className="absolute inset-0 bg-gray-200 animate-pulse"
                    style={{width, height}}
                />
            )}
            <img
                ref={imgRef}
                src={shouldLoad ? src : undefined}
                alt={alt}
                className={`transition-opacity duration-300 ${
                    isLoaded ? 'opacity-100' : 'opacity-0'
                } ${className}`}
                width={width}
                height={height}
                loading={priority ? 'eager' : 'lazy'}
                decoding="async"
                fetchPriority={priority ? 'high' : 'low'}
                sizes={sizes}
                onLoad={handleLoad}
                style={{width: '100%', height: 'auto'}}
            />
        </div>
    );
};

export default OptimizedImage;