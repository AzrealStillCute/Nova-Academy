import Header from "./components/header"
import About from "./pages/About"
import Home from "./pages/Home"

function App() {

  return (
    <>
      <div className=" pt-4 px-5 md:px-7">
        <Header/>
        <div className=" w-full h-px mt-3 bg-gray-200"></div>
        <div className=" max-w-7xl flex m-auto flex-col">
          <Home/>
          <About/>
        </div>
      </div>
    </>
  )
}

export default App
