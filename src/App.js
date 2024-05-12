import { useEffect, useState } from "react";
import Header from "./Header";
import Lessons from "./Lessons";
import HomePage from "./HomePage";
import LoginForm from "./LoginForm";
import auth from "./firebase";

function App() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  function handleLoginClick({ key }) {
    if (key === 'Escape') {
      setShowLoginForm(false);
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleLoginClick);

    auth.onAuthStateChanged((user) => {
      if (user !== null) {
        setShowLoginForm(false);
        setIsLoggedIn(true);
        setUser(user);
      } else {
        setIsLoggedIn(false);
        setUser(null);
      }
      console.log(user)
    });

    console.log(isLoggedIn)
  });

  return (
    <>
      <div className='bg-background-secondary w-screen h-screen absolute left-0 right-0'>
        <Header setShowLoginForm={setShowLoginForm} isLoggedIn={isLoggedIn} user={user} setIsLoggedIn={setIsLoggedIn} />
        {!isLoggedIn ? <HomePage setShowLoginForm={setShowLoginForm} /> : <Lessons />}
      </div>
      {showLoginForm && <LoginForm />}
    </>
  );
}

export default App;
