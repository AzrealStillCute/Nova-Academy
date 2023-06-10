import Header from "./components/Header";
import About from "./pages/About";
import Companies from "./pages/Companies";
import Home from "./pages/Home";

function App() {
  return (
    <div className="font-body">
      <Header />
      <div className=" px-5 md:px-8 mx-auto max-w-7xl">
        <Home/>
        <Companies/>
        <About/>
      </div>
    </div>
  );
}

export default App;
