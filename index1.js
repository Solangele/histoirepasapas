
function save() {
    
    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let email = document.getElementById("email").value;
    let adresse = document.getElementById("adresse").value;
    let password = document.getElementById("password").value;
    let passwordConfirmation = document.getElementById("passwordConfirmation").value;
  
    
    if (nom.trim() === "" || prenom.trim() === "" || email.trim() === "" || adresse.trim() === "" || password.trim() === "" || passwordConfirmation.trim() === "") {
      alert("Veuillez remplir tous les champs !");
      return;
    }
  
    if (password !== passwordConfirmation) {
      alert("Les mots de passe ne correspondent pas !");
      return;
    }
    
  
    console.log("Nom:", nom);
    console.log("Prénom:", prenom);
    console.log("Email:", email);
    console.log("Adresse:", adresse);
    console.log("Mot de passe:", password);
}

function submitForm() {
  // Récupérer le message saisi dans le textarea
  let message = document.getElementById("message").value;

  // Effectuer ici l'action souhaitée avec le message
  // Par exemple, envoyer le message à un serveur, afficher une confirmation, etc.

  // Réinitialiser le formulaire après la soumission
  document.getElementById("contactForm").reset();

  // Fermer le modal après la soumission
 let contactModal = new bootstrap.Modal(document.getElementById("contactModal"));
  contactModal.hide();
}