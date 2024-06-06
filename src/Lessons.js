import { useState } from "react"
import LessonPage from "./LessonPage"
import LessonSelection from "./LessonSelection"
import AnimationPage from "./AnimationPage";
import TestPage from "./TestPage";

function Lessons() {
  const [state, setToggle] = useState(0);
  const [card, setCard] = useState();

  console.log(card)
  console.log("state", state)

  return (
    <>
      {state === 0 && <LessonSelection setToggle={setToggle} setCard={setCard} />}
      {state === 1 && <LessonPage setToggle={setToggle} card={card} /> }
      {state === 2 && <AnimationPage setToggle={setToggle} url={card.videoURL} />}
      {state === 3 && <TestPage card={card} setState={setToggle} />}
    </>
  )
}

export default Lessons;