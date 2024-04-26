domReady(() => {
  linkButton()
  hoverButton()
  translateHTML()
  rate()
  hydrate()
})

function domReady (callback) {
  if (document.readyState === 'complete') {
    callback()
  } else {
    window.addEventListener('load', callback, false);
  }
}
function translateHTML (dataKey = 'message') {
  for (const $element of document.getElementsByTagName('*')) {
    if ($element.dataset && $element.dataset[dataKey]) {
      $element.innerText = chrome.i18n.getMessage($element.dataset[dataKey])
    }
  }
}

function rate(){
  const updateUrl = chrome.runtime.getManifest().update_url?.toLowerCase();
  const id = chrome.runtime.id;
  const storeUrl = (updateUrl && updateUrl.includes("microsoft")) ?
      `https://microsoftedge.microsoft.com/addons/detail/` + id :
      `https://chrome.google.com/webstore/detail/${id}/reviews`;
  document.querySelectorAll(".teaser").forEach(el => el.setAttribute("href", storeUrl));
}

function linkButton() {
  document.querySelector('.youtube').href = `https://youtube.com/c/HemantaGayen`;
  document.querySelector('.facebook').href = `https://www.facebook.com/codehemu/`;
  document.querySelector('.website').href = `https://www.downloadhub.cloud/`;
}

function hoverButton(){
  document.querySelector(".div_myadblock").addEventListener("mouseover" , mouseOver);
  document.querySelector(".div_myadblock").addEventListener("mouseout" , mouseOut);
  document.querySelector(".cta-description").addEventListener("click", linkopen);
  document.querySelector(".cta-close").addEventListener("click", messageclose);
  document.querySelector("#header-icons").addEventListener("click", headericons);
  document.querySelector(".devoloperid").addEventListener("click", devoloperid);
  if (localStorage.block=="block") {
    document.querySelector(".div_myadblock").style.display="none";
  }

}  
function mouseOver() {
  if (localStorage.message=="nyancat") {
    document.querySelector(".cta-message").innerText="Install YouTube Nyan Cat";
    document.querySelector(".div_myadblock").style.background="#a900ff";
  }else{
    document.querySelector(".cta-message").innerText="Search with Facebook";
    document.querySelector(".div_myadblock").style.background="#0047ff";
  }
    
    document.querySelector(".cta-close").style.display="block";
} 

function mouseOut() {
    document.querySelector(".cta-message").innerText="Upgrade your work";
    document.querySelector(".cta-close").style.display="none";
    document.querySelector(".div_myadblock").style.background="#fff";
}

function devoloperid(){
    window.open("https://www.downloadhub.cloud/",'_blank');
}
function linkopen(){
  if (localStorage.message=="nyancat") {
    window.open("https://www.codehemu.com/2022/04/nyancat.html",'_blank');
  }else{
    window.open("https://www.downloadhub.cloud/2022/09/search-with-facebook.html",'_blank');
  }

}

function messageclose(){
  if (localStorage.message=="nyancat") {
    localStorage.setItem("block", "block");
  }
  document.querySelector(".div_myadblock").style.display="none";
  localStorage.setItem("message", "nyancat");
}
function headericons(){
    window.open("https://www.downloadhub.cloud/2022/09/sponsorblock-for-facebook.html#CSS2",'_blank');
}


async function hydrate() {
      var a = new Promise(function(resolve, reject){
          chrome.storage.sync.get({"blockSponsoredPosts": true}, function(options){
              resolve(options.blockSponsoredPosts);
          })
      });

    const blockSponsoredPosts = await a;
    

    var b = new Promise(function(resolve, reject){
          chrome.storage.sync.get({"blockSuggestedPosts": true}, function(options){
              resolve(options.blockSuggestedPosts);
          })
      });

    const blockSuggestedPosts = await b;


    const $enabledCheckbox = document.querySelector("#blockSponsoredPosts");
    $enabledCheckbox.checked = blockSponsoredPosts;
    $enabledCheckbox.addEventListener("change", async (event) => {
          const blockSponsoredPosts = event.currentTarget.checked;
          await chrome.storage.sync.set({ blockSponsoredPosts });

          id = this.id;
          chrome.tabs.query({currentWindow: true}, function(tabs){
              for (let i = 0; i < tabs.length; i++) {
              chrome.tabs.get(tabs[i].id, function(tab) {
                if (tab.url.indexOf('facebook.com') > 0) {
                  chrome.tabs.reload(tab.id);
                  chrome.action.setBadgeText({text: '', tabId: tab.id});
                }
              });
              }
          });

    });

    const $enabledCheckbox2 = document.querySelector("#blockSuggestedPosts");
    $enabledCheckbox2.checked = blockSuggestedPosts;
    $enabledCheckbox2.addEventListener("change", async (event) => {
          const blockSuggestedPosts = event.currentTarget.checked;
          await chrome.storage.sync.set({ blockSuggestedPosts });

          id = this.id;
          chrome.tabs.query({currentWindow: true}, function(tabs){
              for (let i = 0; i < tabs.length; i++) {
              chrome.tabs.get(tabs[i].id, function(tab) {
                if (tab.url.indexOf('facebook.com') > 0) {
                  chrome.tabs.reload(tab.id);
                  chrome.action.setBadgeText({text: '', tabId: tab.id});
                }
              });
              }
          });
    });


    
}