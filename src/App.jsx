import { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  const [isClick, setIsClick] = useState(false);

  return (
    <div
      className={` font-body overflow-x-hidden ${
        isClick ? " overflow-hidden h-screen" : ""
      }`}
    >
      <Header isClick={isClick} setIsClick={setIsClick} />
      <div className=" px-5">
        <Home />
      </div>
    </div>
  );
}

export default App;
