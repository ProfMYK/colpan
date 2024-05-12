import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import auth from "./firebase";

function LoginForm() {
  function createUser() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      });
  }

  return (
    <div className="h-screen w-screen bg-bullshit left-0 right-0 m-0 fixed flex items-center justify-center">
      <div className="w-[400px] h-[500px] bg-background-primary rounded-xl shadow-xl flex items-center justify-center flex-col gap-[20px]">
        <div className="text-foreground-primary text-3xl font-bold">Giriş Yap</div>
        <button className="w-[80%] h-[50px] bg-primary text-foreground-secondary text-xl font-semibold rounded-xl shadow-xl transition-all" onClick={createUser}>Google ile Giriş Yap</button>
      </div>
    </div>
  );
}

export default LoginForm;