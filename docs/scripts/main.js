document.getElementById('menuIcon').addEventListener('click', toggleMenu);

let submenus = [].slice.call(document.getElementsByClassName('has-submenu'));
submenus.forEach(submenu => submenu.addEventListener('click', toggleSubmenu));

let platformsEl = document.getElementById('platformIcons').children;
let platforms = {
    'linux': platformsEl[0],
    'tmk': platformsEl[1],
    'win': platformsEl[3]
}

let platformWisePages = {
    'index' : {
        tmk: 1,
        win: 1
    },
    'ergo-mods' : {
        linux: 1,
        tmk: 1,
        win: 1
    },
    'key-mappings' : {
        linux: 1,
        tmk: 1,
        win: 1
    },
    'other-layouts' : {
        
    }
};

document.onload = function () {
    let platform = sessionStorage.getItem('platform');
    if (platform) {
        document.getElementById('platforms').classList.add(platform);

        let currentPagePath = getCurrentPageName();
        currentPageName = currentPagePath.substring(0, currentPagePath.indexOf('.'))
        
        if (platformWisePages[currentPageName][platform]) {
            fillPlatformBox(platform);
        }
    }
    else {
        document.getElementById('platforms').removeAttribute('class');
    }
    Object.keys(platforms).forEach(platform => function (){
        platforms[platform].addEventListener('click',
            function () {
                togglePlatform(platform);
            }
        );
    }());

    let spoilers = [].slice.call(document.getElementsByClassName('spoiler'));
    spoilers.forEach(spoiler => spoiler.children[0].addEventListener('click', toggleSpoiler));
}();

function getCurrentPageName() {
    let path = window.location.pathname;
    let page = path.split("/").pop();
    return page;
}

function fillPlatformBox(platform) {
    let req = new XMLHttpRequest();
    req.onload = function(){
        platformBoxes = document.getElementsByClassName('platform-box');
        if (platformBoxes) {
            if (platformBoxes.length == 1) {
                platformBoxes[0].innerHTML = this.responseText;
                platformBoxes[0].className += ' ' + platform;
            }
            else {
                let platformContentArr = this.responseText.split('<div class="platform-content">');
                platformContentArr.shift();

                for (let platformDiv in platformContentArr) {
                    let currentPlatformDiv = platformContentArr[platformDiv];
                    platformContentArr[platformDiv] = currentPlatformDiv.substring(0, currentPlatformDiv.lastIndexOf('</div>'));
                }

                for (let platformBox in platformBoxes ) {
                    if (Object.hasOwnProperty.call(platformBoxes, platformBox)) {
                        if (platformBoxes[platformBox].classList.value.includes("skip-" + platform)) {
                            platformBoxes[platformBox].remove();
                        }
                    }
                }

                for (let i=0; i<platformBoxes.length; i++) {
                    if (platformContentArr[i]) {
                        platformBoxes[i].innerHTML = platformContentArr[i];
                        platformBoxes[i].className += ' ' + platform;
                    }
                }
            }

            let spoilers = document.querySelectorAll('.platform-box .spoiler');
            spoilers.forEach(spoiler => spoiler.children[0].addEventListener('click', toggleSpoiler));
        }
    };
    req.open('GET', './platforms/' + currentPageName + '-' + platform + '.html');
    req.send();
}

function togglePlatform(platform) {
    let currentPlatform = sessionStorage.getItem('platform');
    if (currentPlatform == platform) {
        sessionStorage.removeItem('platform');
        document.getElementById('platforms').removeAttribute('class');
    }
    else {
        document.getElementById('platforms').removeAttribute('class');        
        document.getElementById('platforms').classList.add(platform);
        sessionStorage.setItem('platform', platform);
    }
    location.reload();
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
    arrow.setAttribute('src', 'w-img/arrow.png');
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
