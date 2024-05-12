function HeaderLoginButtons(props) {
  return (
    <div className="mr-5">
      <button className="text-foreground-secondary px-4 py-2 rounded-md text-sm hover:underline" onClick={props.handleLoginClick}>Giriş</button>
      <button className="text-foreground-secondary bg-primary px-4 py-2 rounded-md text-sm shadow-lg transition-all" onClick={props.handleLoginClick}>Kaydol</button>
    </div>
  );
}

export default HeaderLoginButtons;