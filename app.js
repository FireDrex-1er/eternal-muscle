setInterval(() => {
    if (document.body.clientHeight > document.body.clientWidth ) {
        
        document.body.style.backgroundSize="160%";
        document.getElementById("Bras_Epaule").style.fontSize="20px";
        document.getElementById("Dos").style.fontSize="20px";
        document.getElementById("Os").style.fontSize="20px";
    }
    if (document.body.clientHeight < document.body.clientWidth ) {
        document.getElementById("Dos").style.fontSize="30px";
        document.getElementById("Bras_Epaule").style.fontSize="30px";
        document.getElementById("os").style.fontSize="30px";
    }
}, 500);