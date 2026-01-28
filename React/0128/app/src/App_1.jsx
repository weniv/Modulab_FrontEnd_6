import {createBrowserRouter, RouterProvider} from "react-router-dom";

// createBrowserRouter : 라우터 객체를 생성하는 함수입니다. 배열 형태로 라우트 설정을 전달하며, 각 라우트는 path(경로)와 element(렌더링할 컴포넌트)를 포함합니다.
// const router = createBrowserRouter([
//   {
//     path: '/products', // URL 경로
//     element: <Products />, // 렌더링할 컴포넌트
//     loader: productsLoader, // 데이터 로딩 함수 (선택)
//     errorElement: <Error />, // 에러 발생 시 표시할 컴포넌트 (선택)
//     children: [
//       // 중첩 라우트 (선택)
//       {
//         path: ':id',
//         element: <ProductDetail />,
//       },
//     ],
//   },
// ]);
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

// RouterProvider : 생성된 라우터 객체를 받아 애플리케이션에 라우팅 기능을 제공하는 컴포넌트입니다. router props로 라우터 객체를 전달합니다.
function App() {

    return <RouterProvider router={router}/>
}

function Home() {
    return <h1>Home</h1>
}

function A() {
    return <h1>Page A</h1>
}

function B() {
    return <h1>Page B</h1>
}

export default App
