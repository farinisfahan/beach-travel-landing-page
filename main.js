/*=================== SHOW MENU ===================*/
const showMenu = (toggleId, navId) => {
    const 
        toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

        //validates that variables exist
        if(toggle && nav) {
            toggle.addEventListener('click', () => {
                nav.classList.toggle('show-menu')
            })
        }
}

showMenu('nav-toggle', 'nav-menu')

/*=================== POPUP ===================*/
const btnOpenVideo = document.querySelectorAll('.island__video-content');
const islandPopup = document.getElementById('popup');

function popUp() {
    islandPopup.classList.add('show-popup')
};

btnOpenVideo.forEach(b => b.addEventListener('click', popUp));

/* Close popup */
const btnCloseVideo = document.getElementById('popup-close');

btnCloseVideo.addEventListener('click', () => {
    islandPopup.classList.remove('show-popup')
})

/*=================== SWIPER JS ===================*/

/*=================== POPUP ===================*/
let swiper = new Swiper(".gallery-thumb", {
    spaceBetween: 0,
    slidesPerView: 0,
});

let swiper2 = new Swiper(".gallery-top", {
    effect: "fade",
    loop: "true",

    thumbs: {
        swiper: swiper,
    },
});

/* DO NOT CHANGE THE VARIABLE NAME (SWIPER, SWIPER2) */

/*=================== GSAP ANIMATION ===================*/
const controlImg = document.querySelectorAll('.controls__img');

function scrollAnimation() {
    gsap.from('.island__subtitle', { opacity: 0, duration: .2, delay: .2, y: -20 })
    gsap.from('.island__title', { opacity: 0, duration: .3, delay: .3, y: -20 })
    gsap.from('.island__description', { opacity: 0, duration: .4, delay: .4, y: -20 })
    gsap.from('.island__button', { opacity: 0, duration: .5, delay: .5, y: -20 })
    gsap.from('.island__video-content', { opacity: 0, duration: .6, delay: .6, y: -20 })

    islandPopup.classList.remove('show-popup')
}

controlImg.forEach(c => c.addEventListener('click', scrollAnimation))