interface Cat<T> {
    name: T;
    age: number;
}
 
interface Licat<T, U> extends Cat<T> {
    hp: number;
    mp: U;
}
 
const licat: Licat<string, number> = {
    name: "licat",
    age: 3,
    hp: 100,
    mp: 50
};
 
const licat_bot: Licat<number, string> = {
    name: 1,  // name이 number 타입
    age: 3,
    hp: 100,
    mp: "high"
};