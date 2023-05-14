// exercice 1
function prenom() {
    var prenom = document.getElementById("prenom").value;
    document.getElementById("holder1").innerHTML = prenom;
}

function nomdefamille() {
    var nomdefamille = document.getElementById("nomdefamille").value;
    document.getElementById("holder1").innerHTML = nomdefamille;
}

function nomcomplet() {
    var prenom = document.getElementById("prenom").value;
    var nomdefamille = document.getElementById("nomdefamille").value;
    var nomcomplet = prenom + " " + nomdefamille;
    document.getElementById("holder1").innerHTML = nomcomplet;
}


// exercice 2
function segmentText() {
    var texte = document.getElementById("texte").value;
    var mots = texte.split(/\s+/);
    var resultat = "";
    for (var i = 0; i < mots.length; i++) {
        resultat += mots[i] + "<br>";
    }
    document.getElementById("holder2").innerHTML = resultat;
}
