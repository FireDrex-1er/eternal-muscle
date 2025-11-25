
window.addEventListener("load",()=>{
    
    if (document.body.clientHeight > document.body.clientWidth ) {

        document.body.children["head"].style.width="75%";
        document.body.children["head"].style.width="75%";
        document.body.children["head"].children["ligne"].children["anime_menu_burger"].children["menu_burger"].style.width="25px";

    }
    if (document.body.clientHeight < document.body.clientWidth ) {
        
        document.body.children["head"].style.width="14%";
        document.body.children["head"].style.width="14%";
        document.body.children["head"].children["ligne"].children["anime_menu_burger"].children["menu_burger"].style.width="45px";

    }

});
    let click_menuBurger = 0;

if (click_menuBurger == 0) {
    setTimeout(() => {
        if (document.body.clientHeight > document.body.clientWidth ) {
    
            document.body.children["head"].style.left="-69%";
    
        }
        if (document.body.clientHeight < document.body.clientWidth ) {
            
            document.body.children["head"].style.left="-12.5%";
    
        }
        click_menuBurger = 1;
        
    }, 100);
    
}


setInterval(() => {
    if (document.body.clientHeight > document.body.clientWidth ) {

        document.body.children["head"].style.width="75%";
        document.body.children["head"].style.width="75%";
        document.body.children["head"].children["ligne"].children["anime_menu_burger"].children["menu_burger"].style.width="25px";
        
        document.body.children["menu"].children[1].style.top="40%";
        document.body.children["menu"].children[1].style.left="50%";
        document.body.children["menu"].children[1].style.width="50%";
        document.body.children["menu"].children[2].style.top="75%";
        document.body.children["menu"].children[2].style.left="50%";
        document.body.children["menu"].children[2].style.width="50%";


    }
    if (document.body.clientHeight < document.body.clientWidth ) {
        
        document.body.children["head"].style.width="14%";
        document.body.children["head"].style.width="14%";
        document.body.children["head"].children["ligne"].children["anime_menu_burger"].children["menu_burger"].style.width="45px";
        
        document.body.children["menu"].children[1].style.top="50%";
        document.body.children["menu"].children[1].style.left="25%";
        document.body.children["menu"].children[1].style.width="15%";
        document.body.children["menu"].children[2].style.top="50%";
        document.body.children["menu"].children[2].style.left="75%";
        document.body.children["menu"].children[2].style.width="15%";


    }
}, 500);


document.getElementById("menu_burger").addEventListener("click",()=>{


    if (click_menuBurger == 0) {
        setTimeout(() => {

            if (document.body.clientHeight > document.body.clientWidth ) {
        
                document.body.children["head"].style.left="-69%";
        
            }
            if (document.body.clientHeight < document.body.clientWidth ) {
                
                document.body.children["head"].style.left="-12.5%";
        
            }
            click_menuBurger = 1;
            
        }, 100);
        
    }if (click_menuBurger == 1) {
        
        document.body.children["head"].style.left="0%";
        click_menuBurger = 0;

    }


});

document.body.children["head"].children[2].addEventListener('click', function() {
    window.location.href = 'https://eternal-musculation.netlify.app/Bras/index.html';
});document.body.children["head"].children[3].addEventListener('click', function() {
    window.location.href = 'https://eternal-musculation.netlify.app/Dos/index.html';
});document.body.children["menu"].children["fil_d_Ariane"].children[0].addEventListener('click', function() {
    window.location.href = 'https://eternal-musculation.netlify.app/index.html';
});document.body.children["menu"].children["fil_d_Ariane"].children[1].addEventListener('click', function() {
    window.location.href = 'https://eternal-musculation.netlify.app/Bras/index.html';
});document.body.children["menu"].children[1].addEventListener('click', function() {
    window.location.href = 'https://eternal-musculation.netlify.app/Bras/video_curl.html';
});document.body.children["menu"].children[2].addEventListener('click', function() {
    window.location.href = 'https://eternal-musculation.netlify.app/Bras/video_halteresAuFront.html';
});