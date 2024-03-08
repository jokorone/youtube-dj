import { createRoot } from 'react-dom/client';
import './style.css'
import Content from './Content';


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
    <>
      <div className='text-lg text-black bg-amber-400 z-50'  >
        YOUTUBE DJJJJJJJJJ
      </div>
    </>
  );
}

window.addEventListener("DOMContentLoaded", () => {
  const div = document.createElement('div');
  div.id = '__root';

  document.body.appendChild(div);

  const rootContainer = document.querySelector('#__root');
  if (!rootContainer) throw new Error("Can't find Options root element");
  const root = createRoot(rootContainer);
  root.render(
    <>
      <div className='absolute bottom-0 left-0 text-lg text-black bg-amber-400 z-50'  >
        content script loaded
      </div>
      <Content/>
    </>
  );

  try {
    console.log('content script loaded');
    setTimeout(() => {
      injectYoutubeDJ()
    }, 2000);
  } catch (e) {
    console.error(e);
  }
});
