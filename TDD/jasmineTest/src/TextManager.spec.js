describe('텍스트 관리자입니다.', () => {

    const textManager = new TextManager();

    it('사용자가 입력한 값을 가져옵니다.', () => {
        const intiVal = textManager.getValue();
        expect(textManager.getValue()).toBe(intiVal);

    });

    it('저장하고 있는 텍스트를 수정합니다.', () => {
        const newValue = { data: "Hello World!" };
        textManager.setValue(newValue);
        expect(textManager.getValue()).toBe(newValue.data);
    })

});