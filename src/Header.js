import HeaderLoginButtons from "./HeaderLoginButtons";
import HeaderUserButtons from "./HeaderUserButtons";
import auth from "./firebase";

function Header(props) {
  function handleLoginClick() {
    props.setShowLoginForm(true);
  }

  function handleLogout() {
    auth.signOut();
    console.log("debug")
  }

  return (
    <div className="w-full h-[6%] flex items-center justify-between p-5 shadow-lg border-secondary  bg-background-primary z-50">
      <div className="text-2xl font-bold text-foreground-primary ml-5">asdasd App</div>
      <div className="flex items-center justify-center gap-10">
        <a href="#" className="text-foreground-secondary hover:underline text-sm transition-all">Anasayfa</a>
        <a href="#" className="text-foreground-secondary hover:underline text-sm transition-all">Animasyonlar</a>
        <a href="#" className="text-foreground-secondary hover:underline text-sm transition-all">Hakkında</a>
        <a href="#" className="text-foreground-secondary hover:underline text-sm transition-all">Bize Ulaşın</a>
      </div>
      {!props.isLoggedIn ? <HeaderLoginButtons handleLoginClick={handleLoginClick} /> : <HeaderUserButtons user={props.user} handleLogout={handleLogout} />}
    </div>
  );
}

export default Header;