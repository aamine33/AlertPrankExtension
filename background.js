chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installée !");
});

// Écouter les messages envoyés depuis content.js
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  // Vérifier si le message est pour désactiver l'extension
  if (message.command === "disable_extension") {
    chrome.management.setEnabled(chrome.runtime.id, false);
  }
});
