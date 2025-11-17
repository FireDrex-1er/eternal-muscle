
        
document.getElementById("curl_s30").addEventListener("click",()=>{

    document.getElementById("menu").style.animation="menu 1.5s";
    document.getElementById("info").style.filter="opacity(0)";
    document.getElementById("info").innerHTML=`
    <br>1 Position : Debout, l'avans bras et à côté de la poitrine, et le bras et vers le sol(le bras et l'avant du bras ne touche rien), la prise de main pronation.
    <br><br><hr><br>2 mouvement : faire une rotation du bras(ne boujer pas l'avant bras) vers l'avant bras et revien position initial.
    <br><br><hr><br>3 spécifisité : au boue de 10 mouvement change la prise de main en neutre et après 10 autre mouvement en supination.
    <br><br><hr><br>4 astuce : quand tu monte, plus tu le fait l'entement mieux sa travaille. contract le muscle.avans de redésendre le bras tien 1s et redésend.
    <br><br><hr><br>5 muscle : en prise pronation = brachii short head, neutre = biceps antérieur, supination = brachii long head.<br><br>
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
    Lien : <a href="https://www.youtube.com/shorts/mYHICqyPh-k">dexième exo, prise main supination et pronation</a>
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
    if (document.body.clientHeight > document.body.clientWidth ) {
        document.getElementById("curl_s30").style.fontSize="20px";
        document.getElementById("haltères_aux_frontS30").style.fontSize="20px";
        document.getElementById("Élévations_latfront_s2").style.fontSize="20px";
    }
    if (document.body.clientHeight < document.body.clientWidth ) {
        document.getElementById("curl_s30").style.fontSize="30px";
        document.getElementById("haltères_aux_frontS30").style.fontSize="30px";
        document.getElementById("Élévations_latfront_s2").style.fontSize="30px";
    }
}, 500);
