// <!DOCTYPE html>
// <html>
//   <head>
//     <meta charset="UTF-8" />
//     <title>리액트 1분만에 추가해보기!</title>
//   </head>
//   <body>
//     <header>난 해더야!</header>
//     <main>난 메인이야!</main>
//     <footer>나는 푸터야!</footer>
//   </body>
// </html>

// function Header() {
//   return (
//     <header>난 해더야!</header>
//   )
// }

// function Main() {
//   return (
//     <main>난 메인이야!</main>
//   )
// }

// function Footer() {
//   return (
//     <footer>나는 푸터야!</footer>
//   )
// }

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <h1>hello world</h1>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
