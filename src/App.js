import { useEffect, useState } from "react";
import Header from "./Header";
import Lessons from "./Lessons";
import HomePage from "./HomePage";
import LoginForm from "./LoginForm";
import { auth } from "./firebase";
import AnimationPage from "./AnimationPage";
import About from "./About";

function App() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [pageState, setPageState] = useState(0);
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
        <Header setShowLoginForm={setShowLoginForm} isLoggedIn={isLoggedIn} user={user} setIsLoggedIn={setIsLoggedIn} setPageState={setPageState} />
        {(pageState === 0 || !isLoggedIn) && <HomePage setShowLoginForm={setShowLoginForm} isLoggedIn={isLoggedIn} setPageState={setPageState} />}
        {pageState === 1 && isLoggedIn && <Lessons />}
        {pageState === 2 && <About />}
        {pageState === 3 && <About />}
      </div>
      {showLoginForm && <LoginForm />}
    </>
  );
  
}

export default App;
