import './card.css'

function Card(props) {
  let { description, image, title, views, description_long, videoURL, cardID, questions, solutions, thumbnail } = props;

  function handleStartButton() {
    console.log("pressed " + title)
    props.setToggle(2)
    props.setCard({
      title: title,
      description_long: description_long,
      videoURL: videoURL,
      id: cardID, 
      views: views,
      questions: questions,
      solutions: solutions,
      thumbnail: thumbnail
    })
  }

  function handleSimulatorButton() {
    console.log("pressed " + title)
    props.setToggle(4)
    props.setCard({
      title: title,
      description_long: description_long,
      videoURL: videoURL,
      id: cardID, 
      views: views,
      questions: questions,
      solutions: solutions,
      thumbnail: thumbnail
    })
  }

  function handleHover() {
    console.log("Hover")
  }

  function handleQuestionButton1() {
    props.setCq(0);
    props.setCard({
      title: title,
      description_long: description_long,
      videoURL: videoURL,
      id: cardID, 
      views: views,
      questions: questions,
      solutions: solutions,
      thumbnail: thumbnail
    })
    props.setToggle(3);
  }
  function handleQuestionButton2() {
    props.setCq(1);
    props.setCard({
      title: title,
      description_long: description_long,
      videoURL: videoURL,
      id: cardID, 
      views: views,
      questions: questions,
      solutions: solutions,
      thumbnail: thumbnail
    })
    props.setToggle(3);
  }
  function handleQuestionButton3() {
    props.setCq(2);
    props.setCard({
      title: title,
      description_long: description_long,
      videoURL: videoURL,
      id: cardID, 
      views: views,
      questions: questions,
      solutions: solutions,
      thumbnail: thumbnail
    })
    props.setToggle(3);
  }
  function handleQuestionButton4() {
    props.setCq(3);
    props.setCard({
      title: title,
      description_long: description_long,
      videoURL: videoURL,
      id: cardID, 
      views: views,
      questions: questions,
      solutions: solutions,
      thumbnail: thumbnail
    })
    props.setToggle(3);
  }
  function handleQuestionButton5() {
    props.setCq(4);
    props.setCard({
      title: title,
      description_long: description_long,
      videoURL: videoURL,
      id: cardID, 
      views: views,
      questions: questions,
      solutions: solutions,
      thumbnail: thumbnail
    })
    props.setToggle(3);
  }

  return (
    <div className="w-[1fr] bg-white rounded-[2rem] shadow-2xl m-5 flex flex-col p-10 gap-10 hoverEffect" onMouseOver={handleHover}>
      <div className='flex flex-row gap-10 w-full top'>
        <img src={image} alt="Card" className=" aspect-square object-cover rounded-[2rem]" />
        <div className="w-full h-full flex items-start justify-center flex-col gap-5">
          {/* <h1 className="text-foreground-primary text-base font-bold">{views} <snap className="text-foreground-secondary font-normal">izlenme</snap></h1> */}
          <h1 className="text-foreground-primary text-7xl font-bold font-serif">{title}</h1>
          <p className="text-foreground-secondary text-lg">{description_long}</p>
          {/* <button className="w-[50%] h-[50px] bg-primary text-background-secondary text-xl font-semibold rounded-xl shadow-lg transition-all hoverEffect" onClick={handleStartButton}>Başla</button> */}
        </div>
      </div>
      <div className='flex flex-col gap-5 bottom'>
        <button className="w-[100%] h-[16%] bg-primary text-background-secondary text-xl font-semibold rounded-xl shadow-lg hover:bg-primaryDark transition-all duration-200" onClick={handleStartButton}>Animasyonu Izle</button>
        <button className="w-[100%] h-[16%] bg-primary text-background-secondary text-xl font-semibold rounded-xl shadow-lg hover:bg-primaryDark transition-all duration-200" onClick={handleQuestionButton1}>Soru 1</button>
        <button className="w-[100%] h-[16%] bg-primary text-background-secondary text-xl font-semibold rounded-xl shadow-lg hover:bg-primaryDark transition-all duration-200" onClick={handleQuestionButton2}>Soru 2</button>
        <button className="w-[100%] h-[16%] bg-primary text-background-secondary text-xl font-semibold rounded-xl shadow-lg hover:bg-primaryDark transition-all duration-200" onClick={handleQuestionButton3}>Soru 3</button>
        <button className="w-[100%] h-[16%] bg-primary text-background-secondary text-xl font-semibold rounded-xl shadow-lg hover:bg-primaryDark transition-all duration-200" onClick={handleQuestionButton4}>Soru 4</button>
        <button className="w-[100%] h-[16%] bg-primary text-background-secondary text-xl font-semibold rounded-xl shadow-lg hover:bg-primaryDark transition-all duration-200" onClick={handleQuestionButton5}>Soru 5</button>
        {title === "Atışlar" && <button className="w-[100%] h-[16%] bg-primary text-background-secondary text-xl font-semibold rounded-xl shadow-lg hover:bg-primaryDark transition-all duration-200" onClick={handleSimulatorButton}>Simülasyon</button>}
      </div>
    </div>
  );
}

export default Card;