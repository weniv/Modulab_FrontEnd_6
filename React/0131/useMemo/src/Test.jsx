import React from 'react'
import { useMouseLocation } from './hooks/useMouseLocation'
// import useScroll from './hooks/useScroll'
import { useScroll2 } from './hooks/useScroll';

export default function Test() {

    // const { mouseLocation } = useMouseLocation();
    // console.log(mouseLocation);

    const { scrollLocation } = useScroll2();

    return (
        <div style={{ height: 2000, backgroundColor: 'royalblue' }}>Test</div>
    )
}
