import "./App.css";
import List from "./components/List/List";
import Input from "./components/Input/Input";
import image from "./assets/illustration-sign-up-desktop.svg";
import imageMobile from "./assets/illustration-sign-up-mobile.svg";
import Modal from "./components/Modal/Modal";
import { useEffect, useState } from "react";

function App() {
  const [subscribedEmail, setSubscribedEmail] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

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
            {windowWidth < 821 ? (
              <img
                src={imageMobile}
                alt="flat disegned graphics of screen, and some dashboards"
              />
            ) : (
              <img
                src={image}
                alt="flat disegned graphics of screen, and some dashboards"
              />
            )}
          </div>
        </main>
      ) : (
        <Modal email={subscribedEmail} onDismiss={handleDismiss} />
      )}
    </>
  );
}

export default App;
