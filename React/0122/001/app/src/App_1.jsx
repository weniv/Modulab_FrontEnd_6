// function Hello(props) {
//   return (
//     <div>
//       <h1>안녕, 내 이름은 {props.name}!</h1>
//       <p>나이는 {props.age}살이야.</p>
//     </div>
//   );
// }

function Hello({ name, age }) {
  return (
    <div>
      <h1>안녕, 내 이름은 {name}!</h1>
      <p>나이는 {age}살이야.</p>
    </div>
  );
}
 
// 사용
function App() {
  return <Hello name="지지" age={20} />;
}

// function App() {
//   const userInfo = {
//     name: '지지',
//     age: 20,
//     type: '사막여우',
//   };
 
//   return <Hello {...userInfo} />;
// }

export default App;