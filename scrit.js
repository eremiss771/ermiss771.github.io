const messages = [
    "Bienvenue sur Cinéscope !",
    "Ici, le coin des cinéphiles.",
    "Découvrez les critiques des meilleurs films.",
    "Rejoignez-nous pour une expérience ciné unique."
];

// Sélectionne l'élément où afficher le message
const messageElement = document.getElementById('message');

// Variable pour suivre le message en cours
let currentMessageIndex = 0;

// Fonction pour effacer le texte lettre par lettre
function eraseMessage(callback) {
    const currentText = messageElement.textContent;
    if (currentText.length > 0) {
        messageElement.textContent = currentText.slice(0, -1);
        setTimeout(() => eraseMessage(callback), 50); // Vitesse de suppression
    } else {
        callback(); // Une fois effacé, appelle la fonction pour écrire le nouveau message
    }
}

// Fonction pour écrire un texte lettre par lettre
function typeMessage(message, index = 0) {
    if (index < message.length) {
        messageElement.textContent += message[index];
        setTimeout(() => typeMessage(message, index + 1), 100); // Vitesse d'écriture
    } else {
        // Une fois écrit, attendre avant de lancer l'effacement
        setTimeout(changeMessage, 2000);
    }
}

// Fonction pour changer de message
function changeMessage() {
    const nextMessage = messages[currentMessageIndex];
    currentMessageIndex = (currentMessageIndex + 1) % messages.length;

    eraseMessage(() => typeMessage(nextMessage));
}

// Démarrer avec le premier message
typeMessage(messages[currentMessageIndex]);

    