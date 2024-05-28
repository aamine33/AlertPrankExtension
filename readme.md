# Alert Prank Extension

## Description

**Alert Prank Extension** est une extension Google Chrome conçue pour afficher plusieurs messages d'alerte successifs, créant un effet de blague. Les utilisateurs peuvent activer ou désactiver les alertes et les sons via une interface popup et désactiver l'extension rapidement avec un raccourci clavier.

## Fonctionnalités

- Affichage de messages d'alerte successifs après un délai spécifié.
- Lecture d'un son de notification pour chaque alerte.
- Blocage de l'utilisation de la souris pendant l'activité de l'extension.
- Désactivation de l'extension via un raccourci clavier (`Ctrl+Shift+U`).

## Prérequis

- Google Chrome (ou un navigateur basé sur Chromium) version 88 ou ultérieure.

## Installation

1. **Télécharger le projet :**

   Clonez ou téléchargez ce dépôt sur votre machine locale.
   ```
   git clone https://ytrack.learn.ynov.com/git/aamine/extension-js.git
   ```

2. **Charger l'extension dans Chrome :**
   - Ouvrez Google Chrome et allez à `chrome://extensions/`.
   - Activez le **Mode développeur** en haut à droite de la page.
   - Cliquez sur **Charger l'extension non empaquetée**.
   - Sélectionnez le dossier du projet téléchargé.

## Utilisation

1. **Configurer les paramètres :**
   - Cliquez sur l'icône de l'extension dans la barre d'outils de Chrome.
   - Configurez les paramètres pour activer ou désactiver les alertes et les sons.
   - Cliquez sur **Save Settings** pour enregistrer les paramètres.

2. **Déclencher les alertes :**
   - Après avoir configuré les paramètres, attendez 5 secondes pour que les alertes commencent à s'afficher successivement avec un intervalle d'une seconde.

3. **Désactiver l'extension :**
   - Appuyez sur `Ctrl+Shift+U` pour désactiver l'extension. Une alerte apparaîtra pour vous informer de la désactivation et comment réactiver l'extension via `chrome://extensions/`.

## Structure des fichiers

- `manifest.json`: Fichier de configuration de l'extension.
- `background.js`: Script de fond pour gérer les événements et les messages.
- `content.js`: Script de contenu pour afficher les alertes et jouer les sons.
- `notification_sound.mp3`: Fichier audio pour les notifications.
- `icon.png`: Icône de l'extension.

## FAQ

**Comment réactiver l'extension après l'avoir désactivée ?**
- Allez à `chrome://extensions/` et réactivez l'extension manuellement.

**Puis-je personnaliser les messages d'alerte ?**
- Oui, vous pouvez modifier le tableau `messages` dans le fichier `content.js` pour personnaliser les alertes.

**Que faire si les alertes ne s'affichent pas ?**
- Assurez-vous que l'extension est correctement configurée et chargée. Vérifiez la console de développement (`Ctrl+Shift+I` > Console) pour voir s'il y a des erreurs.

## Contribution

Les contributions sont les bienvenues ! Si vous avez des suggestions pour améliorer cette extension, veuillez créer une **issue** ou un **pull request** dans ce dépôt.

## Auteurs

- [Amine ALKIHAL](https://github.com/aamine33)
- [Kayss LELEU](https://github.com/kaysx7)

## License

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

