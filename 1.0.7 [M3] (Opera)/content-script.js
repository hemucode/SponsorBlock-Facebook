/*
 * content-script.js
 * https://github.com/hemucode/SponsorBlock-Facebook/
 * MIT licensed
 *
 * Copyright (c) 2022 hemucode
 */
/*
 * content-script.js
 * https://github.com/hemucode/SponsorBlock-Facebook/
 * MIT licensed
 *
 * Copyright (c) 2023 hemucode
 */


async function init() {
  
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

    if (blockSponsoredPosts){
        console.log(`[${chrome.i18n.getMessage("app_name")} v${chrome.runtime.getManifest().version} Enabled]`);
        console.log(chrome.i18n.getMessage("app_description") +` https://chrome.google.com/webstore/detail/${chrome.runtime.id}`)
        injectJS();
      
    }
   
   if (blockSuggestedPosts) {injectJS2();}

 
}

/**
 * @returns Promise
 */


function injectJS() {
  return chrome.runtime.sendMessage({
    action: "INSERT_JS_RULE"
  });
}

function injectJS2() {
  return chrome.runtime.sendMessage({
    action: "INSERT_JS2_RULE"
  });
}

/**
 * @returns Promise
 */


init();








