function SearchBar(props) {
  return (
    <div className="w-full h-[6rem] flex items-center justify-between p-5 gap-[8%]">
      <h1 className="text-5xl font-bold text-foreground-primary ml-5 font-serif">Animasyonlar</h1>
      <div className="w-full bg-white h-full text-foreground-secondary flex items-center justify-center rounded-xl p-2 shadow-2xl gap-2">
        <input type="text" placeholder="10'dan fazla animasyon keşfedin" className="w-[90%] h-full bg-transparent text-foreground-secondary text-base px-5" />
        <button className="w-[10%] h-full bg-secondary text-background-secondary rounded-xl hover:bg-secondaryDark transition-all shadow-sm">Ara</button>
      </div>
    </div>
  );
}

export default SearchBar;