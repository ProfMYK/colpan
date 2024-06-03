import HeaderLoginButtons from "./HeaderLoginButtons";
import HeaderUserButtons from "./HeaderUserButtons";
import { auth } from "./firebase";

function Header(props) {
  function handleLoginClick() {
    props.setShowLoginForm(true);
  }

  function handleLogout() {
    auth.signOut();
    console.log("debug")
  }

  function handleHomePageClick() {
    props.setPageState(0);
  }

  function handleLessonsClick() {
    props.setPageState(1);
  }

  function handleAboutClick() {
    props.setPageState(2);
  }

  return (
    <div className="w-full h-[6%] flex items-center justify-between p-5 shadow-lg border-secondary  bg-background-primary z-50">
      <div className="text-2xl font-bold text-foreground-primary ml-5">Colpan</div>
      <div className="flex items-center justify-center gap-10">
        <a href="#" className="text-foreground-secondary hover:underline text-sm transition-all" onClick={handleHomePageClick}>Anasayfa</a>
        <a href="#" className="text-foreground-secondary hover:underline text-sm transition-all" onClick={handleLessonsClick}>Animasyonlar</a>
        <a href="#" className="text-foreground-secondary hover:underline text-sm transition-all" onClick={handleAboutClick}>Hakkında</a>
        <a href="#" className="text-foreground-secondary hover:underline text-sm transition-all">Bize Ulaşın</a>
      </div>
      {!props.isLoggedIn ? <HeaderLoginButtons handleLoginClick={handleLoginClick} /> : <HeaderUserButtons user={props.user} handleLogout={handleLogout} />}
    </div>
  );
}

export default Header;