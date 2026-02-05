import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';

// vitest에 jest-dom matchers 추가. Vitest야, 너한테 새로운 테스트 함수들을 추가해줄게!
expect.extend(matchers);

// 각 테스트 후 자동 cleanup. render로 마운트된 React 트리를 마운트 해제합니다. 렌더링은 메모리 누수를 초래할 수 있습니다. https://testing-library.com/docs/react-testing-library/api/#cleanup
afterEach(() => {
    cleanup();
});