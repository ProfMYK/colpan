import { useState } from "react"
import LessonPage from "./LessonPage"
import LessonSelection from "./LessonSelection"
import AnimationPage from "./AnimationPage";
import TestPage from "./TestPage";
import Simulator from "./Simulator"

function Lessons() {
  const [state, setToggle] = useState(0);
  const [card, setCard] = useState();

  console.log(card)
  console.log("state", state)

  const [cq, setCq] = useState(0);

  return (
    <>
      {state === 0 && <LessonSelection setToggle={setToggle} setCard={setCard} setCq={setCq} />}
      {state === 1 && <LessonPage setToggle={setToggle} card={card} /> }
      {state === 2 && <AnimationPage setToggle={setToggle} url={card.videoURL} />}
      {state === 3 && <TestPage card={card} setState={setToggle} cq={cq}/>}
      {state === 4 && <Simulator card={card} setToggle={setToggle}/>}
    </>
  )
}

export default Lessons;