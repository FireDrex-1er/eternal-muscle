
let Tableau_GrosBras = [1, 2];
let GrosBras_random = Tableau_GrosBras[Math.floor(Math.random() * Tableau_GrosBras.length)];
let Texte1 = document.getElementById("texte1-1");
let TEXTE1 = document.getElementById("texte1");

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
    
    Texte1.innerHTML=`GROS BRAS(biceps)`;

    if (Texte2_random === 1) {
        
        Texte2_1.innerHTML=`Exercice 🟢 : Curl Concentré 🔁 3-4 S de 10-12 Rep par bras    <div class="Video" id="Video" onclick="Curl_Concentré()"></div>`;
        Texte2_2.innerHTML=`Exercice 🟡 : Curl 21 🔁 3 S de 21 Rep                         <div class="Video" id="Video" onclick="Curl_21()"></div>`;
        Texte2_3.innerHTML=`Exercice 🟠 : Spider Curl sur chaise/lit 🔁 3 S de 8 Reps      <div class="Video" id="Video" onclick="Spider_Curl_chaise_lit()"></div>`;
        Texte2_4.innerHTML=`Exercice 🔴 : Isométrie 90° + Curl Alterné 🔁 2 S de 10 Reps   <div class="Video" id="Video" onclick="Isométrie_90o_Curl_Alterné()"></div>`;
        Texte2_5.innerHTML=`Exercice 🟤 : Tractions négatives 🔁 4 S de 4 Reps             <div class="Video" id="Video" onclick="Tractions_négatives()"></div>`;
        Texte2_6.innerHTML=`Exercice ⚫ : Tractions supination 🔁 4 S de 4 Reps            <div class="Video" id="Video" onclick="Tractions_supination()"></div>`;

    
    }if (Texte2_random === 2) {
        
        Texte2_1.innerHTML=`Exercice ⚫ : Tractions supination 🔁 4 S de 4 Reps            <div class="Video" id="Video" onclick="Tractions_supination()"></div>`;
        Texte2_2.innerHTML=`Exercice 🟢 : Curl Concentré 🔁 3 S de 10 Rep par bras         <div class="Video" id="Video" onclick="Curl_Concentré()"></div>`;
        Texte2_3.innerHTML=`Exercice 🟡 : Curl 21 🔁 3 S de 21 Rep                         <div class="Video" id="Video" onclick="Curl_21()"></div>`;
        Texte2_4.innerHTML=`Exercice 🟠 : Spider Curl sur chaise/lit 🔁 3 S de 8 Reps      <div class="Video" id="Video" onclick="Spider_Curl_chaise_lit()"></div>`;
        Texte2_5.innerHTML=`Exercice 🔴 : Isométrie 90° + Curl Alterné 🔁 2 S de 10 Reps   <div class="Video" id="Video" onclick="Isométrie_90o_Curl_Alterné()"></div>`;
        Texte2_6.innerHTML=`Exercice 🟤 : Tractions négatives 🔁 4 S de 4 Reps             <div class="Video" id="Video" onclick="Tractions_négatives()"></div>`;
    
    }if (Texte2_random === 3) {
        
        Texte2_1.innerHTML=`Exercice 🟤 : Tractions négatives 🔁 4 S de 4 Reps             <div class="Video" id="Video" onclick="Tractions_négatives()"></div>`;
        Texte2_2.innerHTML=`Exercice ⚫ : Tractions supination 🔁 4 S de 4 Reps            <div class="Video" id="Video" onclick="Tractions_supination()"></div>`;
        Texte2_3.innerHTML=`Exercice 🟢 : Curl Concentré 🔁 3 S de 10 Rep par bras         <div class="Video" id="Video" onclick="Curl_Concentré()"></div>`;
        Texte2_4.innerHTML=`Exercice 🟡 : Curl 21 🔁 3 S de 21 Rep                         <div class="Video" id="Video" onclick="Curl_21()"></div>`;
        Texte2_5.innerHTML=`Exercice 🟠 : Spider Curl sur chaise/lit 🔁 3 S de 8 Reps      <div class="Video" id="Video" onclick="Spider_Curl_chaise_lit()"></div>`;
        Texte2_6.innerHTML=`Exercice 🔴 : Isométrie 90° + Curl Alterné 🔁 2 S de 10 Reps   <div class="Video" id="Video" onclick="Isométrie_90o_Curl_Alterné()"></div>`;
    
    }if (Texte2_random === 4) {
        
        Texte2_1.innerHTML=`Exercice 🔴 : Isométrie 90° + Curl Alterné 🔁 2 S de 10 Reps   <div class="Video" id="Video" onclick="Isométrie_90o_Curl_Alterné()"></div>`;
        Texte2_2.innerHTML=`Exercice 🟤 : Tractions négatives 🔁 4 S de 4 Reps             <div class="Video" id="Video" onclick="Tractions_négatives()"></div>`;
        Texte2_3.innerHTML=`Exercice ⚫ : Tractions supination 🔁 4 S de 4 Reps            <div class="Video" id="Video" onclick="Tractions_supination()"></div>`;
        Texte2_4.innerHTML=`Exercice 🟢 : Curl Concentré 🔁 3 S de 10 Rep par bras         <div class="Video" id="Video" onclick="Curl_Concentré()"></div>`;
        Texte2_5.innerHTML=`Exercice 🟡 : Curl 21 🔁 3 S de 21 Rep                         <div class="Video" id="Video" onclick="Curl_21()"></div>`;
        Texte2_6.innerHTML=`Exercice 🟠 : Spider Curl sur chaise/lit 🔁 3 S de 8 Reps      <div class="Video" id="Video" onclick="Spider_Curl_chaise_lit()"></div>`;
    
    }if (Texte2_random === 5) {
        
        Texte2_1.innerHTML=`Exercice 🟠 : Spider Curl sur chaise/lit 🔁 3 S de 8 Reps      <div class="Video" id="Video" onclick="Spider_Curl_chaise_lit()"></div>`;
        Texte2_2.innerHTML=`Exercice 🔴 : Isométrie 90° + Curl Alterné 🔁 2 S de 10 Reps   <div class="Video" id="Video" onclick="Isométrie_90o_Curl_Alterné()"></div>`;
        Texte2_3.innerHTML=`Exercice 🟤 : Tractions négatives 🔁 4 S de 4 Reps             <div class="Video" id="Video" onclick="Tractions_négatives()"></div>`;
        Texte2_4.innerHTML=`Exercice ⚫ : Tractions supination 🔁 4 S de 4 Reps            <div class="Video" id="Video" onclick="Tractions_supination()"></div>`;
        Texte2_5.innerHTML=`Exercice 🟢 : Curl Concentré 🔁 3 S de 10 Reps par bras        <div class="Video" id="Video" onclick="Curl_Concentré()"></div>`;
        Texte2_6.innerHTML=`Exercice 🟡 : Curl 21 🔁 3 S de 21 Rep                         <div class="Video" id="Video" onclick="Curl_21()"></div>`;
    
    }if (Texte2_random === 6) {
        
        Texte2_1.innerHTML=`Exercice 🟡 : Curl 21 🔁 3 S de 21 Rep                         <div class="Video" id="Video" onclick="Curl_21()"></div>`;
        Texte2_2.innerHTML=`Exercice 🟠 : Spider Curl sur chaise/lit 🔁 3 S de 8 Reps      <div class="Video" id="Video" onclick="Spider_Curl_chaise_lit()"></div>`;
        Texte2_3.innerHTML=`Exercice 🔴 : Isométrie 90° + Curl Alterné 🔁 2 S de 10 Reps   <div class="Video" id="Video" onclick="Isométrie_90o_Curl_Alterné()"></div>`;
        Texte2_4.innerHTML=`Exercice 🟤 : Tractions négatives 🔁 4 S de 4 Reps             <div class="Video" id="Video" onclick="Tractions_négatives()"></div>`;
        Texte2_5.innerHTML=`Exercice ⚫ : Tractions supination 🔁 4 S de 4 Reps            <div class="Video" id="Video" onclick="Tractions_supination()"></div>`;
        Texte2_6.innerHTML=`Exercice 🟢 : Curl Concentré 🔁 3 S de 10 Reps par bras        <div class="Video" id="Video" onclick="Curl_Concentré()"></div>`;
    
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

     ////////////
    // MOBILE //
   ////////////
    // 3.5 pouce      320-379 px largeur  480-830 px hauteur
    if (document.body.clientWidth >= 320 && document.body.clientHeight >= 480 && document.body.clientWidth <= 379 && document.body.clientHeight <= 830) {

        Texte2_1.style.fontSize="15.5px"
        Texte2_2.style.fontSize="15.5px"
        Texte2_3.style.fontSize="15.5px"
        Texte2_4.style.fontSize="15.5px"
        Texte2_5.style.fontSize="15.5px"
        Texte2_6.style.fontSize="15.5px"
        Texte1.style.fontSize="15px"
        TEXTE1.style.width="45%"
        TEXTE1.style.height="10%"
        
    }
    // 6.1 pouce      380-574 px largeur   830-929 px hauteur 
    if (document.body.clientWidth >= 380 && document.body.clientHeight >= 830 && document.body.clientWidth < 575 && document.body.clientHeight < 930) {

        Texte2_1.style.fontSize="20px"
        Texte2_2.style.fontSize="20px"
        Texte2_3.style.fontSize="20px"
        Texte2_4.style.fontSize="20px"
        Texte2_5.style.fontSize="20px"
        Texte2_6.style.fontSize="20px"
        Texte1.style.fontSize="22px"
        TEXTE1.style.width="45%"
        TEXTE1.style.height="12%"
        
    }
    // 8 pouce        575-769 px largeur   930-1029 px hauteur 
    if (document.body.clientWidth >= 575 && document.body.clientHeight >= 930 && document.body.clientWidth < 770 && document.body.clientHeight < 1030) {

        Texte2_1.style.fontSize="28px"
        Texte2_2.style.fontSize="28px"
        Texte2_3.style.fontSize="28px"
        Texte2_4.style.fontSize="28px"
        Texte2_5.style.fontSize="28px"
        Texte2_6.style.fontSize="28px"
        Texte1.style.fontSize="35px"
        TEXTE1.style.width="45%"
        TEXTE1.style.height="15%"
        

    }

     //////////////
    // Tablette //
   //////////////

    // 8.1 pouce           770-897 px largeur   1030-1198 px hauteur       ou        1030-1198 px largeur   770-897 px hauteur
    if (document.body.clientWidth >= 770 && document.body.clientHeight >= 1030 && document.body.clientWidth <= 897 && document.body.clientHeight <= 1198) {

        Texte2_1.style.fontSize="35px"
        Texte2_2.style.fontSize="35px"
        Texte2_3.style.fontSize="35px"
        Texte2_4.style.fontSize="35px"
        Texte2_5.style.fontSize="35px"
        Texte2_6.style.fontSize="35px"
        Texte1.style.fontSize="40px"
        TEXTE1.style.width="50%"
        TEXTE1.style.height="15%"
        
    }if (document.body.clientWidth >= 1030 && document.body.clientHeight >= 770 && document.body.clientWidth <= 1198 && document.body.clientHeight <= 897) {

        Texte2_1.style.fontSize="30px"
        Texte2_2.style.fontSize="30px"
        Texte2_3.style.fontSize="30px"
        Texte2_4.style.fontSize="30px"
        Texte2_5.style.fontSize="30px"
        Texte2_6.style.fontSize="30px"
        Texte1.style.fontSize="45px"
        TEXTE1.style.width="50%"
        TEXTE1.style.height="15%"
        
    }

    // 12.9 pouce          898-1024 px largeur   1199-1366 px hauteur       ou        1199-1366 px largeur   898-1024 px hauteur
    if (document.body.clientWidth >= 898 && document.body.clientHeight >= 1199 && document.body.clientWidth <= 1024 && document.body.clientHeight <= 1366) {

        Texte2_1.style.fontSize="40px"
        Texte2_2.style.fontSize="40px"
        Texte2_3.style.fontSize="40px"
        Texte2_4.style.fontSize="40px"
        Texte2_5.style.fontSize="40px"
        Texte2_6.style.fontSize="40px"
        Texte1.style.fontSize="55px"
        TEXTE1.style.width="50%"
        TEXTE1.style.height="16%"
        
    }if (document.body.clientWidth >= 1199 && document.body.clientHeight >= 898 && document.body.clientWidth <= 1366 && document.body.clientHeight <= 1024) {

        Texte2_1.style.fontSize="38px"
        Texte2_2.style.fontSize="38px"
        Texte2_3.style.fontSize="38px"
        Texte2_4.style.fontSize="38px"
        Texte2_5.style.fontSize="38px"
        Texte2_6.style.fontSize="38px"
        Texte1.style.fontSize="45px"
        TEXTE1.style.width="40%"
        TEXTE1.style.height="13%"
        
    }

     /////////////////
    // PC portable //
   /////////////////

    // 13 pouce             1280-1408 px largeur   720-792 px hauteur       ou        1512-1596 px largeur   963-982 px hauteur
    if (document.body.clientWidth >= 1280 && document.body.clientHeight >= 720 && document.body.clientWidth <= 1408 && document.body.clientHeight <= 792) {

        Texte2_1.style.fontSize="36px"
        Texte2_2.style.fontSize="36px"
        Texte2_3.style.fontSize="36px"
        Texte2_4.style.fontSize="36px"
        Texte2_5.style.fontSize="36px"
        Texte2_6.style.fontSize="36px"
        Texte1.style.fontSize="50px"
        TEXTE1.style.width="40%"
        TEXTE1.style.height="16%"
        
    }if (document.body.clientWidth >= 1512 && document.body.clientHeight >= 963 && document.body.clientWidth <= 1596 && document.body.clientHeight <= 982) {

        Texte2_1.style.fontSize="41px"
        Texte2_2.style.fontSize="41px"
        Texte2_3.style.fontSize="41px"
        Texte2_4.style.fontSize="41px"
        Texte2_5.style.fontSize="41px"
        Texte2_6.style.fontSize="41px"
        Texte1.style.fontSize="50px"
        TEXTE1.style.width="35%"
        TEXTE1.style.height="16%"
        
    }
    
    // 17 pouce          1409-1536 px largeur   793-864 px hauteur       ou        1597-1680 px largeur   945-962 px hauteur
    if (document.body.clientWidth >= 1409 && document.body.clientHeight >= 793 && document.body.clientWidth <= 1536 && document.body.clientHeight <= 864) {

        Texte2_1.style.fontSize="38.5px"
        Texte2_2.style.fontSize="38.5px"
        Texte2_3.style.fontSize="38.5px"
        Texte2_4.style.fontSize="38.5px"
        Texte2_5.style.fontSize="38.5px"
        Texte2_6.style.fontSize="38.5px"
        Texte1.style.fontSize="50px"
        TEXTE1.style.width="36%"
        TEXTE1.style.height="16%"
        
    }if (document.body.clientWidth >= 1597 && document.body.clientHeight >= 945 && document.body.clientWidth <= 1680 && document.body.clientHeight <= 962) {

        Texte2_1.style.fontSize="41px"
        Texte2_2.style.fontSize="41px"
        Texte2_3.style.fontSize="41px"
        Texte2_4.style.fontSize="41px"
        Texte2_5.style.fontSize="41px"
        Texte2_6.style.fontSize="41px"
        Texte1.style.fontSize="50px"
        TEXTE1.style.width="35%"
        TEXTE1.style.height="16%"
        
    }

     /////////////
    // PC FIXE //
   /////////////

    // 17 pouce          1280-1600 px largeur   800-940 px hauteur       ou        1440-2000 px largeur   900-1170 px hauteur
    if (document.body.clientWidth >= 1280 && document.body.clientHeight >= 800 && document.body.clientWidth <= 1600 && document.body.clientHeight <= 940) {

        Texte2_1.style.fontSize="36.5px"
        Texte2_2.style.fontSize="36.5px"
        Texte2_3.style.fontSize="36.5px"
        Texte2_4.style.fontSize="36.5px"
        Texte2_5.style.fontSize="36.5px"
        Texte2_6.style.fontSize="36.5px"
        Texte1.style.fontSize="50px"
        TEXTE1.style.width="40%"
        TEXTE1.style.height="16%"
        
    }if (document.body.clientWidth >= 1440 && document.body.clientHeight >= 900 && document.body.clientWidth <= 2000 && document.body.clientHeight <= 1170) {

        Texte2_1.style.fontSize="43px"
        Texte2_2.style.fontSize="43px"
        Texte2_3.style.fontSize="43px"
        Texte2_4.style.fontSize="43px"
        Texte2_5.style.fontSize="43px"
        Texte2_6.style.fontSize="43px"
        Texte1.style.fontSize="50px"
        TEXTE1.style.width="35%"
        TEXTE1.style.height="16%"
        
    }
    
    // 60 pouce          1601-1920 px largeur   940-1080 px hauteur       ou        2001-2560 px largeur   1171-1440 px hauteur
    if (document.body.clientWidth >= 1601 && document.body.clientHeight >= 940 && document.body.clientWidth <= 1920 && document.body.clientHeight <= 1080) {

        Texte2_1.style.fontSize="46px"
        Texte2_2.style.fontSize="46px"
        Texte2_3.style.fontSize="46px"
        Texte2_4.style.fontSize="46px"
        Texte2_5.style.fontSize="46px"
        Texte2_6.style.fontSize="46px"
        Texte1.style.fontSize="55px"
        TEXTE1.style.width="36%"
        TEXTE1.style.height="16%"
        
    }if (document.body.clientWidth >= 2001 && document.body.clientHeight >= 1171 && document.body.clientWidth <= 2560 && document.body.clientHeight <= 1440) {

        
    }
    
}, 500);