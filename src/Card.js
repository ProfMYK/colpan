import './card.css'

function Card(props) {
  let { description, image, title, views, description_long, videoURL, cardID, questions, solutions } = props;

  function handleStartButton() {
    console.log("pressed " + title)
    props.setToggle(1)
    props.setCard({
      title: title,
      description_long: description_long,
      videoURL: videoURL,
      id: cardID, 
      views: views,
      questions: questions,
      solutions: solutions,
    })
  }

  return (
    <div className="w-[1fr] h-[400px] bg-white rounded-[2rem] shadow-2xl m-5">
      <img src={image} alt="Card" className="w-full h-[40%] object-cover rounded-t-[2rem]" />
      <div className="w-full h-[60%] flex items-start justify-center flex-col p-5 gap-3">
        <h1 className="text-foreground-primary text-base font-bold">{views} <snap className="text-foreground-secondary font-normal">izlenme</snap></h1>
        <h1 className="text-foreground-primary text-3xl font-bold font-serif">{title}</h1>
        <p className="text-foreground-secondary text-md">{description}</p>
        <button className="w-[50%] h-[50px] bg-primary text-foreground-secondary text-xl font-semibold rounded-xl shadow-lg transition-all hoverEffect" onClick={handleStartButton}>Başla</button>
      </div>
    </div>
  );
}

export default Card;