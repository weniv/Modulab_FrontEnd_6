import styled from "styled-components";

const CardDiv = styled.div`
    padding: 20px;
    border-radius: 10px;
    border: 1px solid #c4c4c4;
    margin-bottom: 20px;
    width: ${(props) => (props.className === "setting" ? "200px" : "400px")};
`;

function Modal(props) {
    return (
        <CardDiv className={props.className}>
            <h3>{props.title}</h3>
            <hr />
            {/* 여기에 각 카드들의 고유한 콘텐츠 */}
            <div>{props.children}</div>
        </CardDiv>
    );
}

export default Modal;
