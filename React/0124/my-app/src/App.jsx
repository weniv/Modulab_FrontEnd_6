import React from 'react';
import styled from 'styled-components';
const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const PrimaryButton = styled(Button)`
  background-color: #007bff;
  color: white;
`;

const DangerButton = styled(Button)`
  background-color: #dc3545;
  color: white;
`;

function App() {
    return (
        <div>
            <Button>기본 버튼</Button>
            <PrimaryButton type="primary">주요 버튼</PrimaryButton>
            <DangerButton size="large">큰 버튼</DangerButton>
        </div>
    );
}

export default App;