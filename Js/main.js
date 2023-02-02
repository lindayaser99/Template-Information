let links = document.querySelectorAll('nav a');
let sections = document.querySelectorAll('section');


window.onscroll = function(){
    sections.forEach(section => {
        if(window.scrollY >= section.offsetTop - 100){
            links.forEach(link => {
                if(link.getAttribute('href') == '#'+section.getAttribute('id')){
                    link.style.background = '#ffd800';
                    link.style.color = '#000';
                }else{
                    link.style.background = null;
                    link.style.color = null;
                    
                }
            });
        }
    });
}


let element = document.querySelector('ul');
let btnshow = document.querySelector('span.bur-menu');


btnshow.onclick = function(){
    element.classList.toggle('show-ul');
    if(element.classList.contains('show-ul')){
        btnshow.innerHTML='<i class="fa-solid fa-xmark"></i>';
    }else{
        btnshow.innerHTML='<i class="fa-solid fa-bars"></i>'   
    }
}