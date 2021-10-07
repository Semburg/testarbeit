
// NAVIGATION 

const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');

const navbar = document.getElementById('nav_groups');

openBtn.addEventListener('click', ()=>{
    navbar.classList.add('show');
})

closeBtn.addEventListener('click', ()=>{
    navbar.classList.remove('show');
})

// closing the Manu on "ESC"
document.addEventListener('keydown', (e)=>{
    if (navbar.classList.contains('show')) {
        if (e.code == "Escape") {
            navbar.classList.remove('show');
        }
    }
})

