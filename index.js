const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelectorAll(".nav__list");

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
    console.log("clicked")
});


navList.forEach(link=>{
        link.addEventListener('click',()=>{
            document.body.classList.remove('nav-open');
        })    
    })