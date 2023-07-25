import "./App.css";
import List from "./components/List/List";
import Input from "./components/Input/Input";
import Btn from "./components/Btn/Btn";
import image from "./assets/illustration-sign-up-desktop.svg";

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
          <Btn />
        </div>
        <div className="right__container">
          <img src={image} alt="" srcset="" />
        </div>
      </main>
    </>
  );
}

export default App;
