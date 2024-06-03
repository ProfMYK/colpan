import ReactPlayer from "react-player";

function AnimationPage(props) {
  function goBack () {
    props.setToggle(1);
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
      <button className="bg-test-1 text-2xl font-serif font-bold w-[10.3vw] h-full" onClick={goBack}>GERI</button>
      </div>
    </>
  );
}

export default AnimationPage;