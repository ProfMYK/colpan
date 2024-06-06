function Cevaplar(props) {
  let {answers, rightAnswers, riyalEnd, solutions} = props;

  const turn = {
    0: "A",
    1: "B",
    2: "C",
    3: "D",
    4: "E",
  }

  console.log(props)

  return (
    <div className="h-screen flex gap-10 flex-col">
      <div className="w-screen p-10 h-[70vh] flex flex-row gap-10">
        <div className="h-[70vh] w-[20%] grid grid-rows-5 grid-cols-2 gap-2 grid-flow-col">
          {answers.map((answer, index) => (
            <div
              className={
                (answer === rightAnswers[index] && "bg-test-2") +
                " " +
                (answer !== rightAnswers[index] && "bg-test-1") +
                " text-center p-10 text-3xl rounded-md"
              }
            >
              {turn[answer]}
            </div>
          ))}
          {rightAnswers.map((answer, index) => (
            <div
              className={
                (answer === answers[index] && "bg-test-2") +
                " " +
                (answer !== answers[index] && "bg-test-1") +
                " text-center p-10 text-3xl rounded-md"
              }
            >
              {turn[answer]}
            </div>
          ))}
        </div>
        <div className="h-[70vh] w-[80%] grid grid-rows-5 grid-cols-1 gap-2 grid-flow-col">
          {solutions.map((solution, index) => (
            <div className={"bg-primary text-left p-5 text-md rounded-xl"}>
              {solution}
            </div>
          ))}
        </div>
      </div>
      <button
        className="w-[96%] h-[10vh] bg-secondary text-5xl font-serif ml-10 mt-5 rounded-xl"
        onClick={riyalEnd}
      >
        BITIR
      </button>
    </div>
  );
}

export default Cevaplar;