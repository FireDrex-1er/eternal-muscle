let ratio_Fenêtre = screen.width / screen.height;
let retour = document.body.children["exercice"].children["exercice_retour"];

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
        
        <br><br><span id="exercice_titre">Main</span><br><br>
        <a href="https://www.youtube.com/watch?v=2Y91VvLJ6iA&t=115s">Complet</a><br><br>

        <span id="exercice_titre">Avant-Bras</span><br><br>
        <a href="https://www.youtube.com/watch?v=6GHFxkmFDk0&t=19s">Complet</a><br><br>
            
        <span id="exercice_titre">Bras</span><br><br>
        <a href="https://youtu.be/FXa8AbKSTMk?t=16">Biceps</a><br>
        <a href="https://www.youtube.com/shorts/QflBzYb2ocU?t=2&feature=share">Bracial anterieur</a><br>
        <a href="https://youtu.be/gP_G_gZ6_Ng?t=16">Triceps</a><br><br><br><br><br>
        <span id="exercice_retour">RETOUR</span><br><br><br><br><br><br>
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
    

setInterval(() => {
    if (document.body.clientWidth > document.body.clientHeight) {
        
        
        window.document.body.children["fond"].children["deco1"].style.width="5%";
        window.document.body.children["fond"].children["deco2"].style.width="5%";
        window.document.body.children["fond"].children["deco3"].style.width="5%";
        window.document.body.children["fond"].children["deco4"].style.width="5%";
    }
}, 500);
});

