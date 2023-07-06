function save() {

  initColorForInput();

  let nom = document.getElementById("nom").value;
  let prenom = document.getElementById("prenom").value;
  let email = document.getElementById("email").value;
  let adresse = document.getElementById("adresse").value;
  let password = document.getElementById("password").value;
  let passwordConfirmation = document.getElementById("passwordConfirmation").value;


  if (nom.trim() === "" || prenom.trim() === "" || email.trim() === "" || adresse.trim() === "" || password.trim() === "" || passwordConfirmation.trim() === "") {
    if (nom.trim() === "") {
      $("#nom").css("border", "3px solid #FF1805");
    }
    if (prenom.trim() === "") {
      $("#prenom").css("border", "3px solid #FF1805");
    }
    if (email.trim() === "") {
      $("#email").css("border", "3px solid #FF1805");
    }
    if (adresse.trim() === "") {
      $("#adresse").css("border", "3px solid #FF1805");
    }
    if (password.trim() === "") {
      $("#password").css("border", "3px solid #FF1805");
    }
    if (password.trim() === "") {
      $("#password").css("border", "3px solid #FF1805");
    }
    if (passwordConfirmation.trim() === "") {
      $("#passwordConfirmation").css("border", "3px solid #FF1805");
    }

    alert("Veuillez remplir tous les champs !");
    return;
  }

  if (!checkEmail(email)) {
    $("#email").css("border", "3px solid #FF1805");
    alert('Adresse e-mail non valide');
    return;
  }

  if (password !== passwordConfirmation) {
    $("#password").css("border", "3px solid #FF1805");
    $("#passwordConfirmation").css("border", "3px solid #FF1805");
    alert("Les mots de passe ne correspondent pas !");
    return;
  }

  document.getElementById('btn_cancel').textContent = "Fermer";
  document.getElementById('boutonValider').style.visibility = 'hidden';

  document.getElementById('titre').textContent = "Inscription a été effectué avec succès"
  document.getElementById("titre").style.color = "#3BA800";

  console.log("Nom:", nom);
  console.log("Prénom:", prenom);
  console.log("Email:", email);
  console.log("Adresse:", adresse);
  console.log("Mot de passe:", password);
}

function initColorForInput() {
  $("#nom").css("border", "");
  $("#prenom").css("border", "");
  $("#email").css("border", "");
  $("#adresse").css("border", "");
  $("#password").css("border", "");
  $("#passwordConfirmation").css("border", "");

  document.getElementById('btn_cancel').textContent = "Annuler";
  document.getElementById('boutonValider').style.visibility = 'visible';

  document.getElementById('titre').textContent = "Inscription à la Newsletter";
  document.getElementById("titre").style.color = "#0F0F0F";
}

function initInput() {
  initColorForInput();
  document.getElementById("nom").value = "";
  document.getElementById("prenom").value = "";
  document.getElementById("email").value = "";
  document.getElementById("adresse").value = "";
  document.getElementById("password").value = "";
  document.getElementById("passwordConfirmation").value = "";
}

function checkEmail(email) {
  let regx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regx.test(email);
}

function submitForm() {

  let message = document.getElementById("message").value;

  alert("Votre requête est transmise aux administrateurs du site");
  document.getElementById("contactForm").reset();
  let contactModal = new bootstrap.Modal(document.getElementById("contactModal"));
  contactModal.hide();
}