import Modal from "./components/Modal";
import SettingCard from "./components/SettingCard";
import ShareCard from "./components/ShareCard";

function App() {
    return (
        <>
            <Modal className="setting" title="챌린지 설정">
                <SettingCard />
            </Modal>
            <Modal className="share" title="서비스 공유하기">
                <ShareCard />
            </Modal>
            {/* <Modal className="info" title="정보">
                <p>고유한 콘텐츠</p>
            </Modal> */}
        </>
    );
}

export default App;
