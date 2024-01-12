const menuBtn = document.querySelector('.menu-btn');
const cancel_Btn = document.querySelector ('.cancelBtn');
const unorderedList = document.querySelector ('.UL')

menuBtn.addEventListener('click' , function() {
unorderedList.style.display = 'block'
cancel_Btn.style.color = 'red'
})

cancel_Btn.addEventListener('click' , function() {
unorderedList.style.display = 'none'

})
