// 테스트할 유닛들의 모음
describe('제스민 유닛테스트 실험', () => {

    it('전달된 인자에 1을 더하는 함수입니다.', () => {
        let num = 1
        // expect: 기대식
        // toBe: 매쳐함수
        expect(plusOne(num)).toBe(num + 1);

    });

});