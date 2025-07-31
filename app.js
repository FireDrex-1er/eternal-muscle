
let Tableau_GrosBras = [1, 2];
let GrosBras_random = Tableau_GrosBras[Math.floor(Math.random() * Tableau_GrosBras.length)];
let Texte1 = document.getElementById("texte1-1");

let Texte2_1 = document.getElementById("texte2_1");
let Texte2_2 = document.getElementById("texte2_2");
let Texte2_3 = document.getElementById("texte2_3");
let Texte2_4 = document.getElementById("texte2_4");
let Texte2_5 = document.getElementById("texte2_5");
let Texte2_6 = document.getElementById("texte2_6");

let Tableau_Texte2 = [1, 2, 3, 4, 5, 6];
let Texte2_random = Tableau_Texte2[Math.floor(Math.random() * Tableau_Texte2.length)];



// Aléatoir //
GrosBras_random = 1;



console.log("::::::::::::::::::::::::::::::::::::::");
console.log("");
console.log("     Tableau_Texte2 : "+Tableau_Texte2);
console.log("     Texte2_random : "+Texte2_random);
console.log("");
console.log("::::::::::::::::::::::::::::::::::::::");
console.log("");
console.log("     Tableau_GrosBras : "+Tableau_GrosBras);
console.log("     GrosBras_random : "+GrosBras_random);
console.log("");
console.log("::::::::::::::::::::::::::::::::::::::");


