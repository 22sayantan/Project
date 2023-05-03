var menuIcon = document.querySelector('.menu-icon');
var sidebar = document.querySelector('.sidebar');
var contianer = document.querySelector('.container');

menuIcon.addEventListener('click',()=>{
    sidebar.classList.toggle('small-sidebar');
    contianer.classList.toggle('large-container');
})