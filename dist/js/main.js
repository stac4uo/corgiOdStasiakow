const ulList = document.getElementById('ulList')
const nav = document.getElementById('nawigacja')
const menuIcon = document.getElementById('menuIcon')
const menuIconX = document.getElementById('menuIconX')
let liHamburger= document.querySelectorAll('.liHamburger')
let aHamburger= document.querySelectorAll('.liHamburger a')
// menuIcon.classList.toggle('rotate-90')

nav.addEventListener('click',()=>{
    menuIcon.classList.toggle('hidden')
    menuIconX.classList.toggle('hidden')
    ulList.classList.toggle('hidden')
    ulList.classList.toggle('flex')
    console.log('klik')
    menuIcon.classList.toggle('rotate-90')
    menuIcon.classList.toggle('rotate-0')
    
    
});



