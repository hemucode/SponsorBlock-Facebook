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

    const enabled = await a;
    console.log(enabled);
    

    var b = new Promise(function(resolve, reject){
          chrome.storage.sync.get({"blockSuggestedPosts": true}, function(options){
              resolve(options.blockSuggestedPosts);
          })
      });

    const suggestedPosts = await b;
    console.log("suggestedPosts " + suggestedPosts);

    
    if (enabled)
    {
        console.log(`[${chrome.i18n.getMessage("app_name")} v${chrome.runtime.getManifest().version} Enabled]`);
        console.log(chrome.i18n.getMessage("app_description") +` https://chrome.google.com/webstore/detail/${chrome.runtime.id}`)

    }



 
}

init();

