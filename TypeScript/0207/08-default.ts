function createUser(name: string, age: number = 20): {name: string, age: number} {
    return {
        name,
        age
    };
}
 
console.log(createUser("Alice"));     // { name: "Alice", age: 20 }
console.log(createUser("Bob", 25));   // { name: "Bob", age: 25 }