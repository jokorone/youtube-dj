console.log("background script loaded");

chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
  console.log("req", req);
  console.log("sender", sender);
  sendResponse({ answer: "...farewell" });
});
