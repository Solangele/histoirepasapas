
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

  let message = document.getElementById("message").value;

  alert("Votre requête est transmise aux administrateurs du site");
  document.getElementById("contactForm").reset();
  var contactModal = new bootstrap.Modal(document.getElementById("contactModal"));
  contactModal.hide();
}