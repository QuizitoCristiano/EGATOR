

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
        ('window-scroll', window.scrollY > 0)


})


// sho hide fag answer


const abrerIcon = document.querySelectorAll('.min_card');

abrerIcon.forEach(abrer => {
    abrer.addEventListener('click', () => {
        abrer.classList.toggle('open');



        /* ==============trocar icon ====*/

        const meuIcon = abrer.querySelector('.wrapper_icon i ');
        if (meuIcon.className === 'bx bx-plus') {
            meuIcon.className = "bx bx-minus"
        }
        else {
            meuIcon.className = "bx bx-plus"

        };
    })

})


/* ============== SHOW MENU-BAR ====*/

const menu = document.querySelector('.nav_menu')
const menuBtn = document.querySelector('.open-menu-btn')
const closeBtn = document.querySelector('.close-menu-btn')

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";

    closeBtn.style.display = "inline-block";

    menuBtn.style.display = "none"
} )


const  closeNav = () => {
    menu.style.display = "none";

    closeBtn.style.display = "none";

    menuBtn.style.display = "inline-block"
}


closeBtn.addEventListener('click', closeNav )