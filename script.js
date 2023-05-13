

ScrollReveal().reveal('.Later',{ delay: 500 });

let corgiTapeta = document.querySelector('.corgiTapeta')
if(innerWidth<768){
    corgiTapeta.classList.toggle('bg-center')

}else{
    corgiTapeta.classList.remove('bg-center')
    corgiTapeta.classList.add('bg-top')
  
}



