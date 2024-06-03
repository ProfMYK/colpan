import { useState } from "react"
import LessonPage from "./LessonPage"
import LessonSelection from "./LessonSelection"
import AnimationPage from "./AnimationPage";

function Lessons() {
  const [state, setToggle] = useState(0);
  const [card, setCard] = useState();

  console.log(card)

  return (
    <>
      {state === 0 && <LessonSelection setToggle={setToggle} setCard={setCard} />}
      {state === 1 && <LessonPage setToggle={setToggle} card={card} /> }
      {state === 2 && <AnimationPage setToggle={setToggle} url={card.videoURL} />}
    </>
  )
}

export default Lessons;