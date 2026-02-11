interface Box_<T> {
    value: T;
}

const a: Box_<string> = { value: "hello" };
// const b: Box_<number> = a;