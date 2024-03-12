import React from "react";
import Slider from "./../../components/Slider";


function Content(props: {
  video: HTMLVideoElement,
}): JSX.Element {
  console.log("Injected Content")
  console.log(globalThis);

  const [msg, setMsg] = React.useState("");

  React.useEffect(() => {
    chrome.runtime.sendMessage({ msg }, (res) => {
      console.log(res.answer);
    })
  }, [msg])

  return <div className="my-2 lg-my-4">
  </div>
}


export default Content;