if (GrosBras_random === 1) {
    
    Texte1.innerHTML=`GROS BRAS(triceps)`;

    if (Texte2_random === 1) {
        
        Texte2_1.innerHTML=`Exercice 🟢 : Curl Concentré 🔁 3-4 S de 10-12 Rep par bras    <div class="Video" onclick="Curl_Concentré()">🎥</div>`;
        Texte2_2.innerHTML=`Exercice 🟡 : Curl 21 🔁 3 S de 21 Rep                         <div class="Video" onclick="Curl_21()">🎥</div>`;
        Texte2_3.innerHTML=`Exercice 🟠 : Spider Curl sur chaise/lit 🔁 3 S de 8 Reps      <div class="Video" onclick="Spider_Curl_chaise_lit()">🎥</div>`;
        Texte2_4.innerHTML=`Exercice 🔴 : Isométrie 90° + Curl Alterné 🔁 2 S de 10 Reps   <div class="Video" onclick="Isométrie_90o_Curl_Alterné()">🎥</div>`;
        Texte2_5.innerHTML=`Exercice 🟤 : Tractions négatives 🔁 4 S de 4 Reps             <div class="Video" onclick="Tractions_négatives()">🎥</div>`;
        Texte2_6.innerHTML=`Exercice ⚫ : Tractions supination 🔁 4 S de 4 Reps            <div class="Video" onclick="Tractions_supination()">🎥</div>`;

    
    }if (Texte2_random === 2) {
        
        Texte2_1.innerHTML=`Exercice ⚫ : Tractions supination 🔁 4 S de 4 Reps            <div class="Video" onclick="Tractions_supination()">🎥</div>`;
        Texte2_2.innerHTML=`Exercice 🟢 : Curl Concentré 🔁 3 S de 10 Rep par bras    <div class="Video" onclick="Curl_Concentré()">🎥</div>`;
        Texte2_3.innerHTML=`Exercice 🟡 : Curl 21 🔁 3 S de 21 Rep                         <div class="Video" onclick="Curl_21()">🎥</div>`;
        Texte2_4.innerHTML=`Exercice 🟠 : Spider Curl sur chaise/lit 🔁 3 S de 8 Reps      <div class="Video" onclick="Spider_Curl_chaise_lit()">🎥</div>`;
        Texte2_5.innerHTML=`Exercice 🔴 : Isométrie 90° + Curl Alterné 🔁 2 S de 10 Reps   <div class="Video" onclick="Isométrie_90o_Curl_Alterné()">🎥</div>`;
        Texte2_6.innerHTML=`Exercice 🟤 : Tractions négatives 🔁 4 S de 4 Reps             <div class="Video" onclick="Tractions_négatives()">🎥</div>`;
    
    }if (Texte2_random === 3) {
        
        Texte2_1.innerHTML=`Exercice 🟤 : Tractions négatives 🔁 4 S de 4 Reps             <div class="Video" onclick="Tractions_négatives()">🎥</div>`;
        Texte2_2.innerHTML=`Exercice ⚫ : Tractions supination 🔁 4 S de 4 Reps            <div class="Video" onclick="Tractions_supination()">🎥</div>`;
        Texte2_3.innerHTML=`Exercice 🟢 : Curl Concentré 🔁 3 S de 10 Rep par bras    <div class="Video" onclick="Curl_Concentré()">🎥</div>`;
        Texte2_4.innerHTML=`Exercice 🟡 : Curl 21 🔁 3 S de 21 Rep                         <div class="Video" onclick="Curl_21()">🎥</div>`;
        Texte2_5.innerHTML=`Exercice 🟠 : Spider Curl sur chaise/lit 🔁 3 S de 8 Reps      <div class="Video" onclick="Spider_Curl_chaise_lit()">🎥</div>`;
        Texte2_6.innerHTML=`Exercice 🔴 : Isométrie 90° + Curl Alterné 🔁 2 S de 10 Reps   <div class="Video" onclick="Isométrie_90o_Curl_Alterné()">🎥</div>`;
    
    }if (Texte2_random === 4) {
        
        Texte2_1.innerHTML=`Exercice 🔴 : Isométrie 90° + Curl Alterné 🔁 2 S de 10 Reps   <div class="Video" onclick="Isométrie_90o_Curl_Alterné()">🎥</div>`;
        Texte2_2.innerHTML=`Exercice 🟤 : Tractions négatives 🔁 4 S de 4 Reps             <div class="Video" onclick="Tractions_négatives()">🎥</div>`;
        Texte2_3.innerHTML=`Exercice ⚫ : Tractions supination 🔁 4 S de 4 Reps            <div class="Video" onclick="Tractions_supination()">🎥</div>`;
        Texte2_4.innerHTML=`Exercice 🟢 : Curl Concentré 🔁 3 S de 10 Rep par bras    <div class="Video" onclick="Curl_Concentré()">🎥</div>`;
        Texte2_5.innerHTML=`Exercice 🟡 : Curl 21 🔁 3 S de 21 Rep                         <div class="Video" onclick="Curl_21()">🎥</div>`;
        Texte2_6.innerHTML=`Exercice 🟠 : Spider Curl sur chaise/lit 🔁 3 S de 8 Reps      <div class="Video" onclick="Spider_Curl_chaise_lit()">🎥</div>`;
    
    }if (Texte2_random === 5) {
        
        Texte2_1.innerHTML=`Exercice 🟠 : Spider Curl sur chaise/lit 🔁 3 S de 8 Reps      <div class="Video" onclick="Spider_Curl_chaise_lit()">🎥</div>`;
        Texte2_2.innerHTML=`Exercice 🔴 : Isométrie 90° + Curl Alterné 🔁 2 S de 10 Reps   <div class="Video" onclick="Isométrie_90o_Curl_Alterné()">🎥</div>`;
        Texte2_3.innerHTML=`Exercice 🟤 : Tractions négatives 🔁 4 S de 4 Reps             <div class="Video" onclick="Tractions_négatives()">🎥</div>`;
        Texte2_4.innerHTML=`Exercice ⚫ : Tractions supination 🔁 4 S de 4 Reps            <div class="Video" onclick="Tractions_supination()">🎥</div>`;
        Texte2_5.innerHTML=`Exercice 🟢 : Curl Concentré 🔁 3 S de 10 Reps par bras    <div class="Video" onclick="Curl_Concentré()">🎥</div>`;
        Texte2_6.innerHTML=`Exercice 🟡 : Curl 21 🔁 3 S de 21 Rep                         <div class="Video" onclick="Curl_21()">🎥</div>`;
    
    }if (Texte2_random === 6) {
        
        Texte2_1.innerHTML=`Exercice 🟡 : Curl 21 🔁 3 S de 21 Rep                         <div class="Video" onclick="Curl_21()">🎥</div>`;
        Texte2_2.innerHTML=`Exercice 🟠 : Spider Curl sur chaise/lit 🔁 3 S de 8 Reps      <div class="Video" onclick="Spider_Curl_chaise_lit()">🎥</div>`;
        Texte2_3.innerHTML=`Exercice 🔴 : Isométrie 90° + Curl Alterné 🔁 2 S de 10 Reps   <div class="Video" onclick="Isométrie_90o_Curl_Alterné()">🎥</div>`;
        Texte2_4.innerHTML=`Exercice 🟤 : Tractions négatives 🔁 4 S de 4 Reps             <div class="Video" onclick="Tractions_négatives()">🎥</div>`;
        Texte2_5.innerHTML=`Exercice ⚫ : Tractions supination 🔁 4 S de 4 Reps            <div class="Video" onclick="Tractions_supination()">🎥</div>`;
        Texte2_6.innerHTML=`Exercice 🟢 : Curl Concentré 🔁 3 S de 10 Reps par bras    <div class="Video" onclick="Curl_Concentré()">🎥</div>`;
    
    }

    function Curl_Concentré() {
        window.open(URL=("https://www.youtube.com/shorts/I_bKCYL2nL8"))
    }function Curl_21() {
        window.open(URL=("https://www.youtube.com/shorts/i1WvZlv4yOc"))
    }function Spider_Curl_chaise_lit() {
        window.open(URL=("https://www.youtube.com/watch?v=J1PKSTZs3Cw"))
    }function Isométrie_90o_Curl_Alterné() {
        window.open("Isométrie 90° + Curl Alterné.mp4")
    }function Tractions_négatives() {
        window.open(URL=("https://www.youtube.com/watch?v=J99MX_0dsak"))
    }function Tractions_supination() {
        window.open(URL=("https://www.youtube.com/shorts/kqLZFYtmSgU"))
    }

}if (GrosBras_random === 2) {
    
    Texte1.innerHTML=`GROS BRAS(triceps)`;

    

    if (Texte2_random === 1) {
        
        Texte2_1.innerHTML="Exercice 🟢 : Curl Concentré";
        Texte2_2.innerHTML="Exercice 🟡 : Curl 21";
        Texte2_3.innerHTML="Spider 🟠 : Curl sur chaise/lit";
        Texte2_4.innerHTML="Exercice 🔴 : Isométrie 90° + Curl Alterné";
        Texte2_5.innerHTML="Exercice 🟤 : Tractions négatives";
        Texte2_6.innerHTML="Exercice ⚫ : Tractions supination";
    
    }if (Texte2_random === 2) {
        
        
        Texte2_1.innerHTML="Exercice ⚫ : Tractions supination";
        Texte2_2.innerHTML="Exercice 🟢 : Curl Concentré";
        Texte2_3.innerHTML="Exercice 🟡 : Curl 21";
        Texte2_4.innerHTML="Spider 🟠 : Curl sur chaise/lit";
        Texte2_5.innerHTML="Exercice 🔴 : Isométrie 90° + Curl Alterné";
        Texte2_6.innerHTML="Exercice 🟤 : Tractions négatives";
    
    }if (Texte2_random === 3) {
        
        
        Texte2_1.innerHTML="Exercice 🟤 : Tractions négatives";
        Texte2_2.innerHTML="Exercice ⚫ : Tractions supination";
        Texte2_3.innerHTML="Exercice 🟢 : Curl Concentré";
        Texte2_4.innerHTML="Exercice 🟡 : Curl 21";
        Texte2_5.innerHTML="Spider 🟠 : Curl sur chaise/lit";
        Texte2_6.innerHTML="Exercice 🔴 : Isométrie 90° + Curl Alterné";
    
    }if (Texte2_random === 4) {
        
        Texte2_1.innerHTML="Exercice 🔴 : Isométrie 90° + Curl Alterné";
        Texte2_2.innerHTML="Exercice 🟤 : Tractions négatives";
        Texte2_3.innerHTML="Exercice ⚫ : Tractions supination";
        Texte2_4.innerHTML="Exercice 🟢 : Curl Concentré";
        Texte2_5.innerHTML="Exercice 🟡 : Curl 21";
        Texte2_6.innerHTML="Spider 🟠 : Curl sur chaise/lit";
    
    }if (Texte2_random === 5) {
        
        Texte2_1.innerHTML="Spider 🟠 : Curl sur chaise/lit";
        Texte2_2.innerHTML="Exercice 🔴 : Isométrie 90° + Curl Alterné";
        Texte2_3.innerHTML="Exercice 🟤 : Tractions négatives";
        Texte2_4.innerHTML="Exercice ⚫ : Tractions supination";
        Texte2_5.innerHTML="Exercice 🟢 : Curl Concentré";
        Texte2_6.innerHTML="Exercice 🟡 : Curl 21";
    
    }if (Texte2_random === 6) {
        
        Texte2_1.innerHTML="Exercice 🟡 : Curl 21";
        Texte2_2.innerHTML="Spider 🟠 : Curl sur chaise/lit";
        Texte2_3.innerHTML="Exercice 🔴 : Isométrie 90° + Curl Alterné";
        Texte2_4.innerHTML="Exercice 🟤 : Tractions négatives";
        Texte2_5.innerHTML="Exercice ⚫ : Tractions supination";
        Texte2_6.innerHTML="Exercice 🟢 : Curl Concentré";
    
    }

}

setInterval(() => {

    if (document.body.clientWidth < 700) {
        
        Texte2_1.style.fontSize="15px"
        Texte2_2.style.fontSize="15px"
        Texte2_3.style.fontSize="15px"
        Texte2_4.style.fontSize="15px"
        Texte2_5.style.fontSize="15px"
        Texte2_6.style.fontSize="15px"
        Texte1.style.fontSize="25px"

    }if (document.body.clientWidth >= 700) {
        
        Texte2_1.style.fontSize="25px"
        Texte2_2.style.fontSize="25px"
        Texte2_3.style.fontSize="25px"
        Texte2_4.style.fontSize="25px"
        Texte2_5.style.fontSize="25px"
        Texte2_6.style.fontSize="25px"
        Texte1.style.fontSize="40px"

    }

    if (document.body.clientWidth < 410) {
        
        Texte2_1.style.fontSize="12px"
        Texte2_2.style.fontSize="12px"
        Texte2_3.style.fontSize="12px"
        Texte2_4.style.fontSize="12px"
        Texte2_5.style.fontSize="12px"
        Texte2_6.style.fontSize="12px"
        Texte1.style.fontSize="20px"

    }

}, 500);


