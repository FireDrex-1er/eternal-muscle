document.body.children["menu"].children[0].children[0].children[2].addEventListener("click",()=>{
    
    document.body.children["menu"].style.top="-200%";
    document.body.children["exercice"].style.top="50%";
    
});document.body.children["exercice"].children[0].children[0].children[9].addEventListener("click",()=>{
    
    document.body.children["menu"].style.top="50%";
    document.body.children["exercice"].style.top="-200%";
    
});document.body.children["exercice"].children[0].children[0].children[8].addEventListener("click",()=>{
    
    document.body.children["temps"].style.top="50%";
    document.body.children["exercice"].style.top="-100%";
    temps("biceps",false);
    
});
function temps(lieu,fin) {

    if (lieu == "biceps") {

        let afficher = document.body.children["temps"].children["haut"].children[0].children["temps1"];
        let text = document.body.children["temps"].children["haut"].children[0].children["text"];
        let textSuivant = document.body.children["temps"].children["bas"].children[0].children["text"];
        let tempsSuivant = document.body.children["temps"].children["bas"].children[0].children["temps1"];
        let temps = 15;
        let tempsText = 15;
        let mouvement = 0;
        let mouvementText = 0;
        fin = false;

        
        text.innerHTML="préparation";
        textSuivant.innerHTML="Du Bas vers Milieu";
        tempsSuivant.innerHTML = "2";

        setTimeout(() => {
          setInterval(() => {
            if (fin === false) {
              if (temps >= 0) {
                temps = temps - 1;
                afficher.innerHTML = temps;
              }if (temps < 0 && mouvement == 0) {
                temps = 2;
                afficher.innerHTML = temps;
                mouvement = 1;
              }if (temps < 0 && mouvement == 1) {
                temps = 3;
                afficher.innerHTML = temps;
                mouvement = 2;



              temps = 15;
              tempsText = 15;
              mouvement = 0;
              mouvementText = 0;
              }if (temps < 0 && mouvement == 2) {
                temps = 1;
                afficher.innerHTML = temps;
                mouvement = 3;
              }if (temps < 0 && mouvement == 3) {
                temps = 25;
                afficher.innerHTML = temps;
                mouvement = 4;
              }if (temps < 0 && mouvement == 4) {
                temps = 3;
                afficher.innerHTML = temps;
                mouvement = 5;
              }if (temps < 0 && mouvement == 5) {
                temps = 3;
                afficher.innerHTML = temps;
                mouvement = 6;
              }if (temps < 0 && mouvement == 6) {
                temps = 3;
                afficher.innerHTML = temps;
                mouvement = 7;
              }
              if (temps < 0 && mouvement == 7) {
                temps = 2;
                afficher.innerHTML = temps;
                mouvement = 8;
              }if (temps < 0 && mouvement == 8) {
                temps = 3;
                afficher.innerHTML = temps;
                mouvement = 9;
              }if (temps < 0 && mouvement == 9) {
                temps = 1;
                afficher.innerHTML = temps;
                mouvement = 10;
              }if (temps < 0 && mouvement == 10) {
                temps = 25;
                afficher.innerHTML = temps;
                mouvement = 11;
              }if (temps < 0 && mouvement == 11) {
                temps = 3;
                afficher.innerHTML = temps;
                mouvement = 12;
              }if (temps < 0 && mouvement == 12) {
                temps = 3;
                afficher.innerHTML = temps;
                mouvement = 13;
              }if (temps < 0 && mouvement == 13) {
                temps = 3;
                afficher.innerHTML = temps;
                mouvement = 14;
              }
              if (temps < 0 && mouvement == 14) {
                temps = 2;
                afficher.innerHTML = temps;
                mouvement = 15;
              }if (temps < 0 && mouvement == 15) {
                temps = 3;
                afficher.innerHTML = temps;
                mouvement = 16;
              }if (temps < 0 && mouvement == 16) {
                temps = 1;
                afficher.innerHTML = temps;
                mouvement = 17;
              }if (temps < 0 && mouvement == 17) {
                temps = 25;
                afficher.innerHTML = temps;
                mouvement = 18;
              }if (temps < 0 && mouvement == 18) {
                temps = 3;
                afficher.innerHTML = temps;
                mouvement = 19;
              }if (temps < 0 && mouvement == 19) {
                temps = 3;
                afficher.innerHTML = temps;
                mouvement = 20;
              }if (temps < 0 && mouvement == 20) {
                temps = 3;
                afficher.innerHTML = temps;
                mouvement = 21;
              }
              if (temps < 0 && mouvement == 21) {
                temps = 2;
                afficher.innerHTML = temps;
                mouvement = 22;
              }if (temps < 0 && mouvement == 22) {
                temps = 3;
                afficher.innerHTML = temps;
                mouvement = 23;
              }if (temps < 0 && mouvement == 23) {
                temps = 1;
                afficher.innerHTML = temps;
                mouvement = 24;
              }if (temps < 0 && mouvement == 24) {
                temps = 25;
                afficher.innerHTML = temps;
                mouvement = 25;
              }if (temps < 0 && mouvement == 25) {
                temps = 3;
                afficher.innerHTML = temps;
                mouvement = 26;
              }if (temps < 0 && mouvement == 26) {
                temps = 3;
                afficher.innerHTML = temps;
                mouvement = 27;
              }if (temps < 0 && mouvement == 27) {
                temps = 3;
                afficher.innerHTML = temps;
                mouvement = 28;
              }
              if (temps < 0 && mouvement == 28) {
                temps = 2;
                afficher.innerHTML = temps;
                mouvement = 29;
              }if (temps < 0 && mouvement == 29) {
                temps = 3;
                afficher.innerHTML = temps;
                mouvement = 30;
              }if (temps < 0 && mouvement == 30) {
                temps = 1;
                afficher.innerHTML = temps;
                mouvement = 31;
              }if (temps < 0 && mouvement == 31) {
                temps = 25;
                afficher.innerHTML = temps;
                mouvement = 32;
              }if (temps < 0 && mouvement == 32) {
                temps = 3;
                afficher.innerHTML = temps;
                mouvement = 33;
              }if (temps < 0 && mouvement == 33) {
                temps = 3;
                afficher.innerHTML = temps;
                mouvement = 34;
              }if (temps < 0 && mouvement == 34) {
                temps = 3;
                afficher.innerHTML = temps;
                mouvement = 35;
              }
              if (temps < 0 && mouvement == 35) {
                temps = 2;
                afficher.innerHTML = temps;
                mouvement = 36;
              }if (temps < 0 && mouvement == 36) {
                temps = 3;
                afficher.innerHTML = temps;
                mouvement = 37;
              }if (temps < 0 && mouvement == 37) {
                temps = 1;
                afficher.innerHTML = temps;
                mouvement = 38;
              }if (temps < 0 && mouvement == 38) {
                temps = 25;
                afficher.innerHTML = temps;
                mouvement = 39;
              }if (temps < 0 && mouvement == 39) {
                temps = 3;
                afficher.innerHTML = temps;
                mouvement = 40;
              }if (temps < 0 && mouvement == 40) {
                temps = 3;
                afficher.innerHTML = temps;
                mouvement = 41;
              }if (temps < 0 && mouvement == 41) {
                temps = 3;
                afficher.innerHTML = temps;
                mouvement = 42;
              }if (temps < 0 && mouvement == 42) {
              fin = true;
              afficher.innerHTML = temps;
              document.body.children["exercice"].style.top="50%";
              document.body.children["temps"].style.top="-100%";
              temps = 15;
              tempsText = 15;
              mouvement = 0;
              mouvementText = 0;
              setTimeout(() => {
                afficher.innerHTML = temps;
              }, 2000);
              }
            }
          }, 1000);
          setInterval(() => {
              if (fin === false) {
                if (tempsText >= 0) {
                  tempsText = tempsText - 1;
                }if (tempsText >= 14 && mouvementText == 0) {
                  mouvementText = 1;
                }if (tempsText < 0 && mouvementText == 1) {
                  text.innerHTML="du Bas vers Milieu";
                  textSuivant.innerHTML="tien position";
                  tempsSuivant.innerHTML = "3";
                  mouvementText = 2;
                  tempsText = 2;
                }if (tempsText < 0 && mouvementText == 2) {
                  text.innerHTML="tien position";
                  textSuivant.innerHTML="Du Milieu vers Haut";
                  tempsSuivant.innerHTML = "1";
                  mouvementText = 3;
                  tempsText = 3;
                }if (tempsText < 0 && mouvementText == 3) {
                  text.innerHTML="Du Milieu vers Haut";
                  textSuivant.innerHTML="tien la position";
                  tempsSuivant.innerHTML = "25";
                  mouvementText = 4;
                  tempsText = 1;
                }if (tempsText < 0 && mouvementText == 4) {
                  text.innerHTML="tien la position";
                  textSuivant.innerHTML="Du Haut vers Milieu";
                  tempsSuivant.innerHTML = "3";
                  mouvementText = 5;
                  tempsText = 25;
                }if (tempsText < 0 && mouvementText == 5) {
                  text.innerHTML="Du Haut vers Milieu";
                  textSuivant.innerHTML="tien position";
                  tempsSuivant.innerHTML = "3";
                  mouvementText = 6;
                  tempsText = 3;
                }if (tempsText < 0 && mouvementText == 6) {
                  text.innerHTML="tien position";
                  textSuivant.innerHTML="Du Milieu vers Bas";
                  tempsSuivant.innerHTML = "3";
                  mouvementText = 7;
                  tempsText = 3;
                }if (tempsText < 0 && mouvementText == 7) {
                  text.innerHTML="Du Milieu vers Bas";
                  textSuivant.innerHTML="Du Bas vers Milieu";
                  tempsSuivant.innerHTML = "2";
                  mouvementText = 1;
                  tempsText = 3;
                }
              }
          }, 1000);
        }, 3000);

    }
    
}

