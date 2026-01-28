import {
    createBrowserRouter, 
    Link, 
    RouterProvider,
    useParams
} from "react-router-dom";

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
    }, 
    {
        path: "blog/:test1/:test2/:test3",
        element: <Test/>
    }
])

// 다 하신 분은 /blog/hello/world/jeju 해보세요.


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
    const { id } = useParams();
    return <h1>Blog Post {id}</h1>
}

function Test() {
    const 나변수 = useParams();
    console.log(나변수);
    const { test1, test2, test3 } = useParams();
    return <h1>Test {test1}, {test2}, {test3}</h1>
}

export default App
