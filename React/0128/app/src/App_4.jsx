import {
    createBrowserRouter, 
    Link, 
    RouterProvider,
    useParams
} from "react-router-dom";


// 아래와 같은 URL을 만든다고 가정해보겠습니다.
// /        => Home
// /blog    => blog list
// /blog/1  => 1번 게시물
// /blog/2  => 2번 게시물
// 여기서 /blog/1, /blog/2 같은 URL을 동적 라우트라고 부릅니다.

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "blog",
        element: <BlogList/>
    }, 
    {
        path: "blog/:id",
        element: <BlogPost/>
    }
])


function App() {
    return <RouterProvider router={router}/>
}

function Home() {
    return (
        <>
            <h1>Home</h1>
            <nav>
                <Link to="/blog">블로그 리스트로 이동!</Link>
            </nav>
        </>
    )
}

function BlogList() {
    return (
        <>
            <h1>Blog List</h1>
            <nav>
                <Link to="/blog/1">1번 게시물로 이동!</Link>
                <Link to="/blog/2">2번 게시물로 이동!</Link>
            </nav>
        </>
    )
}

function BlogPost() {
    // 동적 라우트로 넘어온 값 출력!
    const { id } = useParams();
    // useParams가 갑자기 어디서 튀어나왔나요? 아래와 같은 바닐라 자바스크립트 코드와 유사한 역할을 합니다.
    // const params = new URLSearchParams(window.location.pathname);
    // const id = params.get("id");
    return <h1>Blog Post {id}</h1>
}

export default App
