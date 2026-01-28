function Home() {
    // 문제: a로 이동, b로 이동은 a태그를 사용하면 안됩니다.
    // 이유는 a태그를 사용하면 페이지가 새로고침 되기 때문입니다.
    return (
        <>
            <a href="/a">a로 이동</a>
            <a href="/b">b로 이동</a>
            <h1>Home</h1>
        </>
    )
}

export default Home;