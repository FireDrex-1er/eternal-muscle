
document.getElementById("good_morning_Rotflex").addEventListener("click",()=>{
    document.getElementById("menu").style.animation="menu 1.5s";
    document.getElementById("info").style.filter="opacity(0)";
    document.getElementById("info").innerHTML=`
        <br>1 Position chaise : Placez la chaise stable contre le mur. Posez le tapis devant pour vos pieds.
        <br><br><hr><br>2 Position corps : debout, bras vers le sol et entre croisé.
        <br><br><hr><br>3 Position haltère : Prenez deux haltères de "4kg". Tenez-le au-dessus de votre jambe, bras tendus (coudes fléchis 0°). Paumes vers la jambe.
        <br><br><hr><br>4 Phase d'étirement (3s) : Descendez la tête et le haut du dos,fait une rotation de 45° du dos. Descendez jusqu'à sentir un étirement INTENSE dans les dorsaux.
        <br><br><hr><br>5 Position basse critique : En bas, vous devez sentir vos dorsaux s'étirer comme un élastique. C'est LÀ que l'isolation est maximale. Pause 1 seconde.
        <br><br><hr><br>6 Contraction dorsaux (2s) : Remontez la tête et le haut du dos en contractant UNIQUEMENT vos dorsaux. Les bras restent tendus, ce sont les DORSAUX qui tirent, pas les bras !
        <br><br><hr><br>7 Muscle ciblé : tout les muscle du dorsaux, car on a une flexion du dos et une rotation<br><br>
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
});document.getElementById("tirage_frontal_s3").addEventListener("click",()=>{
    document.getElementById("menu").style.animation="menu 1.5s";
    document.getElementById("info").style.filter="opacity(0)";
    document.getElementById("info").innerHTML=`
        <br>1 Position initiale : debous. Pieds écartés largeur d'épaules. l'avans bras à 90° entre pieds et le ventre, bras écarter lageur d'épaule et tendus, paumes vers le sol.
        <br><br><hr><br>3 Mouvement lentement (3s) : l'avant bras toujours à 90°, vas amener le coude derrière l'épaule le plus posssible, et reviens.
        <br><br><hr><br>4 Contraction MAXIMALE (1s) : derrière l'épaule le plus posssible, SERREZ vos trapèzes comme si votre vie en dépendait.
        <br><br><hr><br>5 spécial : Après 10 répétitions, l'avant-bras est à 45°, le coude derrière l'épaule en haut. Et après encore 10 répétitions, l'avant-bras passe à 135°, le coude derrière l'épaule en bas.
        <br><br><hr><br>6 muscle ciblé : les trois grands groupes de trapèzes inférieurs, moyens et supérieurs.<br><br>
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
});document.getElementById("Crunch_V_UP").addEventListener("click",()=>{
    document.getElementById("menu").style.animation="menu 1.5s";
    document.getElementById("info").style.filter="opacity(0)";
    document.getElementById("info").innerHTML=`
        <br>1 Position : position coucher, dos droit face au sol. Bras derrière la tête.
        <br><br><hr><br>2 Position départ : (On bouge le dos et les jambe)Les jambes et le dos ne touche jamais le sol.
        <br><br><hr><br>3 mouvement : les genou dans un mouvement frontale vers le ventre, et le dos fait un mouvement frontale vers les jambe(toujous les bras derrière la tête)
        <br><br><hr><br>4 conseille : resent et contract les abdominaux tout le temps. Quand le genou touche le ventre reste dans cette position pendant 1s. Plus tu va être leng plus c'est efficace(ne donne pas d'accoue).<br><br>
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
});document.getElementById("Crunch_oblique").addEventListener("click",()=>{
    document.getElementById("menu").style.animation="menu 1.5s";
    document.getElementById("info").style.filter="opacity(0)";
    document.getElementById("info").innerHTML=`
        <br>1 Position : position coucher, dos droit face au sol. Bras derrière la tête.
        <br><br><hr><br>2 Position départ : (On bouge le dos et les jambe)Les jambes et le dos ne touche jamais le sol.
        <br><br><hr><br>3 mouvement : les genou dans un mouvement frontale vers le ventre, et le dos fait un mouvement frontale vers les jambe(toujous les bras derrière la tête)
        <br><br><hr><br>4 conseille : resent et contract les abdominaux tout le temps. Quand le genou touche le ventre reste dans cette position pendant 1s. Plus tu va être leng plus c'est efficace(ne donne pas d'accoue).<br><br>
        
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
        document.getElementById("good_morning_Rotflex").style.fontSize="30px";
        document.getElementById("tirage_frontal_s3").style.fontSize="30px";
        document.getElementById("Crunch_V_UP").style.fontSize="30px";
        document.getElementById("Crunch_oblique").style.fontSize="30px";
    }
}, 500);





let titre_Width_0 = document.body.children["menu"].children[0].clientWidth;let titre_Width_1 = document.body.children["menu"].children[1].clientWidth;let titre_Width_2 = document.body.children["menu"].children[2].clientWidth;let titre_Width_3 = document.body.children["menu"].children[3].clientWidth;
let cible_Width_0 = document.body.children["menu"].children[0].children[1].clientWidth;let cible_Width_1 = document.body.children["menu"].children[1].children[1].clientWidth;let cible_Width_2 = document.body.children["menu"].children[2].children[1].clientWidth;let cible_Width_3 = document.body.children["menu"].children[3].children[1].clientWidth;
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
    if (((body_Width-titre_Width_3)/2-cible_Width_3)-3 < 0) {
        titre_Width_3 = titre_Width_3-1;
        document.body.children["menu"].children[3].style.width=titre_Width_3+"px";

    }
}, 10);


setTimeout(() => {
    
    if (document.body.clientHeight > document.body.clientWidth) {
        
        document.body.children["menu"].children[0].style.fontSize=(document.body.children["menu"].children[0].clientWidth*20)/189+"px"
        console.log(document.body.children["menu"].children[2].style.fontSize);
        
        document.body.children["menu"].children[1].style.fontSize=(document.body.children["menu"].children[1].clientWidth*20)/189+"px"
        console.log(document.body.children["menu"].children[2].style.fontSize);
        
        document.body.children["menu"].children[2].style.fontSize=(document.body.children["menu"].children[2].clientWidth*20)/189+"px"
        console.log(document.body.children["menu"].children[2].style.fontSize);
        
        document.body.children["menu"].children[3].style.fontSize=(document.body.children["menu"].children[3].clientWidth*20)/189+"px"
        console.log(document.body.children["menu"].children[2].style.fontSize);
        
        document.body.children["menu"].children[4].style.fontSize=(document.body.children["menu"].children[4].clientWidth*50)/189+"px"
        console.log(document.body.children["menu"].children[2].style.fontSize);

    }

}, 1500);
