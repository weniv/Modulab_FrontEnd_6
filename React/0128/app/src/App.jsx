import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,
} from 'react-router-dom';

//(구현완료) - / (<Home/>): 홈 화면을 보여줍니다.
//(구현완료) - /blog (<BlogList/>): 블로그 글 목록을 보여줍니다.
// - /blog?category=카테고리명&page=페이지번호 : 특정 카테고리의 블로그 글 목록을 페이지네이션과 함께 보여줍니다. (예: /blog?category=tech&page=2)
//(구현완료) - /blog/:id (<BlogDetail/>): 특정 블로그 글의 상세 내용을 보여줍니다. (예: /blog/123)
//(구현완료) - /about (<About/>): 사이트 소개 페이지를 보여줍니다.
//(구현완료) - /contact (<Contact/>): 연락처 페이지를 보여줍니다.
//(구현완료) - /products (<ProductList/>): 제품 목록을 보여줍니다.
//(구현완료) - /products/:id (<ProductDetail/>): 특정 제품의 상세 정보를 보여줍니다. (예: /products/456)
//(구현완료) - /lectures (<LectureList/>): 강의 목록을 보여줍니다.
//(구현완료) - /lectures/sw (<SoftwareLectures/>): 소프트웨어 강의 목록을 보여줍니다.
//(구현완료) - /lectures/ai (<ArtificialIntelligenceLectures/>): 인공지능 강의 목록을 보여줍니다.
//(구현완료) - /lectures/data (<DataScienceLectures/>): 데이터 사이언스 강의 목록을 보여줍니다.
 
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
        {
            path: "blog",
            element: <BlogList />,      
        },
        {
            path: "blog/:id",
            element: <BlogDetail />,
        },
        {
            path: "about",
            element: <About />
        },
        {
            path: "contact",
            element: <Contact />
        },
        {
            path: "products",
            element: <ProductList />
        },
        {
            path: "products/:id",
            element: <ProductDetail />,
        },
        {
            path: "lectures",
            element: (
                <>
                    <h2>Lecture List</h2>
                    <Outlet />
                </>
            ),
            children: [
                {
                    path: "sw",
                    element: <h1>Software Lectures</h1>
                },
                {
                    path: "ai",
                    element: <h1>Artificial Intelligence Lectures</h1>
                },
                {
                    path: "data",
                    element: <h1>Data Science Lectures</h1>
                }
            ]
        }
    ]
}]);
 
function App() {
  return <RouterProvider router={router} />;
}

function Home() {
    return (
        <>
            <h1>Home</h1>
            <header>
                <nav>
                    <Link to="/">Home</Link><br/>
                    <Link to="/about">About</Link><br/>
                    <Link to="/contact">Contact</Link><br/>
                    <Link to="/products">Products</Link><br/>
                    <Link to="/blog">Blog</Link><br/>
                    <Link to="/lectures">Lectures</Link><br/>
                    <Link to="/lectures/sw">Software Lectures</Link><br/>
                    <Link to="/lectures/ai">Artificial Intelligence Lectures</Link><br/>
                    <Link to="/lectures/data">Data Science Lectures</Link><br/>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}

function BlogList() {
    // - /blog?category=카테고리명&page=페이지번호 : 특정 카테고리의 블로그 글 목록을 페이지네이션과 함께 보여줍니다.
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');
    const page = searchParams.get('page');
    // fetch같은 것으로 데이터 받아오는 작업을 해야 합니다.
    return <h1>Blog List, {category} - {page}</h1>
}

function BlogDetail() {
    return <h1>Blog Detail</h1>
}

function About() {
    return <h1>About</h1>
}

function Contact() {
    return <h1>Contact</h1>
}

function ProductList() {
    return <h1>Product List</h1>
}

function ProductDetail() {
    return <h1>Product Detail</h1>
}
 
export default App;