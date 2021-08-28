/* ----- Show Menu ----- */

const showMenu = (toggleId, navId) => {
    const toggle = document.querySelector(`#${toggleId}`),
          nav = document.querySelector(`#${navId}`);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu');
        });
    }
}

showMenu('nav-toggle', 'nav-menu');

/* ----- Remove Menu ----- */

const navLink = document.querySelectorAll('.nav__link'),
      navMenu = document.querySelector('#nav-menu');

const linkAction = () => navMenu.classList.remove('show-menu');

navLink.forEach(item => item.addEventListener('click', linkAction));

/* ----- Scroll Section Active Link ----- */

const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(item => {
        const sectionHeight = item.offsetHeight,
              sectionTop = item.offsetTop - 50,
              sectionId = item.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.add('active-link');
        } else {
            document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.remove('active-link');
        }
    })
}

window.addEventListener('scroll', scrollActive);

/* ----- Change Background Header ----- */

const scrollHeader = () => {
    const nav = document.querySelector('#header');

    if (this.scrollY >= 200) {
        nav.classList.add('scroll-header');
    } else {
        nav.classList.remove('scroll-header');
    }
}

window.addEventListener('scroll', scrollHeader);

/* ----- Show Scroll Top ----- */

const scrollTop = () => {
    const scrollTop = document.querySelector('#scroll-top');

    if (this.scrollY >= 560) {
        scrollTop.classList.add('scroll-top');
    } else {
        scrollTop.classList.remove('scroll-top');
    }
}

window.addEventListener('scroll', scrollTop);

/* ----- Dark Light Theme ----- */

const themeButton = document.getElementById('theme-button'),
      darkTheme = 'dark-theme',
      iconTheme = 'bx-sun';

const selectedTheme = localStorage.getItem('selected-theme'),
      selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light',
      getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun';

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme);
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/* ----- Scroll Reveal Animation ----- */

const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`.home__data, .home__img,
            .about__data, .about__img,
            .services__content, .menu__content,
            .app__data, .app__img,
            .contact__data, .contact__button,
            .footer__content`, {
    interval: 200
})


