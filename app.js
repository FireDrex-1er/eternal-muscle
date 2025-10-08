let ratio_Fenêtre = screen.width / screen.height;
let retour = document.getElementById("exercice");


document.getElementById("membres_supérieurs").addEventListener("click",()=>{

    document.getElementById("exercice").style.left="50%";document.getElementById("exercice").style.position="absolute";
    document.getElementById("membres_supérieurs").style.left="500%";document.getElementById("membres_inférieurs").style.left="500%";
    document.getElementById("tronc_antérieure").style.left="500%";document.getElementById("tronc_supérieure").style.left="500%";
    document.getElementById("exercice").innerHTML=`<span id="exercice_titre1er">Membres supérieurs</span><br><br><br>

        <span id="exercice_titre2eme">Main</span><br><br>
        <a href="https://www.youtube.com/watch?v=2Y91VvLJ6iA&t=115s">VIDEO des exercice</a><br>
            Pour chaque exercice, commence à faire des répétitions jusqu'à épuisement et termine par 10 répétitions.<br>
            Entre chaque exercice fait une pause de 15 s (bois de l'eau).<br>
            Astuce : visualise et concentre-toi sur les muscles que tu travailles, on travaille près de la zone échec, pour un maximum efficacité.<br><br><br>

        <span id="exercice_titre2eme">Avant-Bras</span><br><br>
        <a href="https://www.youtube.com/watch?v=6GHFxkmFDk0&t=19s">VIDEO des exercice</a><br>
            Pour chaque exercice, faire des répétitions jusqu'à épuisement<br>
            Entre chaque exercice fait une pause de 30 s (bois de l'eau).<br>
            Astuce : visualise et concentre-toi sur les muscles que tu travailles, on travaille près de la zone échec, pour un maximum efficacité.<br><br><br>
            
        <span id="exercice_titre2eme">Bras</span><br><br>
        <a href="https://youtu.be/FXa8AbKSTMk?t=16">VIDEO biceps</a><br>
        <a href="https://www.youtube.com/shorts/QflBzYb2ocU?t=2&feature=share">VIDEO bracial anterieur</a><br>
        <a href="https://youtu.be/gP_G_gZ6_Ng?t=16">VIDEO triceps</a><br>
            Pour chaque exercice, faire des répétitions jusqu'à 80% de l'épuisement<br>
            Entre chaque exercice fait une pause de 30 s (bois de l'eau).<br>
            Astuce : visualise et concentre-toi sur les muscles que tu travailles, on travaille près de la zone échec, pour un maximum efficacité.<br><br><br><br>
        <span id="exercice_retour">RETOUR</span><br><br><br>`;

});document.getElementById("membres_inférieurs").addEventListener("click",()=>{

    document.getElementById("exercice").style.left="50%";document.getElementById("exercice").style.position="absolute";
    document.getElementById("membres_supérieurs").style.left="500%";document.getElementById("membres_inférieurs").style.left="500%";
    document.getElementById("tronc_antérieure").style.left="500%";document.getElementById("tronc_supérieure").style.left="500%";
    document.getElementById("exercice").innerHTML=`<br><br><br><br><span id="exercice_retour">RETOUR</span><br><br><br>`;

});document.getElementById("tronc_antérieure").addEventListener("click",()=>{

    document.getElementById("exercice").style.left="50%";document.getElementById("exercice").style.position="absolute";
    document.getElementById("membres_supérieurs").style.left="500%";document.getElementById("membres_inférieurs").style.left="500%";
    document.getElementById("tronc_antérieure").style.left="500%";document.getElementById("tronc_supérieure").style.left="500%";
    document.getElementById("exercice").innerHTML=`<br><br><br><br><span id="exercice_retour">RETOUR</span><br><br><br>`;

});document.getElementById("tronc_supérieure").addEventListener("click",()=>{
    
    document.getElementById("exercice").style.left="50%";document.getElementById("exercice").style.position="absolute";
    document.getElementById("membres_supérieurs").style.left="500%";document.getElementById("membres_inférieurs").style.left="500%";
    document.getElementById("tronc_antérieure").style.left="500%";document.getElementById("tronc_supérieure").style.left="500%";
    document.getElementById("exercice").innerHTML=`<br><br><br><br><span id="exercice_retour">RETOUR</span><br><br><br>`;

});retour.addEventListener("click",()=>{
    
    document.getElementById("exercice").style.left="500%";document.getElementById("exercice").style.position="fixed";
    document.getElementById("membres_supérieurs").style.left="50%";document.getElementById("membres_inférieurs").style.left="50%";
    document.getElementById("tronc_antérieure").style.left="50%";document.getElementById("tronc_supérieure").style.left="50%";

});