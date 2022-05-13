import logo from "./logo.svg";
import "./App.css";
import Comp from "./components/Comp";

function App() {
  const jsonProps ={
    isShow:false,
    pComponent: <p>Hi</p>
  }
  return (
    <div className="App">
      <div>Home</div>
      {/* <Comp isShow={true} pComponent={<p>Hi</p>}>
        <h1>Hello</h1>
      </Comp> */}
        <Comp {... jsonProps}><h1>Hello</h1></Comp>
    </div>
  );
}

export default App;
