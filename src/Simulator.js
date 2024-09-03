import { Unity, useUnityContext } from "react-unity-webgl";

function Simulator(props) {
  function goBack () {
    props.setToggle(0);
  }

  console.log(props.url);

  const { unityProvider } = useUnityContext({
    loaderUrl: "https://firebasestorage.googleapis.com/v0/b/teknofest-colpan.appspot.com/o/fizik%20build%2FBuild%2Ffizik%20webgl%20build.loader.js?alt=media&token=89efdffe-431e-4f97-be96-d61b423bdb6b",
    dataUrl: "https://firebasestorage.googleapis.com/v0/b/teknofest-colpan.appspot.com/o/fizik%20build%2FBuild%2Ffizik%20webgl%20build.data?alt=media&token=24a470a5-54a0-4116-9ba4-015a5a02806f",
    frameworkUrl: "https://firebasestorage.googleapis.com/v0/b/teknofest-colpan.appspot.com/o/fizik%20build%2FBuild%2Ffizik%20webgl%20build.framework.js?alt=media&token=aad51500-8f4b-4492-af8d-f276eb451aba",
    codeUrl: "https://firebasestorage.googleapis.com/v0/b/teknofest-colpan.appspot.com/o/fizik%20build%2FBuild%2Ffizik%20webgl%20build.wasm?alt=media&token=d968a423-8401-4537-ad5a-62df6a6069f8",
  });

  return (
    <>
      <div className="flex h-screen w-screen flex-col items-center justify-center gap-10">
        <div className="h-[540px] w-[960px] border-background-secondary">
          <iframe src="https://firebasestorage.googleapis.com/v0/b/teknofest-colpan.appspot.com/o/fizik%20build%2Findex.html?alt=media&token=97f4471f-c857-4c80-8839-8360f2857554" height="550px" width="960px"></iframe>
        </div>
        <button className="bg-primary text-2xl font-serif font-bold w-[20.3vw] h-[7vh] hover:bg-primaryDark rounded-md" onClick={goBack}>BITIR</button>
      </div>
    </>
  );
}

export default Simulator;