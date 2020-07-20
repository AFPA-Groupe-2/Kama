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