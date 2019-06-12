document.getElementById('menuIcon').addEventListener('click', toggleMenu);

let submenus = [].slice.call(document.getElementsByClassName('submenu'));
submenus.forEach(submenu => submenu.addEventListener('click', toggleSubmenu));

let spoilers = [].slice.call(document.getElementsByClassName('spoiler'));
spoilers.forEach(spoiler => spoiler.children[0].addEventListener('click', toggleSpoiler));

let platformsEl = document.getElementById('platformIcons').children;
let platforms = {
    'linux': platformsEl[0],
    'tmk': platformsEl[1],
    'mac': platformsEl[2],
    'win': platformsEl[3]
}

let platformWisePages = ['ergomods', 'keymappings', 'otherlayouts'];

Object.keys(platforms).forEach(platform => function () {
    platforms[platform].addEventListener('click',
        function () {
            togglePlatform(platform);
        }
    );
}());

document.onload = function () {
    let platform = sessionStorage.getItem('platform');
    if (platform) {
        platforms[platform].classList.add('isActive');
        page = getCurrentPageName();
        if (!(page.includes(platform))) {
            platformWisePages.forEach(function (platformWisePage) {
                if (getCurrentPageName().includes(platformWisePage)) {
                    window.location.href = platformWisePage + '-' + platform + '.html';
                }
            });
        }
        document.getElementById('platforms').classList.add(platform);
    }
    else {
        document.getElementById('platforms').removeAttribute('class');
    }
}();

function getCurrentPageName() {
    let path = window.location.pathname;
    let page = path.split("/").pop();
    return page;
}

function togglePlatform(platform) {
    let currentPlatform = sessionStorage.getItem('platform');
    page = getCurrentPageName();
    
    if (currentPlatform == platform) {
        sessionStorage.removeItem('platform');
        platforms[platform].classList.remove('isActive');
        if (getCurrentPageName().includes(platform)) {
            window.location.href = page.substring(0, page.indexOf('-')) + '.html';
        }
        document.getElementById('platforms').removeAttribute('class');
    }
    else {
        if (!currentPlatform) {
            document.getElementById('platforms').classList.add(platform);
            sessionStorage.setItem('platform', platform);
            platformWisePages.forEach(function (platformWisePage) {
                if (getCurrentPageName().includes(platformWisePage)) {
                    window.location.href = page.substring(0, page.indexOf('.')) + '-' + platform + '.html';
                }
            });
            platforms[platform].classList.add('isActive');
        }
        else {
            
            Object.keys(platforms).forEach(platform => function () {
                if (platforms[platform].classList.contains('isActive')) {
                    platforms[platform].classList.remove('isActive');
                }
            });
        }
    }
}

function toggleMenu() {
    if (window.matchMedia("(max-width: 1100px)").matches) {
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
    if (window.matchMedia("(max-width: 1100px)").matches) {
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

            submenu.style.height = `0px`;
            setTimeout(() => {
                submenu.style.height = offset + `px`;
            }, 1);
        }
    }
}

function toggleSpoiler() {
    let spoilerBody = this.parentNode.getElementsByClassName("spoilerBody")[0];
    if (spoilerBody.classList.contains('isActive')) {
        spoilerBody.classList.remove('isActive');
        spoilerBody.parentNode.classList.remove('isActive');
    }
    else {
        spoilerBody.classList.add('isActive');
        spoilerBody.parentNode.classList.add('isActive');
    }
}

if (window.matchMedia("(max-width: 1100px)").matches) {
    if (!localStorage.getItem('website_visited')) {
        drawTutorialScreen();
    }
}

function drawTutorialScreen() {
    let tutorialScreen = document.createElement('div');
    tutorialScreen.id = 'tutorialScreen';

    let platformIcon = document.createElement('div');
    platformIcon.id = 'tutorialPlatform';

    let arrow = document.createElement('img');
    arrow.setAttribute('src', 'content/images/arrow.png');
    arrow.id = 'tutorialArrow';

    let text = document.createElement('span');
    text.innerText = 'Click here to toggle the desired platform.';
    text.id = 'tutorialText';

    let closeDiv = document.createElement('a');
    closeDiv.id = 'tutorialClose';

    let closeText = document.createElement('span');
    closeText.id = 'tutorialCloseText';
    closeText.innerText = 'Got it';

    let closeButton = document.createElement('div');
    closeButton.id = 'tutorialCloseButton';

    closeDiv.append(closeText);
    closeDiv.append(closeButton);
    closeDiv.addEventListener('click', removeTutorialScreen);

    tutorialScreen.append(platformIcon);
    tutorialScreen.append(arrow);
    tutorialScreen.append(text);
    tutorialScreen.append(closeDiv);

    document.body.append(tutorialScreen);
    localStorage.setItem('website_visited', true);
}

function removeTutorialScreen() {
    document.body.removeChild(tutorialScreen);
}