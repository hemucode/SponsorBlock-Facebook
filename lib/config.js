var config = {};

config.welcome = {
  set lastupdate (val) {app.storage.write("lastupdate", val)},
  get lastupdate () {return app.storage.read("lastupdate") !== undefined ? app.storage.read("lastupdate") : 0}
};

chrome.runtime.onMessage.addListener(function(m, s, c){
 if (m.blockedCount) {
   chrome.action.setBadgeBackgroundColor({ color: '#f89722' });
   chrome.action.setBadgeText({text: m.blockedCount.toString(), tabId: s.tab.id});
 }
});