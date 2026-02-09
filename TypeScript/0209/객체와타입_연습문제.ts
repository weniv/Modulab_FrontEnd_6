/**
 * 1.
 */

type Song = {
    title: string,
    artist: string,
    duration: number,
    isTitle: boolean
}

const song = {
    title: "Dynamite",
    artist: "BTS",
    duration: 199,
    isTitle: true,
};

/**
 * 2. 
 * - `readonly appName: string` — 앱 이름 (수정 불가)
 * - `readonly version: number` — 버전 (수정 불가)
 * - `debugMode?: boolean` — 디버그 모드 (선택)
 * - `apiUrl?: string` — API 주소 (선택)
 */
type Config = {
    readonly appName: string,
    readonly version: number,
    debugMode?: boolean,
    apiUrl?: string,
}

const app1: Config = {
    appName: 'app1',
    version: 1.0,
    debugMode: true,
}

const app2: Config = {
    appName: 'app2',
    version: 1.0,
    debugMode: true,
    apiUrl: 'localhost:4000'
}

/**
 * 4. 아래 요구사항에 맞는 인터페이스를 작성하세요.

1. `Animal` 인터페이스: `name(string)`, `age(number)` 속성
2. `Pet` 인터페이스: `Animal`을 확장하고, `owner(string)` 속성 추가
3. `Dog` 인터페이스: `Pet`을 확장하고, `breed(string)` 속성 추가

`Dog` 타입의 변수를 하나 생성하고, 모든 속성에 값을 할당하세요.
 */

interface Animal {
    name: string,
    age: number,
}

interface Pet extends Animal {
    owner: string
}

interface Dog extends Pet {
    breed: string
}

const dog: Dog = {
    name: 'sunny',
    age: 3,
    owner: 'sunny2',
    breed: 'abc'
}