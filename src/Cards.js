import Card from './Card';

function Cards (props) {
  const { cards } = props;
  console.log("cards:", cards)
  return (
    <div className="w-screen h-auto grid grid-cols-6 px-5">
      {cards.map((card, index) => (
        <Card
          description={card.description}
          views={card.views}
          image={card.image}
          title={card.title}
          key={card.id}
          setToggle={props.setToggle}
          setCard={props.setCard}
          description_long={card.description_long}
          videoURL={card.videoURL}
          cardID={card.id}
          questions={card.questions}
          solutions={card.solutions}
        />
      ))}
    </div>
  );
}

export default Cards;