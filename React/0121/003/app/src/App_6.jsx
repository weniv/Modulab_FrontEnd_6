function App() {
    const data = [
        {id: 1, name: 'Alice', age: 30, city: 'New York'},
        {id: 2, name: 'Bob', age: 25, city: 'Los Angeles'},
        {id: 3, name: 'Charlie', age: 35, city: 'Chicago'},
    ];
    return (
        <>
            {data.filter(person => person.age >= 30).map(person => (
                <div key={person.id}>
                    <div>{person.id}</div>
                    <div>{person.name}</div>
                    <div>{person.age}</div>
                    <div>{person.city}</div>
                </div>
            ))}
        </>
    )
}

export default App
