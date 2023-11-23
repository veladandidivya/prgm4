import User from "./User";

function App() {
 const data={
    "name":"roja",
    "age":"23"

  }
  return (
    <div className="App">
    <h1>hello</h1>
    <User  data={data}/>
      
    </div>
  );
}

export default App;
