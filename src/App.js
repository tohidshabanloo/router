import "./App.css";

import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import E404 from "./components/E404/E404";

function App() {
  //   const jsonProps = {
  //     isShow: false,
  //     pComponent: <p>Hi</p>,
  //   };
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="p/:id/:index/:name/abc" element={<About />} />
          <Route path="*" element={<E404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
