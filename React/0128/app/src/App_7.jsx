import {
    createBrowserRouter, 
    Link, 
    RouterProvider,
    useParams,
    useSearchParams
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/test",
        element: <Test/>
    }
])

function App() {
    return <RouterProvider router={router}/>
}

function Home() {
    return (
        <>
            <h1>Home</h1>
        </>
    )
}

function Test() {
    // URL 예시: /test?keyword=react&page=2&sort=popular
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get("keyword") || "";
    let page = searchParams.get("page") || "1";
    const sort = searchParams.get("sort") || "newest";

    function handleNextPage() {
        // 이 코드를 실행해보세요!
        page = parseInt(page, 10) + 1;
        console.log(page);
    }

    return (
        <>
            <h1>Test</h1>
            <p>keyword: {keyword}, page: {page}, sort: {sort}</p>
            <button onClick={handleNextPage}>다음 페이지!</button>
        </>
    )
}

export default App
