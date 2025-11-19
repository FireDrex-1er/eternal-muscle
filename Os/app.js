
        
document.getElementById("curl_s30").addEventListener("click",()=>{

    document.getElementById("menu").style.animation="menu 1.5s";
    document.getElementById("info").style.filter="opacity(0)";
    document.getElementById("info").innerHTML=`
    <br>1 Impact doux.
    <br><br><hr><br>2 tension musculaire élevée : <br><br>Quand un muscle tire fort sur un os, celui-ci se renforce même sans choc.<br>C’est la base du renforcement osseux “mécanique”.
    <br><br><hr><br>3 isométriques lourds : <br><br>L’isométrie en forte contraction envoie un signal très puissant au tissu osseux.
    <br><br><hr><br>4 Charges lourdes : <br><br>Tu peux renforcer fortement tes os avec des charges, même improvisées.
    <br><br><hr><br>5 Oscillations et micro-vibrations musculaires
    <br><br><hr><br>6 Optimisation biologique : <br><br>✔️ Calcium<br>Fromage, lait, amandes, sardines, brocolis.<br>✔️ Vitamine D<br>Soleil 10–20 min/jour.Ou poissons gras : saumon, maquereau.<br>✔️ Magnésium<br>Fruits secs, eau minérale riche en Mg.<br>✔️ Protéines<br>Le muscle tire sur l’os = os renforcé.<br>✔️ Sommeil<br>Les hormones réparatrices densifient l’os.<br><br>
    `;
    setTimeout(() => {
        
        document.getElementById("menu").style.position="fixed";
        document.getElementById("menu").style.left="500%";
        document.getElementById("menu").style.filter="opacity(0)";
        document.getElementById("menu").style.animation="";
        document.getElementById("info").style.position="absolute";
        document.getElementById("info").style.left="50%";
        document.getElementById("info").style.filter="";
        document.getElementById("info").style.animation="menu_inverse 1.5";
    }, 1500);
    setTimeout(() => {
        document.getElementById("info").style.animation="";
    }, 3000);
});document.getElementById("haltères_aux_frontS30").addEventListener("click",()=>{
    document.getElementById("menu").style.animation="menu 1.5s";
    document.getElementById("info").style.filter="opacity(0)";
    document.getElementById("info").innerHTML=`
    <br>1 Position : coucher sur banc, l'avant bras vers le bas direction tête, le coude n'est pas fléchi, prise main pronation.
    <br><br><hr><br>2 Montée (2s) : fléchi le coude vers l'avans bras, tu reviens position initial.
    <br><br><hr><br>3 spécifisité : au boue de 10 mouvement change la prise de main en neutre et après 10 autre mouvement en supination.
    <br><br><hr><br>4 astuce : quand tu descend le bras, plus tu le fait l'entement mieux sa travaille. contract le muscle.avans de remonté le bras tien 1s et remnte.
    <br><br><hr><br>5 muscle ciblé: ???.<br><br>
    `;
    setTimeout(() => {
        
        document.getElementById("menu").style.position="fixed";
        document.getElementById("menu").style.left="500%";
        document.getElementById("menu").style.filter="opacity(0)";
        document.getElementById("menu").style.animation="";
        document.getElementById("info").style.position="absolute";
        document.getElementById("info").style.left="50%";
        document.getElementById("info").style.filter="";
        document.getElementById("info").style.animation="menu_inverse 1.5";
    }, 1500);
    setTimeout(() => {
        document.getElementById("info").style.animation="";
    }, 3000);
});document.getElementById("Élévations_latfront_s2").addEventListener("click",()=>{
    document.getElementById("menu").style.animation="menu 1.5s";
    document.getElementById("info").style.filter="opacity(0)";
    document.getElementById("info").innerHTML=`
🔥 Très fortement :<br><br>

Tibia<br>

Os du pied (métatarses, talon)<br>

Fibula (péroné)<br><br><hr><br>

🔥 Modérément :<br><br>

Fémur<br>

Os du bassin<br><br><hr><br>

🔥 Légèrement :<br><br>

Vertèbres lombaires
    `;
    setTimeout(() => {
        
        document.getElementById("menu").style.position="fixed";
        document.getElementById("menu").style.left="500%";
        document.getElementById("menu").style.filter="opacity(0)";
        document.getElementById("menu").style.animation="";
        document.getElementById("info").style.position="absolute";
        document.getElementById("info").style.left="50%";
        document.getElementById("info").style.filter="";
        document.getElementById("info").style.animation="menu_inverse 1.5";
    }, 1500);
    setTimeout(() => {
        document.getElementById("info").style.animation="";
    }, 3000);
});

setInterval(() => {
    if (document.body.clientHeight < document.body.clientWidth ) {
        document.getElementById("curl_s30").style.fontSize="30px";
        document.getElementById("haltères_aux_frontS30").style.fontSize="30px";
        document.getElementById("Élévations_latfront_s2").style.fontSize="30px";
    }
}, 500);





let titre_Width_0 = document.body.children["menu"].children[0].clientWidth;let titre_Width_1 = document.body.children["menu"].children[1].clientWidth;let titre_Width_2 = document.body.children["menu"].children[2].clientWidth;
let cible_Width_0 = document.body.children["menu"].children[0].children[1].clientWidth;let cible_Width_1 = document.body.children["menu"].children[1].children[1].clientWidth;let cible_Width_2 = document.body.children["menu"].children[2].children[1].clientWidth;
let body_Width = document.body.clientWidth

setInterval(() => {
    if (((body_Width-titre_Width_0)/2-cible_Width_0)-3 < 0) {
        titre_Width_0 = titre_Width_0-1;
        document.body.children["menu"].children[0].style.width=titre_Width_0+"px";

    }
    if (((body_Width-titre_Width_1)/2-cible_Width_1)-3 < 0) {
        titre_Width_1 = titre_Width_1-1;
        document.body.children["menu"].children[1].style.width=titre_Width_1+"px";

    }
    if (((body_Width-titre_Width_2)/2-cible_Width_2)-3 < 0) {
        titre_Width_2 = titre_Width_2-1;
        document.body.children["menu"].children[2].style.width=titre_Width_2+"px";

    }
}, 10);


setTimeout(() => {
    
    if (document.body.clientHeight > document.body.clientWidth) {
        
        document.body.children["menu"].children[0].style.fontSize=(document.body.children["menu"].children[0].clientWidth*20)/189+"px"
        console.log(document.body.children["menu"].children[0].style.fontSize);
        
        document.body.children["menu"].children[1].style.fontSize=(document.body.children["menu"].children[1].clientWidth*20)/189+"px"
        console.log(document.body.children["menu"].children[1].style.fontSize);
        
        document.body.children["menu"].children[2].style.fontSize=(document.body.children["menu"].children[2].clientWidth*20)/189+"px"
        console.log(document.body.children["menu"].children[2].style.fontSize);
        
        document.body.children["menu"].children[3].style.fontSize=(document.body.children["menu"].children[3].clientWidth*50)/189+"px"
        console.log(document.body.children["menu"].children[3].style.fontSize);

        
        document.body.style.backgroundSize="160%";

    }

}, 1500);