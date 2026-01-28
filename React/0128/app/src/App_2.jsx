import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./Home";
import A from "./A";
import B from "./B";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/a",
        element: <A name='hojun' age={10} />
    },
    {
        path: "/b",
        element: <B name='gildong' age={20} />
    }
])


function App() {

    return <RouterProvider router={router}/>
}

export default App