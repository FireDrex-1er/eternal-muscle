document.body.children["head"].children["head_texte_principal"].children["head_muscle"].addEventListener("click",()=>{
  if (document.body.children["head"].children["sous_head_muscle"].style.top == "110%") {
    setTimeout(() => {
      document.body.children["head"].children["sous_head_muscle"].style.top="-1100%";
    }, 100);
  }
  if (document.body.children["head"].children["sous_head_muscle"].style.top == "-1100%") {
    document.body.children["head"].children["sous_head_muscle"].style.top="110%";      
  }
    
});document.body.children["head"].children["head_texte_principal"].children["head_os"].addEventListener("click",()=>{
  if (document.body.children["head"].children["sous_head_os"].style.top == "110%") {
    setTimeout(() => {
      document.body.children["head"].children["sous_head_os"].style.top="-1100%";
    }, 100);
  }
  if (document.body.children["head"].children["sous_head_os"].style.top == "-1100%") {
    document.body.children["head"].children["sous_head_os"].style.top="110%";      
  }
    
});

document.body.children["head"].children["sous_head_muscle"].children[0].addEventListener("click",()=>{ 
  if (document.body.children["body"].children["video"].style.zIndex == "2") {
    setTimeout(() => {
      document.body.children["body"].children["video"].style.zIndex = "3"
      document.body.children["head"].children["sous_head_muscle"].style.top="-1100%";
    }, 100);
  } 
});document.body.children["head"].children["logo"].addEventListener("click",()=>{ 
  if (document.body.children["body"].children["video"].style.zIndex == "3") {
    setTimeout(() => {
      document.body.children["body"].children["video"].style.zIndex = "2"
      document.body.children["head"].children["sous_head_muscle"].style.top="-1100%";
      document.body.children["head"].children["sous_head_os"].style.top="-1100%";
    }, 100);
  }
});
