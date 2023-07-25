import "./App.css";
import List from "./components/List/List";
import Input from "./components/Input/Input";
import image from "./assets/illustration-sign-up-desktop.svg";
import Modal from "./components/Modal/Modal";
import { useState } from "react";

function App() {
  const [subscribedEmail, setSubscribedEmail] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubscribe = (email) => {
    setSubscribedEmail(email);
    setShowModal(true);
  };

  const handleDismiss = () => {
    setShowModal(false);
  };

  return (
    <>
      {!showModal ? (
        <main className="main">
          <div className="left__container">
            <h1 className="title">Stay updated!</h1>
            <p className="main__text">
              Join 60,000+ product managers receiving monthly updates on:
            </p>
            <List />
            <Input onSubscribe={handleSubscribe} />
          </div>
          <div className="right__container">
            <img src={image} alt="" />
          </div>
        </main>
      ) : (
        <Modal email={subscribedEmail} onDismiss={handleDismiss} />
      )}
    </>
  );
}

export default App;
