import { styled, createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  span {
  color: red;}

  a {
  text-decoration: none;
  }
`;

const Button = styled.button`
    background-color: ${(props) => (props.type ? "#007bff" : "#6c757d")};
    color: white;
    padding: ${(props) => (props.size === "large" ? "10px 20px" : "5px 10px")};
    margin-bottom: 10px;
    font-size: ${(props) => (props.size === "large" ? "20px" : "16px")};
`;

const DefaultButton = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`;

const Color = css`
    color: #fff;
`;

// DefaultButton의 모든 스타일을 상속, 추가로 작성한 스타일이 덮어씌워짐
const PrimaryButton = styled(DefaultButton)`
    background-color: #007bff;
    ${Color}
`;

// DefaultButton의 모든 스타일을 상속, 추가로 작성한 스타일이 덮어씌워짐
const DangerButton = styled(DefaultButton)`
    background-color: #dc3545;
    ${Color}
`;

function Buttons() {
    return (
        <>
            {/* props 기반 동적 스타일링 */}
            <Button>버튼</Button>
            <Button type="primary">주요 버튼</Button>
            <Button size="large">큰 버튼</Button>
            <br />
            <DefaultButton>기본 버튼</DefaultButton>
            <PrimaryButton>주요 버튼</PrimaryButton>
            <DangerButton>경고 버튼</DangerButton>
        </>
    );
}

function App() {
    return (
        <>
            {/* <GlobalStyle /> */}
            <Buttons />
            {/* <span>hello world</span> */}
        </>
    );
}

export default App;
