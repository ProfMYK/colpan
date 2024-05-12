function HeaderUserButtons(props) {
  const user = props.user;

  if (user === null) {
    return null;
  }
  return (
    <div className="flex items-center gap-5">
      <div className="text-foreground-primary text-sm font-semibold">{user.displayName}</div>
      <button onClick={props.handleLogout}>
        <img src={user.providerData[0].photoURL} alt="user" className="w-10 h-10 rounded-full" />
      </button>
    </div>
  );
}

export default HeaderUserButtons;