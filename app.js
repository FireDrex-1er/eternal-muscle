
// clicker sur Bouton "bras" du Menu
document.body.children["Bras"].addEventListener("click",function () {
   
    const Exercice = document.body.children["exercice"];
    const Bras = document.body.children["Bras"];
    const Jambe = document.body.children["Jambe"];
    const Dos = document.body.children["Dos"];
    const Abdos = document.body.children["Abdos"];

    Exercice.style.left="50%" // déplacer "Exercice" sur l'écrans
    Bras.style.left="200%";Dos.style.left="200%";Jambe.style.left="200%";Abdos.style.left="200%"; // déplacer "Menu" en dehors de l'écrans
    Exercice.innerHTML=`
    
        <br><br><span id="exercie_exo">20-30 Répétition de 3 série</span> <a id="exercice_pause"> Pause 15s</a><br><br>

        <span id="exercice_titre">Avant-Bras</span><br><br>
        <span id="exercie_nom">Contraction Poigné </span>      <a id="info" href="assets/ContractionPoigné.mp4">info</a><br>
        <span id="exercie_nom">Curl inversé </span>            <a id="info" href="https://www.youtube.com/watch?v=6GHFxkmFDk0">info</a><br>
        <span id="exercie_nom">Curl Contraction poigné </span> <a id="info" href="https://www.youtube.com/watch?v=6GHFxkmFDk0">info</a><br>
        <span id="exercie_nom">Curl poigné inversé  </span>    <a id="info" href="https://www.youtube.com/watch?v=6GHFxkmFDk0">info</a><br><br>

        <span id="exercice_titre">Bras</span><br><br>
        <span id="exercie_nom">Curl inversé block alterné </span>  <a id="info" href="https://www.youtube.com/watch?v=Br0PN91sHu0&t=223s">info</a><br>
        <span id="exercie_nom">Curl pupitre</span>                 <a id="info" href="https://www.youtube.com/watch?v=GNO4OtYoCYk">info</a><br>
        <span id="exercie_nom">Scullcruncher</span>                 <a id="info" href="https://www.youtube.com/watch?v=OpRMRhr0Ycc&t=416s">info</a><br>
        <span id="exercie_nom">Arm Dumbbell Overhead Extension</span>                 <a id="info" href="https://www.youtube.com/watch?v=OpRMRhr0Ycc&t=386s">info</a><br><br>

        <span id="exercice_titre">Epaule</span><br><br>
        <span id="exercie_nom">Elévation latérales </span>         <a id="info" href="https://www.youtube.com/watch?v=KBuQUOn-oPo">info</a><br>
        <span id="exercie_nom">Peck deck inversé </span>           <a id="info" href="https://www.youtube.com/watch?v=kfBYCQFVFBE">info</a><br>
        <span id="exercie_nom">Dévelopé militaire assis </span>         <a id="info" href="https://www.youtube.com/watch?v=KBuQUOn-oPo">info</a><br>
        <span id="exercie_nom">élévation unilatérales </span>    <a id="info" href="https://www.youtube.com/watch?v=APs7NHBS3a4">info</a>

        <br><br><br><br><span id="exercice_retour">RETOUR</span><br><br><br><br>

    `;

});document.body.children["Jambe"].addEventListener("click",function () {
   
    const Exercice = document.body.children["exercice"];
    const Bras = document.body.children["Bras"];
    const Jambe = document.body.children["Jambe"];
    const Dos = document.body.children["Dos"];
    const Abdos = document.body.children["Abdos"];

    Exercice.style.left="50%" // déplacer "Exercice" sur l'écrans
    Bras.style.left="200%";Dos.style.left="200%";Jambe.style.left="200%";Abdos.style.left="200%"; // déplacer "Menu" en dehors de l'écrans
    Exercice.innerHTML=`
    
        <br><br><span id="exercie_exo">20-30 Répétition de 3 série</span> <a id="exercice_pause"> Pause 15s</a><br><br>

        <span id="exercice_titre">Jambe</span><br><br>
        <span id="exercie_nom">...  </span>    <a id="info" href="">info</a><br><br>

        <span id="exercice_titre">Cuisse</span><br><br>
        <span id="exercie_nom">... </span>     <a id="info" href="">info</a><br><br>

        <span id="exercice_titre">Fessier</span><br><br>
        <span id="exercie_nom">... </span>     <a id="info" href="">info</a>

        <br><br><br><br><span id="exercice_retour">RETOUR</span><br><br><br><br>

    `;

});

window.addEventListener("click",function () {
    
    const exercice_retour = document.body.children["exercice"].children["exercice_retour"];
    
    // clicker sur Bouton "bras" du Menu
    exercice_retour.addEventListener("click",function () {

        const Exercice = document.body.children["exercice"];
        const Bras = document.body.children["Bras"];
        const Jambe = document.body.children["Jambe"];
        const Dos = document.body.children["Dos"];
        const Abdos = document.body.children["Abdos"];
    
        Exercice.style.left="200%" // déplacer "Exercice" en dehors de l'écrans
        Bras.style.left="50%";Dos.style.left="50%";Jambe.style.left="50%";Abdos.style.left="50%"; // déplacer "Menu" sur l'écrans

    });
});