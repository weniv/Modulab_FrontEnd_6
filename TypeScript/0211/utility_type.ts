type Author_ = {
    name: string;
    age: number;
    password: string;
    birth: string;
    phone: string;
    email: string;
}

type PartialAuthor = Partial<Author_>;

const author: PartialAuthor = {
    name: 'licat',
    age: 30
}
const authorEmpty: PartialAuthor = {};

console.log(author);
console.log(authorEmpty);

type PickAuthor = Pick<Author_, 'name' | 'age' >;

const author2: PickAuthor = {
    name: 'licat',
    age: 30,
}

console.log(author);

type OmitAuthor = Omit<Author_, 'birth' | 'phone' | 'email'>;

const author3: OmitAuthor = {
    name: 'licat',
    age: 10,
    password: 'asdf'
}

console.log(author);