import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import OurSpecials from "./pages/OurSpecials";
import Programs from "./pages/Programs";
import Testimonial from "./pages/Testimonial";

function App() {
  return (
    <div className="font-body">
      <Header />
      <div className=" px-5 md:px-8 mx-auto max-w-7xl">
        <Home/>
        <About/>
        <OurSpecials/>
        <Programs/>
        <Testimonial/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
