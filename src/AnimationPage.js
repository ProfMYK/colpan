import ReactPlayer from "react-player";

function AnimationPage(props) {
  function goBack () {
    props.setToggle(3);
  }

  console.log(props.url);

  return (
    <>
      <div className="flex h-screen w-screen">
      <ReactPlayer
        controls={true}
        width="89.7vw"
        height="100vh"
        url={props.url}
      />
      <button className="bg-primary text-2xl font-serif font-bold w-[10.3vw] h-full hover:bg-primaryDark" onClick={goBack}>TEST</button>
      </div>
    </>
  );
}

export default AnimationPage;