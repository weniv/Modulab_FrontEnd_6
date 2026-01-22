// React에서 일반 변수를 수정하는 것은 UI 업데이트가 되지 않는다!
function LikeButton() {
  let like = 0;
 
  function handleLike() {
    like += 1;
    console.log('좋아요 수:', like); // 콘솔에는 증가된 값이 출력됨
  }
 
  return (
    <div>
      <button onClick={handleLike}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>{like}</span>
      </button>
    </div>
  );
}

function App() {

    return (
        <>
            <LikeButton/>
        </>
    )
}

export default App
