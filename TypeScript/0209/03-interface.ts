/**
 * interface - 확장
 */
interface Character {
  nickName: string;
}
 
interface Bird {
  fly: number;
}
 
interface BirdCharacter extends Character, Bird {
  level: number;
}
 
const birdChar: BirdCharacter = {
  nickName: "Gary",
  fly: 10,
  level: 1
};

/**
 * interface - 병합
 */
interface Character_ {
  nickName: string;
}
 
interface Character_ {
  level: number;
}
 
// 다음과 동일합니다:
// interface Character_ {
//   nickName: string;
//   level: number;
// }
 
const char: Character_ = {
  nickName: "Gary",
  level: 1
};

type character = {
    nicknane: string
}

// 에러! type 별칭은 같은 이름으로 두개의 타입을 선언할 수 없습니다.
// type character = {
//     level: number
// }

type newCharacter = character & character

/**
 * interface - implements
 */
interface Vehicle {
  start(): void;
  stop(): void;
}
 
// Car 클래스는 Vehicle 인터페이스를 구현해야 함
class Car implements Vehicle {
  start() {
    console.log("차가 출발합니다");
  }
  
  // stop 메서드를 구현하지 않으면 에러 발생!
  // 에러: 'Car' 클래스가 'Vehicle' 인터페이스를 
  // 올바르게 구현하지 않았습니다.
  // 'stop' 속성이 'Car' 형식에 없습니다.
  stop() {
    console.log("차가 멈춥니다");
  }
}

/**
 * interface - type과의 차이
 */
// Interface - extends 사용
interface Animal {
  name: string;
}
interface Bear extends Animal {
  honey: boolean;
}
 
// Type - & 사용
type Animal_ = {
  name: string;
}
type Bear_ = Animal_ & {
  honey: boolean;
}