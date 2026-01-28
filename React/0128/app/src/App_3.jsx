import {createBrowserRouter, Link, RouterProvider} from "react-router-dom";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/a",
        element: <A/>
    },
    {
        path: "/b",
        element: <B/>
    }
])


function App() {

    return <RouterProvider router={router}/>
}

function Home() {
    // 문제: a로 이동, b로 이동은 a태그를 사용하면 안됩니다.
    // 이유는 a태그를 사용하면 페이지가 새로고침 되기 때문입니다.
    // 그래서 리액트 라우터에서 제공하는 Link 컴포넌트를 사용해야 합니다.
    return (
        <>
            <h1>Home</h1>
            <nav>
                <Link to="/a">A로 이동!</Link>
                <Link to="/b">B로 이동!</Link>
            </nav>
        </>
    )
}

function A() {
    return <h1>Page A</h1>
}

function B() {
    return <h1>Page B</h1>
}

export default App
