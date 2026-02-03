import React, { useRef } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import useScrollObserver from './hooks/useScrollObserver';

export default function InfiniteScroll() {

    const [imageList, setImageList] = useState([]);
    const [page, setPage] = useState(1);
    const { isBottom } = useScrollObserver();
    const isLoading = useRef(false);


    async function fetchImage(pageNum) {

        if (isLoading.current) return;

        isLoading.current = true;

        try {
            const response = await fetch(`https://picsum.photos/v2/list?page=${pageNum}&limit=6`);

            if (!response.ok) {
                throw new Error('네트워크에 문제가 있습니다.');
            }

            const data = await response.json();
            setImageList((prevData) => [...prevData, ...data]);
        } catch (error) {
            console.error(error.message);
        } finally {
            isLoading.current = false;
        }
    }

    useEffect(() => {
        fetchImage();
    }, []);

    useEffect(() => {
        console.log(isBottom);
        if (isBottom) {

            const nextPage = page + 1;

            setPage(nextPage);

            fetchImage(nextPage);
        }
    }, [isBottom]);

    return (
        <ul>
            {
                imageList.map((imageItem) => {
                    return (
                        <li key={imageItem.id}><img width={300} src={imageItem.download_url} alt="" /></li>
                    )
                })
            }
        </ul>
    )
}
