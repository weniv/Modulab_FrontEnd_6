
describe('사용자 입력값을 화면에 출력합니다.', () => {
    it('viewManager 인스턴스에 textManager 인스턴스가 잘 전달됐는지 확인합니다.', () => {

        const textManager = null;
        const viewerEl = document.createElement('strong');
        const inputTxt = document.createElement('input');
        const btnEl = document.createElement('button');
        const actual = () => new ViewManager(textManager, { viewerEl, inputTxt, btnEl });

        // toThrowError는 매처함수. throw new Error가 잘 작동하는지 검증합니다.
        expect(actual).toThrowError();
    })

    it('viewManager 인스턴스에 필요한 요소가 잘 전달됐는지 확인합니다.', () => {

        const textManager = new TextManager();
        const viewerEl = null;
        const inputTxt = null;
        const btnEl = document.createElement('button');
        const actual = () => new ViewManager(textManager, { viewerEl, inputTxt, btnEl });

        // toThrowError는 매처함수. throw new Error가 잘 작동하는지 검증합니다.
        expect(actual).toThrowError();
    })

    const textManager = new TextManager();
    const viewerEl = document.createElement('strong');
    const inpTxt = document.createElement('input');
    const btnEl = document.createElement('button');
    const viewManager = new ViewManager(textManager, { viewerEl, inpTxt, btnEl });

    it('click 이벤트가 발생했을때  호출되는것을 확인합니다.', () => {
        // spyOn: 특정 객체의 함수를 감시합니다.
        spyOn(viewManager, 'changeValue');
        btnEl.click();
        expect(viewManager.changeValue).toHaveBeenCalled();
    })

    it('updataView가 호출되는것을 확인합니다.', () => {
        // spyOn: 특정 객체의 함수를 감시합니다.
        spyOn(viewManager, 'updateView');
        viewManager.changeValue();
        expect(viewManager.updateView).toHaveBeenCalled();
    })
});

