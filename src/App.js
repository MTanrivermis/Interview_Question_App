import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
import Question from "./components/Question";
import data from "./helper/data";

function App() {
  return (
    <div className="App">
      <Header />

      {data.map((items, i) => {
        return (
          <div key={i}>
            <Question {...items} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
