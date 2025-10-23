
if (document.body.clientWidth*1.3 < document.body.clientHeight) {
    document.body.children["Menu"].children["Block_Endurance"].style.boxShadow="0px 10px 20px -5px #900";
    document.body.children["Menu"].children["Block_Force"].style.boxShadow="-10px 10px 20px -5px #900";
    document.body.children["Menu"].children["Block_Puissance"].style.boxShadow="10px 10px 20px -5px #900";
    document.body.children["Menu"].children["Block_Hypertrophie"].style.boxShadow="0px -10px 20px -5px #900";
    document.body.children["Menu"].style.fontSize="20px";
    document.body.children["Exercice"].style.fontSize="20px";
    document.body.children["Fleche_retour"].style.fontSize="50px";

}if (document.body.clientWidth*1.3 > document.body.clientHeight){
    
    document.body.children["Menu"].children["Block_Endurance"].style.boxShadow="0px 10px 20px #900";
    document.body.children["Menu"].children["Block_Force"].style.boxShadow="-10px 10px 20px #900";
    document.body.children["Menu"].children["Block_Puissance"].style.boxShadow="10px 10px 20px #900";
    document.body.children["Menu"].children["Block_Hypertrophie"].style.boxShadow="0px -10px 20px #900";
    document.body.children["Menu"].style.fontSize="40px";
    document.body.children["Exercice"].style.fontSize="40px";
    document.body.children["Fleche_retour"].style.fontSize="100px";

}setInterval(() => {
    
    if (document.body.clientWidth*1.3 < document.body.clientHeight) {

        document.body.children["Menu"].children["Block_Endurance"].style.boxShadow="0px 10px 20px -5px #900";
        document.body.children["Menu"].children["Block_Force"].style.boxShadow="-10px 10px 20px -5px #900";
        document.body.children["Menu"].children["Block_Puissance"].style.boxShadow="10px 10px 20px -5px #900";
        document.body.children["Menu"].children["Block_Hypertrophie"].style.boxShadow="0px -10px 20px -5px #900";
        document.body.children["Menu"].style.fontSize="20px";
        document.body.children["Exercice"].style.fontSize="20px";
        document.body.children["Fleche_retour"].style.fontSize="50px";

    }if (document.body.clientWidth*1.3 > document.body.clientHeight){
    
        document.body.children["Menu"].children["Block_Endurance"].style.boxShadow="0px 10px 20px #900";
        document.body.children["Menu"].children["Block_Force"].style.boxShadow="-10px 10px 20px #900";
        document.body.children["Menu"].children["Block_Puissance"].style.boxShadow="10px 10px 20px #900";
        document.body.children["Menu"].children["Block_Hypertrophie"].style.boxShadow="0px -10px 20px #900";
        document.body.children["Menu"].style.fontSize="40px";
        document.body.children["Exercice"].style.fontSize="40px";
        document.body.children["Fleche_retour"].style.fontSize="100px";
        
    }
    
}, 1000);

