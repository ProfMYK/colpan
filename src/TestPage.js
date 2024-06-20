import { useState } from "react";
import Question from "./Question"
import Cevaplar from "./Cevaplar";

function TestPage(props) {
  let [state, setState] = useState(0);
  let [index, setIndex] = useState(0);
  function end() {
    setState(1);
  }

  function riyalEnd() {
    props.setState(1)
  }

  const questions_old = props.card.questions;
  let questions = []
  let rightAnswers = [];
  for (let i = 0; i < questions_old.length; i+=2) {
    let a = {
      image: questions_old[i],
      answer: questions_old[i+1],
    }

    rightAnswers.push(a.answer)

    questions.push(a)
  }

  let [cq, setCq] = useState(0);

  let [answers, setAnswers] = useState([-1,-1,-1,-1,-1])

  return (
    <>
      <div className="h-[94%] w-screen">
        {state === 0 && (
          <Question
            image={questions[cq].image}
            answer={questions[cq].answer}
            setCq={setCq}
            cq={cq}
            answers={answers}
            setAnswers={setAnswers}
            end={riyalEnd}
            setState={setState}
          ></Question>
        )}
        {state === 1 && (
          <Cevaplar
            answer={answers}
            rightAnswers={rightAnswers}
            riyalEnd={riyalEnd}
            solutions={props.card.solutions}
            index={cq-1}
            image={questions[cq-1].image}
            setState={setState}
            end={riyalEnd}
          />
        )}
      </div>
    </>
  );
}

export default TestPage;