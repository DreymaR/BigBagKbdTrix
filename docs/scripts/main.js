document.getElementById('menuIcon').addEventListener('click', toggleMenu);
let submenus = [].slice.call(document.getElementsByClassName('submenu'));
submenus.forEach(submenu => submenu.addEventListener('click', toggleSubmenu));

function toggleMenu() {
    if(window.matchMedia("(max-width: 1100px)").matches) {
        let menu = document.getElementById('menu');
        let menuContainer = document.getElementById('menuContainer');
        if (this.classList.contains('isActive')) {
            this.classList.remove('isActive');
            menu.classList.remove('isActive');
            document.getElementById('menuContainer').removeChild(document.getElementById('overlay'));
        }
        else {
            this.classList.add('isActive');
            menu.classList.add('isActive');
            let overlay = document.createElement("div");
            overlay.id = "overlay";
            menuContainer.insertAdjacentElement('afterbegin', overlay);
        }
    }
}

function toggleSubmenu() {
    if(window.matchMedia("(max-width: 1100px)").matches) {
        let submenu = $(this);
        let submenuChild = $(submenu).children().eq(1);
        if (submenu.hasClass('isActive')) {
            submenu.removeClass('isActive');
            submenuChild.css('height', "");
        }
        else {
            submenu.addClass('isActive');
            submenuChild.addClass('show');
            let offset = submenuChild.height();
            submenuChild.removeClass('show');
            submenuChild.css('height', offset + 'px');
        }
    }
}