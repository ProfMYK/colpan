function Card() {
  return (
    <div className="w-[1fr] h-[400px] bg-white rounded-[2rem] shadow-2xl m-5">
      <img src={require("./main_menu_image.png")} alt="Card" className="w-full h-[40%] object-cover rounded-t-[2rem]" />
      <div className="w-full h-[60%] flex items-start justify-center flex-col p-5 gap-5">
        <h1 className="text-foreground-primary text-base font-bold">10k <snap className="text-foreground-secondary font-normal">izlenme</snap></h1>
        <p className="text-foreground-secondary text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button className="w-[50%] h-[50px] bg-primary text-foreground-secondary text-xl font-semibold rounded-xl shadow-lg transition-all">Başla</button>
      </div>
    </div>
  );
}

export default Card;