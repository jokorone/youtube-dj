import { createRoot } from 'react-dom/client';
import './style.css'
import Content from './Content';
import TempoSlider from '@src/features/TempoSlider';

function injectYoutubeDJ() {
  console.log("INJECTING...");

  const CONTAINER_ID = 'youtube-dj-container';
  // find decktarget - #below the yt video player

  const below = document.body.querySelectorAll("#below")[0];
  if (!below.hasChildNodes()) throw new Error("Can't find #below the Youtube Player :/");


  const container = document.createElement('div');
  container.id = CONTAINER_ID;

  below.insertBefore(container, below.firstChild);

  const rootContainer = document.querySelector(`#${CONTAINER_ID}`);
  if (!rootContainer) throw new Error("Can't find youtube-dj root");

  const root = createRoot(rootContainer);
  root.render(
    <TempoSlider video={document.body.querySelector("video")!}/>
  );
}

window.addEventListener("DOMContentLoaded", () => {
  try {
    console.log('content script loaded');
    setTimeout(() => {
      injectYoutubeDJ()
    }, 2000);
  } catch (e) {
    console.error(e);
  }
});
