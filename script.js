// mes variables
let divDep = document.getElementById("divDep");
let divRec = document.getElementById("divRec");
let depense = document.getElementsByClassName("depense");
let depenseTotal = document.getElementById("depenseTotal");
let actualiserDepense = document.getElementById("actualiserDepense");
let actualiserRecette = document.getElementById("actualiserRecette");
let recette = document.getElementsByClassName("recette");
let recetteTotal = document.getElementById("recetteTotal");
let epargne = document.getElementById("calculEpargne").value;
let situationGlobale = document.getElementById("situationGlobale");
let actualiserSituation = document.getElementById("actualiserSituation");
let message = document.getElementById("message");
let ajoutDep = document.getElementById("ajoutDep");
let ajoutRec = document.getElementById("ajoutRec");
let sommeDep = 0;
let sommeRec = 0;

//calcul des depenses

actualiserDepense.addEventListener("click", function (){
function calculDepense(){

    for(let i = 0; i < depense.length; i++){
        if(depense[i].value.length > 0) {
            sommeDep += parseInt(depense[i].value);
            }
        }
        depenseTotal.innerHTML = sommeDep;
        depenseTotal.style.color = "whitesmoke";
        depenseTotal.style.backgroundColor = "chocolate";
        depenseTotal.style.fontSize = "medium";
    }
    calculDepense();
})

//calcul des recettes

actualiserRecette.addEventListener("click", function (){
    function calculRecette(){

        for( let i =0; i < recette.length; i++){
            if(recette[i].value.length > 0) {
                sommeRec += parseInt(recette[i].value);
            }
        }
        recetteTotal.innerHTML = sommeRec;
        recetteTotal.style.color = "whitesmoke";
        recetteTotal.style.backgroundColor = "chocolate";
        recetteTotal.style.fontSize = "medium";
    }
    calculRecette();
})

//calcul difference recette /depense & epargne

actualiserSituation.addEventListener("click", function (){
    function calculSituation() {
        let sommeSit = parseFloat((sommeRec-sommeDep)-epargne);

        //affichage si budget positif

        if (sommeSit > 0) {
            situationGlobale.innerHTML = sommeSit;
            situationGlobale.style.backgroundColor = "whitesmoke";
            situationGlobale.style.color = "green";
            situationGlobale.style.fontSize = "medium";
            message.style.color = "green";
            message.style.backgroundColor = "whitesmoke";
            message.innerHTML = "Budget positif faite vous plaisir !!";
            message.style.fontSize = "large";

            //affichage si budget negatif

        } else if (sommeSit < 0) {
            situationGlobale.innerHTML = sommeSit;
            situationGlobale.style.backgroundColor = "whitesmoke";
            situationGlobale.style.color = "red";
            situationGlobale.style.fontSize = "medium";
            message.style.color = "red";
            message.style.backgroundColor = "whitesmoke";
            message.innerHTML = "Budget negatif ne depensez plus !!";
            message.style.fontSize = "large";

            //affichage si budget nul

        } else if (sommeSit === 0) {
            situationGlobale.innerHTML = sommeSit;
            situationGlobale.style.backgroundColor = "whitesmoke";
            situationGlobale.style.fontSize = "medium";
            message.style.backgroundColor = "whitesmoke";
            message.innerHTML = "Budget nul economisez !!";
            message.style.fontSize = "large";
        }
    }
    calculSituation();
})

//bouton pour ajoutez une categorie depense

ajoutDep.addEventListener("click", function (){
        nom = prompt("entrez un nom de categorie");
        let nouvelleDep = document.createElement("label").innerHTML+nom;
        let nouvelleDepInput = document.createElement("input");
        nouvelleDepInput.className = "depense";
        nouvelleDepInput.type = "number";
        divDep.append(nouvelleDep);
        divDep.append(nouvelleDepInput);
})

//bouton pour ajoutez une categorie recette

ajoutRec.addEventListener("click", function (){
    nom = prompt("entrez un nom de categorie");
    let nouvelleRec = document.createElement("label").innerHTML+nom;
    let nouvelleRecInput = document.createElement("input");
    nouvelleRecInput.type = "number";
    nouvelleRecInput.className = "recette";
    divRec.append(nouvelleRec);
    divRec.append(nouvelleRecInput);
})



