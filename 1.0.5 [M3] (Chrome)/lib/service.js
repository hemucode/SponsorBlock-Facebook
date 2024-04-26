chrome.runtime.onMessage.addListener(async (request, sender) => {
  switch (request.action) {
    case "INSERT_JS2_RULE": 
      chrome.scripting.executeScript({
        target : {tabId : sender.tab.id },
        files : [ "lib/suggested.js" ],
        injectImmediately: !0,
        world: "MAIN"
      }).then(() => console.log("injected script file"));
      break;

    case "INSERT_JS_RULE":
      chrome.scripting.executeScript({
        target : {tabId : sender.tab.id },
        files : [ "lib/sponsored.js" ],
        injectImmediately: !0,
        world: "MAIN"
      }).then(() => console.log("injected script file"));
      break;

    default:
      throw new Error(`Unknown Action: ${request.action}`);
  }
});
