"use script";
//la fonction permet de regrouper un ensemble d'intructions sous un seul et même nom

function saluer(){
    console.log("Bonjour, bienvenue chef.");
}
saluer();

let pseudo="alfred";
function saluerQqun(prenom){
console.log("Bonjour "+ prenom + ", bienvenue chef.");
}

saluerQqun("Bob");
saluerQqun(pseudo);


//Verifie si les deux valeurs (Moto, Velo) sont strictement égal ou non. Avec un boolean
let vehicule="Moto";
let vehicule2="Velo";
let result=checkName(vehicule,vehicule2)

function checkName(name1, name2){
    if(name1===name2){
        return true
    }else{
        return false
    }
}
console.log(result);