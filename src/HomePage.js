function HomePage(props) {
  function handleLoginClick() {
    props.setShowLoginForm(true);
  }

  return (
    <div className="w-full h-[94%] flex items-center justify-center bg-background-primary">
      <div className="w-[60%] h-full flex items-start justify-center flex-col p-[110px] gap-[35px]">
        <div className="text-foreground-primary text-[85px] leading-[90px] font-bold w-[100%] font-serif">Animasyonlarla Öğrenmenizi Hızlandırın</div>
        <button className="text-foreground-secondary bg-primary px-4 py-2 rounded-xl shadow-xl transition-all w-[330px] h-[80px] text-3xl font-semibold" onClick={handleLoginClick}>Hemen Başlayın</button>
        <p className="text-foreground-secondary text-base w-[80%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc tincidunt aliquam. Nullam nec purus nec nunc tincidunt aliquam.</p>
        <div className="w-[70%] bg-background-secondary h-[9%] text-foreground-secondary flex items-center justify-center rounded-xl p-2 shadow-xl">
          <input type="text" placeholder="10'dan fazla animasyon keşfedin" className="w-[80%] h-full bg-transparent text-foreground-secondary text-base px-5" />
          <button className="w-[20%] h-full bg-secondary text-background-secondary rounded-xl">Ara</button>
        </div>
        <div className="w-[70%] flex items-center justify-between">
          <button className="w-[15%] h-[40px] bg-primary text-foreground-secondary text-xs rounded-xl shadow-xl transition-all font-semibold">Yer Çekimi</button>
          <button className="w-[15%] h-[40px] bg-primary text-foreground-secondary text-xs rounded-xl shadow-xl transition-all font-semibold">Ivme</button>
          <button className="w-[15%] h-[40px] bg-primary text-foreground-secondary text-xs rounded-xl shadow-xl transition-all font-semibold">Konum</button>
          <button className="w-[15%] h-[40px] bg-primary text-foreground-secondary text-xs rounded-xl shadow-xl transition-all font-semibold">Hız</button>
        </div>
      </div>
      <div className="w-[40%] h-full flex items-center justify-center font-serif">
        <img src={require("./main_menu_image.png")} />
      </div>
    </div>
  )
}

export default HomePage;