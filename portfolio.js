document.addEventListener('DOMContentLoaded',() => {
  const links= document.querySelectorAll('nav a');
  links.forEach(link => {
    link.addEventListener('click',function(e){
      e.preventDefault();
      const targetID= this.getAttribute('href').substring(1);
      const targetSection= document.getElementById(targetID);

      targetSection.scrollIntoView({
        behavior:'smooth'});
      
             }); 
          
        });    
      
    });