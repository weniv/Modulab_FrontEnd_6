const hojun = console.log
hojun('hello world')

// 함수 이름은 변수일 뿐입니다. 특정한 기능(메모리를)을 가리키고 있는 변수입니다.

function add(a, b) {
    return a + b
}

const addd = add

console.log(addd(10, 20))

//

function upgradeAdd(f1, f2){
    return f1(10, 20) + f2(30, 40)
}

upgradeAdd(add, add)

// 

function hello(hojun) {
    hojun('hello world')
}

hello(console.log)


//

function hello(hojun) {
    console.log(hojun(10, 20))
}

hello((a, b) => a + b)

