document.getElementById('menuIcon').addEventListener('click', toggleMenu);

let submenus = [].slice.call(document.getElementsByClassName('submenu'));
submenus.forEach(submenu => submenu.addEventListener('click', toggleSubmenu));

let spoilers = [].slice.call(document.getElementsByClassName('spoiler'));
spoilers.forEach(spoiler => spoiler.children[0].addEventListener('click', toggleSpoiler));

function toggleMenu() {
    if(window.matchMedia("(max-width: 1100px)").matches) {
        let menu = document.getElementById('menu');
        let menuContainer = document.getElementById('menuContainer');
        if (this.classList.contains('isActive')) {
            this.classList.remove('isActive');
            menu.classList.remove('isActive');

            document.getElementById('menuContainer')
                    .removeChild(document.getElementById('overlay'));
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

function toggleSubmenu(e) {
    if(window.matchMedia("(max-width: 1100px)").matches) {
        let submenuParent = this;
        let submenu = submenuParent.children[1];
        if (submenuParent.classList.contains('isActive')) {
            submenuParent.classList.remove('isActive');
            submenu.setAttribute('style', '');
        }
        else {
            e.preventDefault();
            submenuParent.classList.add('isActive');

            submenu.style.height = "auto";
            let offset = submenu.offsetHeight;

            submenu.style.height =  `0px`;
            setTimeout(() => {
                submenu.style.height = offset + `px`;
            }, 1);
        }
    }
}

function toggleSpoiler() {
    let spoilerBody = this.parentNode.getElementsByClassName("spoilerBody")[0];
    if(spoilerBody.classList.contains('isActive')){
        spoilerBody.classList.remove('isActive');
        spoilerBody.parentNode.classList.remove('isActive');
    }
    else {
        spoilerBody.classList.add('isActive');
        spoilerBody.parentNode.classList.add('isActive');
    }
}