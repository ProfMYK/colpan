import { useEffect, useState } from "react";

function Question(props) {
  const {image, end, setCq, cq, answers, setAnswers, answer, setState} = props;
  let [ca, setCa] = useState(-1);

  function next() {
    setCq(cq + 1);
    if (ca !== answer) {
      setState(1);
    } else if (cq === 4) {
      end();
    }
    setCa(-1);
  } 

  function A() {
    let otizm = answers;
    otizm[cq] = 0;
    setAnswers(otizm)
    setCa(0)
  }
  function B() {
    let otizm = answers;
    otizm[cq] = 1;
    setAnswers(otizm)
    setCa(1)
  }
  function C() {
    let otizm = answers;
    otizm[cq] = 2;
    setAnswers(otizm)
    setCa(2)
  }
  function D() {
    let otizm = answers;
    otizm[cq] = 3;
    setAnswers(otizm)
    setCa(3)
  }
  function E() {
    let otizm = answers;
    otizm[cq] = 4;
    setAnswers(otizm)
    setCa(4)
  }

  return (
    <div className="flex flex-col h-[90vh] w-screen pt-5">
      <div className="h-[10%] w-screen flex justify-between px-5">
        <button className="h-full w-[100%] bg-primary rounded-md hover:bg-primaryDark transition-all duration-300 text-3xl font-serif font-bold" onClick={next}>Kontrol Et</button>
      </div>
      <div className="h-[80%] w-screen flex items-center justify-center p-10">
        <img src={image} width={(image === "https://firebasestorage.googleapis.com/v0/b/teknofest-colpan.appspot.com/o/photos%2Fanim1soru1cevapC.jpeg?alt=media&token=a8863bdf-bbe6-4c28-a360-c50051ff8c77" && " 25% ") || (image !== "https://firebasestorage.googleapis.com/v0/b/teknofest-colpan.appspot.com/o/photos%2Fanim1soru1cevapC.jpeg?alt=media&token=a8863bdf-bbe6-4c28-a360-c50051ff8c77" && " 50% ")} className="rounded-xl"/>
      </div>
      <div className="h-[10%] w-screen flex gap-6 px-5">
        <button onClick={A} className={(ca !== 0 && "bg-primary hover:bg-primaryDark") + " " + (ca === 0 && "bg-secondary hover:bg-secondaryDark") + " h-full w-full rounded-md transition-all duration-300 font-bold text-2xl"}>A</button>
        <button onClick={B} className={(ca !== 1 && "bg-primary hover:bg-primaryDark") + " " + (ca === 1 && "bg-secondary hover:bg-secondaryDark") + " h-full w-full rounded-md transition-all duration-300 font-bold text-2xl"}>B</button>
        <button onClick={C} className={(ca !== 2 && "bg-primary hover:bg-primaryDark") + " " + (ca === 2 && "bg-secondary hover:bg-secondaryDark") + " h-full w-full rounded-md transition-all duration-300 font-bold text-2xl"}>C</button>
        <button onClick={D} className={(ca !== 3 && "bg-primary hover:bg-primaryDark") + " " + (ca === 3 && "bg-secondary hover:bg-secondaryDark") + " h-full w-full rounded-md transition-all duration-300 font-bold text-2xl"}>D</button>
        <button onClick={E} className={(ca !== 4 && "bg-primary hover:bg-primaryDark") + " " + (ca === 4 && "bg-secondary hover:bg-secondaryDark") + " h-full w-full rounded-md transition-all duration-300 font-bold text-2xl"}>E</button>
      </div>
    </div>
  )
}

export default Question;