const tags = new Set<string>();

// add(value): 값 추가
tags.add("typescript");
tags.add("javascript");
tags.add("react");
// tags.add(10); // 에러 발생

// has(value): 값 존재 여부 확인
console.log(tags.has("typescript")); // true
console.log(tags.has("vue"));        // false

// delete(value): 값 삭제
tags.delete("typescript");

// 값 삭제 후 출력
console.log(tags.has("typescript")); // false

// size: 크기
console.log(tags.size); // 2

// clear(): 전체 삭제
tags.clear();