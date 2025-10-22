
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
    Répétitions : 20 à 30                                                                                   <br>
    Charge : 40–60 % de votre charge maximale                                                               <br>
    Repos : 30 à 60                                                                                         <br>
                                                                                                            <br>
    <span id="titre">Jambe</span>                                                                           <br>
                                                                                                            <br>
    soulevé de terre à jambes raides                                                                        <br>
    <span id="ligne">------------</span>                                                                    <br>
    squats bulgares fractionnés                                                                             <br>
    <span id="ligne">------------</span>                                                                    <br>
    soulevé de pieds canard 2s                                                                              <br>
                                                                                                            <br>
    <span id="titre">Cuisse</span>                                                                          <br>
                                                                                                            <br>
    fente monté de genou                                                                                    <br>
    <span id="ligne">------------</span>                                                                    <br>
    squat summo                                                                                             <br>
    <span id="ligne">------------</span>                                                                    <br>
    chaise                                                                                                  <br>
                                                                                                            <br>
    <span id="titre">Fessier</span>                                                                         <br>
                                                                                                            <br>
    fente marché                                                                                            <br>
    <span id="ligne">------------</span>                                                                    <br>
    soulevé de terre summo                                                                                  <br>
    <span id="ligne">------------</span>                                                                    <br>
    fente arrière décalé sur côté                                                                           <br>
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
    Elévation latérales                                                                                     <br>
    <span id="ligne">------------</span>                                                                    <br>
    Peck deck inversé                                                                                       <br>
    <span id="ligne">------------</span>                                                                    <br>
    Dévelopé militaire assis                                                                                <br>
    <span id="ligne">------------</span>                                                                    <br>
    élévation unilatérales                                                                                  <br>
                                                                                                            
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