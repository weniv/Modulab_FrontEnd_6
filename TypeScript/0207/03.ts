let value: any = 4;
// console.log(value);
value = "hello";
// console.log(value);
// console.log(value.length);
value = [10, 20, 30];
// console.log(value);

// object type 예제
const obj: object = {
    name: "licat",
    age: 3
}
 
console.log(obj.name); // 경고
console.log(obj["name"]);
console.log(obj["age"]);