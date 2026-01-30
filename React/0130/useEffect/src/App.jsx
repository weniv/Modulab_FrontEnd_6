import React, { useState, useEffect } from 'react';

const items = [
    { id: 1, name: 'MacBook Pro' },
    { id: 2, name: 'MacBook Air' },
    { id: 3, name: 'iMac' },
    { id: 4, name: 'Mac Mini' },
    { id: 5, name: 'Mac Pro' }
];

function SearchComponent() {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState(items);

    useEffect(() => {
        const timer = setInterval(() => {
            setResults(items.filter((item) => item.name.includes(searchTerm)))
        }, 500);

        return () => {
            clearInterval(timer);
        }
    }, [searchTerm])

    return (
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="검색어를 입력하세요"
            />
            <ul>
                {results.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}


export default function App() {
    return <SearchComponent />;
}