import React, { createElement, useRef } from 'react';
import { useState, useEffect } from 'react';

export default function useScrollObserver() {
    const [isBottom, setIsBottom] = useState(false);
    const pageEdgeRef = useRef(null);

    // const handleScrollMove = (e) => {
    //     // setIsBottom(window.innerHeight + window.scrollY + 100 >= document.documentElement.offsetHeight);
    // }

    useEffect(() => {
        // window.addEventListener('scroll', handleScrollMove);
        const pageEdge = document.createElement('div');
        pageEdge.style.height = '10px';
        document.body.append(pageEdge);
        pageEdgeRef.current = pageEdge;


        const observer = new IntersectionObserver((entries) => {
            setIsBottom(entries[0].isIntersecting);
        }, {
            root: null,
            threshold: 1
        });

        observer.observe(pageEdge);

        return () => {
            // window.removeEventListener('scroll', handleScrollMove);
            observer.unobserve(pageEdge);
            document.body.removeChild(pageEdge);
        }

    }, []);

    return { isBottom };
}
