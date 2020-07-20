
"use strict"// Permettre un usage strict du Javascript
//Je déclare mes variables
let tableau = [];
let curseur = 0;
let somme = 0;
let moyenne =0;
let min=0;
let nombre=0;
let intMax=0;
let intMi=0;


do{
    nombre=parseInt(prompt("Entrez le nombre entier"));
  if (nombre!=0){
    tableau[curseur] = nombre; curseur++;
      
    if (tableau.length==1){
      intMi = nombre;
    }
  	if (nombre>intMax){
      intMax=nombre;
  } else if (nombre<intMi){
      intMi=nombre;
  }
  }
}
while (nombre !=0);

for (let i=0; i<tableau.length;i++)
{
    somme = somme + tableau[i];
}
// Affichage des résultats sur fenêtre Alert
moyenne = somme / tableau.length;
alert ("somme :"+somme +"\n"+"moyenne :"+ moyenne +"\n"+"Plus petit :"+intMi + "\n" + "Plus grand :"+intMax);


// Je définie une classe véhicule qui contient des Propriétés "Marque, poids et nom"; et une méthode "affiche"
class Vehicule {
  constructor (m, p, n, nR, pUi, iMM, coul, capRes, nivEs, nPl, assu, messTB){
      let marque=m;// Propriété "Marque"
      let poids=p;
      let nom=n;
      let nbRoues=nR;
      let puissance=pUi;
      let immatric=iMM;
      let couleur=coul;
      let capacReser=capRes;
      let nivEssence=nivEs;
      let nombrePlace=nPl;
      let assuré=assu;
      let messageTableauBord=messTB;

//GET------------------------------------------
      this.getMarque = function (){
          return marque;
      }
      this.getPoids = function (){
          return poids;
      }
 
      this.getNom = function (){
          return nom;
      }
      this.getNbRoues = function (){
          return nbRoues;
      }
      
      this.getpUi = function (){
          return pUi;
      }

      this.getimmatric = function (){
          return iMM;
      }

      this.getcouleur = function (){
          return couleur;
      }

      this.getcapacReser = function (){
        return capRes;
    }

    this.getnivEssence = function (){
      return nivEssence;
    }


//SET------------------------------------------
      this.setNbRoues = function (nP){
          nbRoues=nP;
      }
      this.setNom = function (Nm){
          nom=Nm;
      }
      this.setPoids = function (nP){
          poids=nP;
      }
      this.setpUi = function (pUi){
          puissance=pUi;
      }
      this.immatric = function (iMM){
        immatric=iMM;
    }

      this.setcouleur = function (coul){
          couleur=coul;
      }
      
      this.setcapacReser = function (coul){
          capacReser=capRes;
      }
      
      this.setnivEssence = function (nivEs){
        nivEssence=nivEs;
    }

  
  }

  repeindre(coul){
      let msg;

      if(coul===this.getcouleur()){
          msg="peinture raffaichie"
       } else {
           msg="Belle peinture " + coul;
       }

      this.setcouleur(coul);
      return msg;
  }

  ajoutessence(appoint){
    let msg;
    
    if((appoint+this.getnivEssence())<= this.getcapacReser()){
      msg="Vous pouvez ajouter du carburant";
      appoint+= this.getnivEssence();
      this.setnivEssence(appoint);
    } else {
        msg="Vous ne pouvez pas faire l'appoint ";

        }
      
      return msg;     
}

seDeplacer(vitesse, distance){

    if( vitesse<=50) {
        consommation=(distance*10/100);
        msg="A 50km/h, vous consommez" + consommation;

    } else if ( vitesse>50 && vitesse<=90){
        consommation=(distance*5/100);
        alert("A 50km/h, vous consommez" + consommation);

    } else if ( vitesse>90 && vitesse<=130){
        consommation=(distance*8/100);

    } else if ( vitesse>130){
        consommation=(distance*12/100);
    }
      
      return msg;     
}


  affiche(){
     return "Ma marque " + this.getMarque();
  }

  toString (){

    return [this.getimmatric + this.getpUi + this.getcouleur]
}
}

let renault= new Vehicule ("Renault", 1200, "Rourou", 4, 4, 'JDED 945 PM', 'bleue', 60, 5, 5, false, 'Bienvenue');
renault.affiche();

renault.setNom("Ma Louloute");
alert(renault.getNom());

alert(renault.repeindre("Rouge"));

alert(renault.repeindre("Rouge"));

alert(renault.ajoutessence(20));
alert(renault.getnivEssence());

alert(renault.getimmatric())
alert(renault.getpUi())
alert(renault.getcouleur())
