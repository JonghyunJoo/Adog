'use client'

import { useEffect, RefObject } from "react";

interface UseObserverProps {
    target: RefObject<Element>;
    onIntersect: IntersectionObserverCallback;
    root?: Element | null;
    rootMargin?: string;
    threshold?: number | number[];
}

export const useObserver = ({
    target,
    onIntersect,
    root = null,
    rootMargin = "150px",
    threshold = 1.0,
}: UseObserverProps) => {
    useEffect(() => {
        let observer: IntersectionObserver | undefined;

        if (target && target.current) {
            observer = new IntersectionObserver(onIntersect, {
                root,
                rootMargin,
                threshold,
            });
            observer.observe(target.current);
        }

        return () => observer && observer.disconnect();
    }, [target, onIntersect, root, rootMargin, threshold]);
};