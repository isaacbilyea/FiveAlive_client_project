export function burgerMenu() {

    //VARIABLES
    const hamburgerMenu = document.querySelector('#hamburger-menu'),
          mainNav = document.querySelector('#main-nav'),
          menuText = document.querySelector('#menu-button span'),
          body = document.querySelector('body'),
          scrollbarWidth = window.innerWidth - document.documentElement.clientWidth,
          submenuToggle = document.querySelector('.submenu-toggle'),
          submenu = document.querySelector('.submenu');

    document.documentElement.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);

    //FUNCTIONS
    function toggleMenu() {
        hamburgerMenu.classList.toggle('activate');
        mainNav.classList.toggle('show');
        body.classList.toggle('menu-open');

        if(mainNav.classList.contains('show')) {
            menuText.textContent = 'Close';
        } else {        
            menuText.textContent = 'Menu';
        }
        
    };

    function toggleSubmenu() {
        if (window.innerWidth < 1200) {
            submenuToggle.classList.toggle('active');
            submenu.classList.toggle('active');
        }
    }

    function resetMenu() {
        if (window.innerWidth >= 1200) {
            hamburgerMenu.classList.remove('activate');
            mainNav.classList.remove('show');
            body.classList.remove('menu-open');
            menuText.textContent = 'Menu';
            submenuToggle.classList.remove('active');
            submenu.classList.remove('active');
        }
    }


    //EVENT LISTENERS
    hamburgerMenu.addEventListener('click', toggleMenu);
    submenuToggle.addEventListener('click', toggleSubmenu);
    window.addEventListener('resize', resetMenu);

}