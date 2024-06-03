import { doc, updateDoc, increment } from "firebase/firestore"
import { db } from "./firebase"

function LessonPage(props) {
  function handleBackButton() {
    props.setToggle(0)
  }

  async function openAnimation() {
    props.setToggle(2)
    console.log(props.card)
    await updateDoc(doc(db, "lessons", props.card.id), {
      views: increment(1),
    })
  }

  return (
    <div className="h-screen w-screen flex justify-center items-center p-[100px]">
      <div className="w-full h-full flex items-left justify-center gap-[30px] flex-col pr-[100px]">
        <h1 className="font-bold font-serif text-6xl">{props.card.title}</h1>
        <p className="font-sans text-sm">{props.card.description_long}</p>
        <button className="bg-primary w-fit font-serif text-4xl font-bold p-5 rounded-2xl shadow-lg hover:bg-primaryDark transition-all duration-300" onClick={openAnimation} >ANIMASYONA BASLA</button>
        <button className="bg-test-1 w-fit font-serif text-2xl font-semibold p-5 rounded-2xl shadow-lg hover:bg-primaryDark transition-all duration-300" onClick={handleBackButton}>GERI</button>
      </div>
      <div className="w-[100%] h-[800px] bg-test-2"></div>
    </div>
  )
}

export default LessonPage;