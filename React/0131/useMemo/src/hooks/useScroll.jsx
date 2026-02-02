import React, { useEffect, useState } from 'react';

export default function useScroll() {
    const [isBottom, setIsBottom] = useState(false);
    console.log(isBottom);

    const handleScrollMove = (e) => {
        // setScrollLocation(window.scrollY);
        setIsBottom(window.innerHeight + window.scrollY + 100 >= document.documentElement.offsetHeight);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScrollMove);

        return () => {
            window.removeEventListener('scroll', handleScrollMove);
        }

    }, [])

    return { isBottom };
}


export function useScroll2() {
    const [isBottom, setIsBottom] = useState(false);

    useEffect(() => {
        // 쓰로틀링 함수 (수정된 버전)
        function throttling(callback, delay) {
            let timer = null;

            return () => {
                if (timer === null) {
                    timer = setTimeout(() => {
                        callback(); // 콜백 함수 실행
                        timer = null;
                    }, delay);
                }
            };
        }

        // 스크롤 핸들러 함수
        const handleScroll = () => {
            // 바닥 도달 확인
            const isAtBottom =
                window.innerHeight + document.documentElement.scrollTop + 20 >=
                document.documentElement.offsetHeight;

            setIsBottom(isAtBottom);
        };

        // 쓰로틀된 스크롤 핸들러 생성 (100ms 지연)
        const throttledScrollHandler = throttling(handleScroll, 100);

        // 이벤트 리스너 등록
        window.addEventListener("scroll", throttledScrollHandler);

        // 클린업
        return () => {
            window.removeEventListener("scroll", throttledScrollHandler);
        };
    }, []);

    return { isBottom };
}