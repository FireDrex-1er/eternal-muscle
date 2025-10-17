let ratio_Fenêtre = screen.width / screen.height;
let retour = document.body.children["exercice"].children["exercice_retour"];

// fond d'écrans

const fond = document.body.children["fond"];
fond.children["deco1"].style.position="fixed";fond.children["deco1"].style.transform="translate(-100%,-100%)";
fond.children["deco1"].style.left="100%";fond.children["deco1"].style.top="100%";
fond.children["deco1"].style.width="10%";

fond.children["deco2"].style.position="fixed";fond.children["deco2"].style.transform="translate(0%,-100%)";
fond.children["deco2"].style.left="0%";fond.children["deco2"].style.top="100%";
fond.children["deco2"].style.width="10%";

fond.children["deco3"].style.position="fixed";
fond.children["deco3"].style.left="0%";fond.children["deco3"].style.top="0%";
fond.children["deco3"].style.width="10%";

fond.children["deco4"].style.position="fixed";fond.children["deco4"].style.transform="translate(-100%)";
fond.children["deco4"].style.left="100%";fond.children["deco4"].style.top="0%";
fond.children["deco4"].style.width="10%";

document.getElementById("membres_supérieurs").addEventListener("click",()=>{

    document.getElementById("exercice").style.left="50%";document.getElementById("exercice").style.position="absolute";
    document.getElementById("membres_supérieurs").style.left="500%";document.getElementById("membres_inférieurs").style.left="500%";
    document.getElementById("tronc_antérieure").style.left="500%";document.getElementById("tronc_supérieure").style.left="500%";
    retour = document.body.children["exercice"].children["exercice_retour"];
    document.getElementById("exercice").innerHTML=`
        
        <br><br><span id="exercice_titre">Avant-Bras</span><br><br>
        <a href="https://www.youtube.com/watch?v=powCAut6R1U">Curl inversé</a><span> 80% RepMax x 3 séries </span><a class="info" href="https://www.youtube.com/watch?v=cc4_BgSEL0o">info</a><br>
        <a href="https://www.youtube.com/watch?v=JvByaglWS88">Curl poigné</a><span> 80% RepMax x 3 séries </span><a class="info" href="https://www.youtube.com/watch?v=cc4_BgSEL0o">info</a><br>
        <a href="https://www.youtube.com/watch?v=Lp8oJ-qf4dc">Tirage inversé avec haltères</a><span> 80% RepMax x 3 séries </span><a class="info" href="https://www.youtube.com/watch?v=cc4_BgSEL0o">info</a><br><br>
            
        <span id="exercice_titre">Bras</span><br><br>
        <a href="https://www.youtube.com/watch?v=wBvTNeXcbxQ">Curl incliné</a><span> 80% RepMax x 3 séries </span><a class="info" href="https://www.youtube.com/watch?v=di2pTqQKdss&t=323s">info</a><br>
        <!-- Niv sup traction supination -->
        <a href="https://www.youtube.com/watch?v=eLLruiyy9wo">Curl pupitre à un bras</a><span> 80% RepMax x 3 séries </span><a class="info" href="https://www.youtube.com/shorts/2Gk0A4FWyUE">info</a><br>
        <a href="https://www.youtube.com/shorts/K3mFeNz4e3w">extention triché</a><span> 80% RepMax x 3 séries </span><a class="info" href="https://www.youtube.com/watch?v=cXNeX_t08wQ&t=515s">info</a><br><br>
        
        <span id="exercice_titre">Epaule</span><br><br>
        <a href="https://www.youtube.com/shorts/HQu6wkHu3Z8">Développé militaire</a><span> 80% RepMax x 3 séries </span><a class="info" href="https://youtu.be/WYMludGzu48=584s">info</a><br>
        <a href="https://www.youtube.com/shorts/By_fcUxLOLU">oiseau alonger sur banc incliné</a><span> 80% RepMax x 3 séries </span><a class="info" href="https://youtu.be/7--wCDtdGHM?t=312">info</a>
        
        <br><br><br><br><span id="exercice_retour">RETOUR</span><br><br><br><br>
        `;
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

});
window.addEventListener("click",()=>{
    document.body.children["exercice"].children["exercice_retour"].addEventListener("click",()=>{
    
        document.getElementById("exercice").style.left="500%";document.getElementById("exercice").style.position="fixed";
        document.getElementById("membres_supérieurs").style.left="50%";document.getElementById("membres_inférieurs").style.left="50%";
        document.getElementById("tronc_antérieure").style.left="50%";document.getElementById("tronc_supérieure").style.left="50%";

    });
});

setInterval(() => {
    if (document.body.clientWidth > document.body.clientHeight) {
        
        
        window.document.body.children["fond"].children["deco1"].style.width="5%";
        window.document.body.children["fond"].children["deco2"].style.width="5%";
        window.document.body.children["fond"].children["deco3"].style.width="5%";
        window.document.body.children["fond"].children["deco4"].style.width="5%";
    }
}, 500);
