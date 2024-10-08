function Cevaplar(props) {
  let {solutions, image, index, setState, end} = props;

  const turn = {
    0: "A",
    1: "B",
    2: "C",
    3: "D",
    4: "E",
  }

  function devam() {
    end()
  }

  console.log(props)

  return (
    <div className="h-[94%] flex gap-10 flex-col">
      <div className="h-[10%] w-screen flex justify-between px-5 my-5">
        <button className="h-full w-[100%] bg-primary rounded-md hover:bg-primaryDark transition-all duration-300 text-3xl font-bold font-serif" onClick={devam}>Devam</button>
      </div>
      <div className="h-[60%] w-screen flex items-center justify-center p-10 my-5">
        <img src={image} width={(image === "https://firebasestorage.googleapis.com/v0/b/teknofest-colpan.appspot.com/o/photos%2Fanim1soru1cevapC.jpeg?alt=media&token=a8863bdf-bbe6-4c28-a360-c50051ff8c77" && " 25% ") || (image !== "https://firebasestorage.googleapis.com/v0/b/teknofest-colpan.appspot.com/o/photos%2Fanim1soru1cevapC.jpeg?alt=media&token=a8863bdf-bbe6-4c28-a360-c50051ff8c77" && " 50% ")} className="rounded-xl"/>
      </div>
      <div className="h-[10%] w-screen flex gap-6 px-5 text-foreground-primary text-lg">
        {solutions[index]}
      </div>
    </div>
  );
}

export default Cevaplar;