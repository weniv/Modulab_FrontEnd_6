import { useState } from "react";

const initialPets = [
    { name: "나나", species: "고양이", age: "1", id: 111 },
    { name: "망고", species: "고양이", age: "3", id: 112 },
    { name: "하뚱", species: "토끼", age: "2", id: 113 },
    { name: "호두", species: "고양이", age: "1", id: 114 },
    { name: "솜이", species: "강아지", age: "6", id: 115 },
];

function App() {
    const [pets, setPets] = useState(initialPets);
    const [name, setName] = useState("");
    const [species, setSpecies] = useState("고양이");
    const [age, setAge] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newPet = {
            id: Date.now(),
            // 변수명, 속성명이 같으면 한번만 써도 됨
            name,
            species,
            age,
        };

        setPets([...pets, newPet]);
        setName("");
        setSpecies("고양이");
        setAge("");
    };

    return (
        <>
            <h1>반려동물 관리</h1>
            {/* 추가 폼 */}
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="이름" onChange={(e) => setName(e.target.value)} value={name} required />

                <select onChange={(e) => setSpecies(e.target.value)} value={species}>
                    <option value="고양이">고양이</option>
                    <option value="강아지">강아지</option>
                    <option value="토끼">토끼</option>
                </select>

                <input type="number" placeholder="나이" onChange={(e) => setAge(e.target.value)} value={age} required min="0" />

                <button type="submit">추가</button>
            </form>

            {/* 테이블 목록 표시 */}
            <table border="1" style={{ marginTop: "20px", borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        <th>이름</th>
                        <th>종</th>
                        <th>나이</th>
                    </tr>
                </thead>
                <tbody>
                    {pets.map((pet) => (
                        <tr key={pet.id}>
                            <td>{pet.name}</td>
                            <td>{pet.species}</td>
                            <td>{pet.age}살</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default App;
