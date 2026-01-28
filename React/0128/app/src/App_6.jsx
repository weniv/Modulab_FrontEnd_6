import {
    createBrowserRouter, 
    Link, 
    RouterProvider,
    useParams,
    useSearchParams
} from "react-router-dom";

// 내가 처리하고 싶은 URL
// /test?name=kim&age=20

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
    const [searchParams] = useSearchParams();
    console.log(searchParams);
    console.log(searchParams.get("name"));
    console.log(searchParams.get("age"));

    const name = searchParams.get("name");
    const age = searchParams.get("age");

    return (
        <>
            <h1>Test</h1>
            <p>name: {name}</p>
            <p>age: {age}</p>
        </>
    )
}

export default App
