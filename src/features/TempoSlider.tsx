import React from "react";
import Slider from "@src/components/Slider";

function TempoSlider(props: {
  video: HTMLVideoElement,
}): JSX.Element {
  const [tempo, setTempo] = React.useState(1);

  React.useEffect(() => {
    props.video.playbackRate = tempo;
    console.log(`Setting video playback rate to:
                  ${props.video.playbackRate}`);
  }, [tempo]);

  return <div className="my-2 lg-my-4">
    <Slider
      min={0.01}
      max={1.99}
      step={0.01}
      onChange={e => setTempo(Number(e.target.value))}
    />
  </div>
}


export default TempoSlider;
