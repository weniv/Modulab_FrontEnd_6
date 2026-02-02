import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useScroll2 } from './hooks/useScroll';

export default function InfiniteScroll() {

    const [imageList, setImageList] = useState([]);
    const { isBottom } = useScroll2();

    async function fetchImage() {
        console.log('ㅋㅋㅋ');
        try {
            const response = await fetch('https://picsum.photos/v2/list?page=1&limit=6');

            if (!response.ok) {
                throw new Error('네트워크에 문제가 있습니다.');
            }

            const data = await response.json();
            setImageList(data);
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        console.log(isBottom);
        if (!isBottom) {
            fetchImage();
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
