import "./App.css";
import List from "./components/List/List";
import Input from "./components/Input/Input";

function App() {
  return (
    <>
      <main className="main">
        <div className="left__container">
          <h1 className="title">Stay updated!</h1>
          <p className="main__text">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <List />
          <Input />
        </div>
        <div className="right__container"></div>
      </main>
    </>
  );
}

export default App;
