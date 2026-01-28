import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,
} from 'react-router-dom';
 
const router = createBrowserRouter([
  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      {
        path: 'main',
        element: <MainContent />,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
    ],
  },
]);
 
function App() {
  return <RouterProvider router={router} />;
}
 
function Dashboard() {
  return (
    <div>
      <h1>대시보드</h1>
      <nav>
        <Link to="/dashboard/main">홈</Link>
        <Link to="/dashboard/settings">설정</Link>
        <Link to="/dashboard/profile">프로필</Link>
      </nav>
      {/* 자식 라우트가 이 위치에 렌더링됩니다 */}
      <Outlet />
      <p>hello world</p>
    </div>
  );
}
 
function MainContent() {
  return <p>메인 내용</p>;
}
 
function Settings() {
  return <p>설정창</p>;
}
 
function Profile() {
  return <p>유저프로필</p>;
}
 
export default App;