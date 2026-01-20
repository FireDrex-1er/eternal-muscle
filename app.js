setInterval(() => {
    if (document.body.clientWidth <= 425) {
        document.getElementById("element_head_timothe").style.fontSize="20px";
        document.getElementById("element_head_timothe").style.position='fixed';
        document.getElementById("element_head_timothe").style.left="25%";
        document.getElementById("element_head_timothe").style.transform="translate(-50%,-145%)";

        document.getElementById("element_head_sebastien").style.fontSize="20px";
        document.getElementById("element_head_sebastien").style.position='fixed';
        document.getElementById("element_head_sebastien").style.left="25%";
        document.getElementById("element_head_sebastien").style.transform="translate(-50%,50%)";

        document.getElementById("element_head_serge").style.fontSize="20px";
        document.getElementById("element_head_serge").style.position='fixed';
        document.getElementById("element_head_serge").style.left="75%";
        document.getElementById("element_head_serge").style.transform="translate(-50%,-145%)";

        document.getElementById("element_head_elyne").style.fontSize="20px";
        document.getElementById("element_head_elyne").style.position='fixed';
        document.getElementById("element_head_elyne").style.transform="translate(-50%,50%)";
        document.getElementById("element_head_elyne").style.left="75%";

        document.getElementById("logo").style.height="70%";
    }if (document.body.clientWidth > 425) {
        document.getElementById("element_head_timothe").style.fontSize="40px";
        document.getElementById("element_head_timothe").style.position='fixed';
        document.getElementById("element_head_timothe").style.left="12,5%";
        document.getElementById("element_head_timothe").style.transform="translate(0%,-50%)";

        document.getElementById("element_head_sebastien").style.fontSize="40px";
        document.getElementById("element_head_sebastien").style.position='fixed';
        document.getElementById("element_head_sebastien").style.left="37,5%";
        document.getElementById("element_head_sebastien").style.transform="translate(0%,-50%)";

        document.getElementById("element_head_serge").style.fontSize="40px";
        document.getElementById("element_head_serge").style.position='fixed';
        document.getElementById("element_head_serge").style.left="62,5%";
        document.getElementById("element_head_serge").style.transform="translate(-100%,-50%)";

        document.getElementById("element_head_elyne").style.fontSize="40px";
        document.getElementById("element_head_elyne").style.position='fixed';
        document.getElementById("element_head_elyne").style.transform="translate(-100%,-50%)";
        document.getElementById("element_head_elyne").style.left="87,5%";

        document.getElementById("logo").style.height="90%";
    }
}, 500);

