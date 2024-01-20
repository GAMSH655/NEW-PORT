const menuBtn = document.querySelector('.menu-btn');
const cancel_Btn = document.querySelector ('.cancel-btn');
const navMEnuMobile = document.querySelector ('.mobile-view-header')

menuBtn.addEventListener('click' , function() {
unorderedList.style.display = 'block'
cancel_Btn.style.color = 'red'
})

cancel_Btn.addEventListener('click' , function() {
navMEnuMobile.style.display = 'none'
console.log('sharp')
})

menuBtn.addEventListener('click' , function() {
navMEnuMobile.style.display = 'block'
console.log('sharp')
})
