import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

const ItemList = styled.div`
    margin: 60px auto;

    ul {
      display:flow-root;
      padding: 10px;
    }

    li {
      border: 1px solid #e4e4e4;
      box-sizing: border-box;
      padding: 10px;
      box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.05);
      border-radius: 10px;
      list-style: none;
      margin: 20px 0;
    }

    .options{
        display:flow-root;
        padding: 10px;
    }
        button{
            float:right;
            padding: 10px;
            border-radius: 5px;
            border:1px solid black;
            background-color: #fff;
        }
`;

export default function NationList() {

    const [nations, setNations] = useState([]);
    const [url, setUrl] = useState('http://localhost:3000/nations');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error('네트워크에 문제가 있습니다.');
                }

                const json = await response.json();
                setNations(json);
            } catch (error) {
                console.error(error.message);
            }
        }
        fetchData();
    }, [url]);


    return (
        <ItemList>
            <h2>나라 목록</h2>
            <ul>
                {nations.map((nation) => {
                    return (
                        <li key={nation.id}>
                            <h3>{nation.title}</h3>
                            <p>인구 : {nation.population}</p>
                        </li>
                    )
                })}
            </ul>
            <div className="options">
                <button onClick={() => setUrl('http://localhost:3000/nations?loc=europe')}>
                    유럽 목록
                </button>
                <button onClick={() => setUrl('http://localhost:3000/nations')}>
                    전체 목록
                </button>
            </div>
        </ItemList>
    )
}
