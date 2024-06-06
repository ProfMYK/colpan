import { useEffect, useState } from "react";

function Question(props) {
  const {image, end, setCq, cq, answers, setAnswers} = props;
  let [ca, setCa] = useState(-1);

  function next() {
    if (cq === 4) {
      setCq(0);
      setCa(answers[0]);
    } else {
      setCq(cq+1)
      setCa(answers[cq+1]);
    }
    console.log("ans: ", answers[cq]);
    console.log("ca: ", ca);
  } 

  function previous() {
    if (cq === 0) {
      setCq(4);
      setCa(answers[4]);
    } else {
      setCq(cq-1)
      setCa(answers[cq-1]);
    }
    console.log("ans: ", answers[cq]);
    console.log("ca: ", ca);
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

  useEffect(() => {
    console.log("bruh " + ca)
  })

  return (
    <div className="flex flex-col h-[90vh] w-screen mt-5">
      <div className="h-[10%] w-screen flex justify-between px-5">
        <button className="h-full w-[10%] bg-primary rounded-md hover:bg-primaryDark transition-all duration-300" onClick={previous}>Önceki</button>
        <button className="h-full w-[10%] bg-primary rounded-md hover:bg-primaryDark transition-all duration-300" onClick={end}>Bitir</button>
        <button className="h-full w-[10%] bg-primary rounded-md hover:bg-primaryDark transition-all duration-300" onClick={next}>Sonraki</button>
      </div>
      <div className="h-[80%] w-screen flex items-center justify-center p-10">
        <img src={image} width="" className="rounded-xl"/>
      </div>
      <div className="h-[10%] w-screen flex gap-6 px-5">
        <button onClick={A} className={(ca !== 0 && "bg-primary") + " " + (ca === 0 && "bg-secondary") + " h-full w-full rounded-md hover:bg-primaryDark transition-all duration-300"}>A</button>
        <button onClick={B} className={(ca !== 1 && "bg-primary") + " " + (ca === 1 && "bg-secondary") + " h-full w-full rounded-md hover:bg-primaryDark transition-all duration-300"}>B</button>
        <button onClick={C} className={(ca !== 2 && "bg-primary") + " " + (ca === 2 && "bg-secondary") + " h-full w-full rounded-md hover:bg-primaryDark transition-all duration-300"}>C</button>
        <button onClick={D} className={(ca !== 3 && "bg-primary") + " " + (ca === 3 && "bg-secondary") + " h-full w-full rounded-md hover:bg-primaryDark transition-all duration-300"}>D</button>
        <button onClick={E} className={(ca !== 4 && "bg-primary") + " " + (ca === 4 && "bg-secondary") + " h-full w-full rounded-md hover:bg-primaryDark transition-all duration-300"}>E</button>
      </div>
    </div>
  )
}

export default Question;