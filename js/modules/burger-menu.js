export function burgerMenu() {

    //VARIABLES
    const hamburgerMenu = document.querySelector('#hamburger-menu'),
          mainNav = document.querySelector('#main-nav'),
          menuText = document.querySelector('#menu-button span'),
          body = document.querySelector('body'),
          scrollbarWidth = window.innerWidth - document.documentElement.clientWidth,
          historyLink = document.querySelector('#history-submenu'),
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

    function toggleSubmenu(e) {
        if (window.innerWidth < 1200) {
            e.preventDefault();
            historyLink.classList.toggle('submenu-active');
            submenu.classList.toggle('active');
        }
    }

    function resetMenu() {
        if (window.innerWidth >= 1200) {
            hamburgerMenu.classList.remove('activate');
            mainNav.classList.remove('show');
            body.classList.remove('menu-open');
            menuText.textContent = 'Menu';
            historyLink.classList.remove('submenu-active');
            submenu.classList.remove('active');
        }

        if (window.innerWidth < 450) {
            menuText.style.display = 'none';
        } else {
            menuText.style.display = 'block';
        }
    }


    //EVENT LISTENERS
    hamburgerMenu.addEventListener('click', toggleMenu);
    historyLink.addEventListener('click', toggleSubmenu);
    window.addEventListener('resize', resetMenu);
    window.addEventListener('load', resetMenu);

}