document.body.children["Menu"].children["Block_Endurance"].addEventListener("click",function () {
    
    document.body.children["Menu"].children["Block_Endurance"].style.left="500%";
    document.body.children["Menu"].children["Block_Force"].style.left="500%";
    document.body.children["Menu"].children["Block_Puissance"].style.left="500%";
    document.body.children["Menu"].children["Block_Hypertrophie"].style.left="500%";
    
    document.body.children["Fleche_retour"].style.left="0%";
    
    document.body.children["Exercice"].style.position="absolute";
    document.body.children["Exercice"].style.left="50%";
    document.body.children["Exercice"].innerHTML=`
                                                                                                            <br>
    <span id="attention">⚠️attention⚠️</span>                                                              <br>
                                                                                                            <br>
    <span id="attention">Répétitions : 20 à 30</span>                                                       <br>
    <span id="attention">Série : 2 ou 3</span>                                                              <br>
    <span id="attention">Charge : 40–60 % charge maximale</span>                                            <br>
    <span id="attention">Repos : 30 à 60s</span>                                                             <br>
                                                                                                            <br>
    <span id="titre">Jambe</span>                                                                           <br>
                                                                                                            <br>
    soulevé de pieds canard s2                                                                              <br>
    soulevé de pieds Flaman                                                                                 <br>
    <span id="ligne">------------</span>                                                                    <br>
    soulevé de pieds devans                                                                                 <br>
    <span id="ligne">------------</span>                                                                    <br>
    Le good morning                                                                                         <br>
    Le good morning canard s2                                                                               <br>
    <span id="ligne">------------</span>                                                                    <br>
    Les fentes bulgares                                                                                     <br>
    <span id="ligne">------------</span>                                                                    <br>
    squat summo                                                                                             <br>
    squat summo canard s2                                                                                   <br>
    <span id="ligne">------------</span>                                                                    <br>
    donkey kick                                                                                             <br>
    fire hydrant                                                                                            <br>
    L’extension de la hanche au sol                                                                         <br>
                                                                                                            <br>
    <span id="titre">Avant-Bras</span>                                                                      <br>
                                                                                                            <br>
    Contraction Poigné                                                                                      <br>
    <span id="ligne">------------</span>                                                                    <br>
    Curl inversé                                                                                            <br>
    <span id="ligne">------------</span>                                                                    <br>
    Curl Contraction poigné                                                                                 <br>
    <span id="ligne">------------</span>                                                                    <br>
    Curl poigné inversé                                                                                     <br>
                                                                                                            <br>
    <span id="titre">Bras</span>                                                                            <br>
                                                                                                            <br>
    Curl inversé block alterné                                                                              <br>
    <span id="ligne">------------</span>                                                                    <br>
    Curl pupitre                                                                                            <br>
    <span id="ligne">------------</span>                                                                    <br>
    Scullcruncher                                                                                           <br>
    <span id="ligne">------------</span>                                                                    <br>
    Arm Dumbbell Overhead Extension                                                                         <br>
                                                                                                            <br>
    <span id="titre">Epaule</span>                                                                          <br>
                                                                                                            <br>
    rotation latérale avans-bras                                                                            <br>
    L-Flies avec haltère                                                                                    <br>
    <span id="ligne">------------</span>                                                                    <br>
    élévation latérale avec haltères                                                                        <br>
    <span id="ligne">------------</span>                                                                    <br>
    élévation frontale avec haltères                                                                        <br>
    <span id="ligne">------------</span>                                                                    <br>
    l'oiseau assis                                                                                          <br>
    <span id="ligne">------------</span>                                                                    <br>
    Élévation latérale inclinée                                                                             <br>
                                                                                                            <br>
    <span id="titre">DOS</span>                                                                             <br>
                                                                                                            <br>
    Rowing buste penché                                                                                     <br>
    Shrug unilatéral                                                                                        <br>
    Elevation y unilatéral                                                                                  <br>
    Marche du fermier                                                                                       <br>
    <span id="ligne">------------</span>                                                                    <br>
    <a href="https://www.youtube.com/watch?v=98i1ILByo3s">info</a>                                          <br>
    Tirage horizontal unilatéral                                                                            <br>
    Tirage verticale prise neutre                                                                           <br>
    Tirage verticale unilatéral                                                                             <br>
    <span id="ligne">------------</span>                                                                    <br>
    Pompe debous écarté séré                                                                             <br>
    <span id="ligne">------------</span>                                                                    <br>
    <a href="https://www.louischartier.com/post/les-meilleurs-exercices-de-rhombo%C3%AFdes-pour-obtenir-un-dos-cisel%C3%A9">info</a>                                                                                      <br>
    Rowing à angle élevé à un bras                                                                                          <br>
    <span id="ligne">------------</span>                                                                    <br>
    Dentelé postéro-inférieur                                                                               <br>
                                                                                                            
    `;
    
});
document.body.children["Fleche_retour"].addEventListener("click",function () {
    
    document.body.children["Menu"].children["Block_Endurance"].style.left="50%";
    document.body.children["Menu"].children["Block_Force"].style.left="25%";
    document.body.children["Menu"].children["Block_Puissance"].style.left="75%";
    document.body.children["Menu"].children["Block_Hypertrophie"].style.left="50%";
    
    document.body.children["Fleche_retour"].style.left="-100%";
    
    document.body.children["Exercice"].style.position="fixed";
    document.body.children["Exercice"].style.left="500%";
    
});