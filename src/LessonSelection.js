import SearchBar from './SearchBar';
import Cards from './Cards';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';
import { useEffect, useState } from 'react';

function LessonSelection(props) {
  const [cards, setCards] = useState([]);


  useEffect(() => {
    getDocs(collection(db, 'lessons')).then((querySnapshot) => {
      console.log("query: ", querySnapshot)
      setCards(querySnapshot.docs.map((doc) => doc.data()));
    });
  
    console.log("cards (lesson selection): " ,cards);
    console.log("debug")
  },
  []
  )
  return (
    <div className="w-screen h-[94%]">
      <SearchBar />
      <Cards cards={cards} setToggle={props.setToggle} setCard={props.setCard} setCq={props.setCq} />
    </div>
  );
}

export default LessonSelection;