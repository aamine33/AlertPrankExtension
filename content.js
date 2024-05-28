function showAlerts() {
  const messages = [
    "Alerte 1 : UNE MENACE A ÉTÉ DÉTECTÉE!",
    "Alerte 2 : POURQUOI AVEZ-VOUS EXPOSÉ VOS DONNÉES SENSIBLES?!",
    "Alerte 3 : VOUS ALLEZ PERDRE TOUTES VOS DONNÉES!",
    "Alerte 4 : Rassurez-vous, ce n'était qu'une campagne de prévention :",
    "Alerte 5 : Après ce message, vous pourrez reprendre possession de votre ordinateur.",
    "Alerte 6 : Faites attention à l'avenir de votre activité numérique.",
    "Alerte 7 : Une fois que vous aurez compris l'ampleur de la prévention, exécutez les commandes [Ctrl+Shift+U]"
  ];

  let index = 0;

  // Ajouter une superposition pour empêcher l'interaction
  const overlay = document.createElement('div');
  overlay.style.position = 'fixed';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  overlay.style.zIndex = '9999';
  overlay.style.color = 'white';
  overlay.style.display = 'flex';
  overlay.style.justifyContent = 'center';
  overlay.style.alignItems = 'center';
  overlay.style.fontSize = '20px';
  overlay.style.cursor = 'none';  // Masquer le curseur de la souris
  overlay.innerText = 'Appuyez sur Entrée pour continuer...';
  document.body.appendChild(overlay);

  // Empêcher les interactions de la souris
  document.addEventListener('mousedown', blockMouseEvent, true);
  document.addEventListener('mouseup', blockMouseEvent, true);
  document.addEventListener('click', blockMouseEvent, true);
  document.addEventListener('dblclick', blockMouseEvent, true);
  document.addEventListener('contextmenu', blockMouseEvent, true);

  function blockMouseEvent(event) {
    event.stopPropagation();
    event.preventDefault();
  }

  function nextAlert() {
    if (index < messages.length) {
      playNotificationSound();
      alert(messages[index]);
      index++;
      overlay.innerText = 'Appuyez sur Entrée pour continuer...';
    } else {
      // Retirer la superposition après les alertes
      document.body.removeChild(overlay);

      // Restaurer les interactions de la souris
      document.removeEventListener('mousedown', blockMouseEvent, true);
      document.removeEventListener('mouseup', blockMouseEvent, true);
      document.removeEventListener('click', blockMouseEvent, true);
      document.removeEventListener('dblclick', blockMouseEvent, true);
      document.removeEventListener('contextmenu', blockMouseEvent, true);
    }
  }

  // Événement keydown pour avancer les alertes avec la touche Entrée
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      nextAlert();
    }
  });

  nextAlert();
}

// Lancer les alertes au bout de 5 secondes
setTimeout(showAlerts, 5000);

function playNotificationSound() {
  var audio = new Audio();
  audio.src = chrome.runtime.getURL('notification_sound.mp3');
  audio.play();
}

document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.shiftKey && event.key === 'U') {
    chrome.runtime.sendMessage({ command: "disable_extension" });
  }
});
