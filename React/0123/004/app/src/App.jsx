import styled from 'styled-components';
 
// 스타일이 적용된 h1 컴포넌트 생성
const Title = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 16px;
`;
 
// 스타일이 적용된 button 컴포넌트 생성
const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
 
  &:hover {
    background-color: #0056b3;
  }
`;
 
function App() {
  return (
    <div>
      <Title>안녕하세요!</Title>
      <Button>클릭하세요</Button>
    </div>
  );
}
 
export default App;