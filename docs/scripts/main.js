document.getElementById('menuIcon').addEventListener('click', toggleMenu);

let submenus = [].slice.call(document.getElementsByClassName('has-submenu'));
submenus.forEach(submenu => function(){
    submenu.firstElementChild.addEventListener('click', toggleSubmenu)
}());

let platformsEl = document.getElementsByClassName('platform-picker')[0].children;
let platforms = {
    'win': platformsEl[0],
    'linux': platformsEl[1],
    'tmk': platformsEl[2],
    'mac': platformsEl[3]
}

let platformWisePages = {
    'index' : {
        tmk: 1,
        win: 1,
        linux: 1,
        mac: 1
    },
    'layers-main' : {
        linux: 1,
        tmk: 1,
        win: 1
    },
    'ergo-mods' : {
        linux: 1,
        tmk: 1,
        win: 1
    },
    'tarmak-intro' : {
        linux: 1,
        tmk: 1,
        win: 1
    },
    'variants' : {
        linux: 1,
        tmk: 1,
        win: 1
    }
};

document.onload = function () {
    togglePlatform(sessionStorage.getItem('platform'), true);

    hookPlatformToggleOnClick(platforms);
    hookSpoilersToggleOnClick([].slice.call(document.getElementsByClassName('spoiler')));
}();

function getCurrentPageName() {
    let path = window.location.pathname;
    let page = path.split("/").pop();
    return page;
}

function fillPlatformBox(platform) {
    if (platform !== 'null') {
        let req = new XMLHttpRequest();
        req.onload = function(){
            platformBoxes = document.getElementsByClassName('platform-box');
            
            if (platformBoxes) {
                let platformContentArr = this.responseText.split('<div class="platform-content">');
                platformContentArr.shift();

                for (let platformDiv in platformContentArr) {
                    let currentPlatformDiv = platformContentArr[platformDiv];
                    platformContentArr[platformDiv] = currentPlatformDiv.substring(0, currentPlatformDiv.lastIndexOf('</div>'));
                }

                let platformBoxesCurrent = [];

                for (let platformBox in platformBoxes ) {
                    if (Object.hasOwnProperty.call(platformBoxes, platformBox)) {
                        platformBoxes[platformBox].innerHTML = '';
                        if (!platformBoxes[platformBox].classList.value.includes("skip-" + platform)) {
                            platformBoxesCurrent.push(platformBoxes[platformBox]);
                        }
                        else {
                            updatePlatformBoxClass(platformBoxes[platformBox], platform);
                        }
                    }
                }

                for (let i=0; i<platformBoxes.length; i++) {
                    if (platformContentArr[i]) {
                        platformBoxesCurrent[i].innerHTML = platformContentArr[i];
                        updatePlatformBoxClass(platformBoxesCurrent[i], platform);
                    }
                }

                hookSpoilersToggleOnClick(document.querySelectorAll('.platform-box .spoiler'));
            }
        };

        if(!currentPageName) {
            req.open('GET', './platforms/' + 'index-' + platform + '.html');
        }
        else {
            req.open('GET', './platforms/' + currentPageName + '-' + platform + '.html');
        }
        req.send();
    }
}

function updatePlatformBoxClass(platformBox, platform) {
    Object.keys(platforms).forEach(platform => function(){
        if(platformBox.className.includes(platform)) {
            platformBox.classList.remove(platform);
        }
    }());
    platformBox.className += ' ' + platform;
}

function updatePlatformBoxes(newPlatform) {

    platformBoxes = document.getElementsByClassName('platform-box');
    
    if (platformBoxes.length) {
        if (newPlatform) {
            let currentPagePath = getCurrentPageName();
            currentPageName = currentPagePath.substring(0, currentPagePath.indexOf('.'));
            if (!currentPageName || (platformWisePages[currentPageName] && platformWisePages[currentPageName][newPlatform])) {
                fillPlatformBox(newPlatform);
            }
            else {
                Array.from(platformBoxes).forEach(platformBox => {
                    platformBox.innerHTML = "";
                    updatePlatformBoxClass(platformBox, newPlatform)
                });
            }
        }
        else {
            Object.keys(platforms).forEach(platform => function(){
                Array.from(platformBoxes).forEach(platformBox => {
                    if (platformBox.classList.contains(platform)) {
                        platformBox.classList.remove(platform);
                        platformBox.innerHTML = "";
                    }
                })
            }());
        }
        setTimeout(function(){
            appendMiniPlatformPickers();
        }, 500);
    }
}

function togglePlatform(platform, isPageReload) {
    let currentPlatform = sessionStorage.getItem('platform');
    let newPlatform;

    if (currentPlatform != platform || isPageReload) {
        document.getElementById('platforms').removeAttribute('class');        
        document.getElementById('platforms').classList.add(platform);
        sessionStorage.setItem('platform', platform);
        newPlatform = platform;
    }
    else {
        sessionStorage.removeItem('platform');
        document.getElementById('platforms').removeAttribute('class');
    }
    
    updatePlatformBoxes(newPlatform);
}

function appendMiniPlatformPickers() {
    platformBoxes = document.getElementsByClassName('platform-box');
    let platformToggle = document.createElement('div');
    platformToggle.classList.add('platform-toggle');
    
    let platformPicker = document.getElementsByClassName('platform-picker')[0];
    let miniPlatformPicker = platformPicker.cloneNode(true);
    miniPlatformPicker.classList.add('mini');
    platformToggle.appendChild(miniPlatformPicker);
    


    for(let platformBox of platformBoxes) {
        if (platformBox.firstElementChild) {
            if (platformBox.firstElementChild.className != 'platform-toggle') {
                platformBox.insertBefore(platformToggle.cloneNode(true), platformBox.firstElementChild);
            }
        }
        else {
            platformBox.appendChild(platformToggle.cloneNode(true));
        }

        miniPlatformPicker = platformBox.firstElementChild.firstElementChild;
        let platformButtonsEl = miniPlatformPicker.children;
        let platformButtons = {
            'win': platformButtonsEl[0],
            'linux': platformButtonsEl[1],
            'tmk': platformButtonsEl[2],
            'mac': platformButtonsEl[3]
        }
    
        hookPlatformToggleOnClick(platformButtons);
    }
}

function hookPlatformToggleOnClick(platformButtons) {
    Object.keys(platformButtons).forEach(platform => function (){
        platformButtons[platform].addEventListener('click',
            function () {
                togglePlatform(platform);
            }
        );
    }());
}

function hookSpoilersToggleOnClick(spoilersSelector) {
    let spoilers = spoilersSelector;
    spoilers.forEach(spoiler => spoiler.children[0].addEventListener('click', toggleSpoiler));
}

function toggleMenu() {
    if (window.matchMedia("(max-width: 1100px)").matches) {
        let menu = document.getElementById('menu');
        let menuContainer = document.getElementById('menuContainer');
        if (this.classList.contains('active')) {
            this.classList.remove('active');
            menu.classList.remove('active');

            document.getElementById('menuContainer')
                .removeChild(document.getElementById('overlay'));
        }
        else {
            this.classList.add('active');
            menu.classList.add('active');

            let overlay = document.createElement("div");
            overlay.id = "overlay";
            menuContainer.insertAdjacentElement('afterbegin', overlay);
        }
    }
}

function toggleSubmenu(e) {
    if (window.matchMedia("(max-width: 1100px)").matches) {
        let submenuParent = this.parentNode;
        let submenuGrandParent = submenuParent.parentNode;
        let submenuGrandParentHeight = submenuGrandParent.style.height;
        let submenu = submenuParent.children[1];
        let cursorRightPos = window.innerWidth - e.offsetX;

        if (submenuParent.classList.contains('active')) {
            if(cursorRightPos < 32) {
                e.preventDefault();
            }
            submenuParent.classList.remove('active');
            submenu.setAttribute('style', '');

            if (submenuGrandParentHeight) {
                submenuGrandParent.style.height = parseInt(submenuGrandParentHeight, 10) - submenu.scrollHeight + 'px';
            }
        }
        else {
            e.preventDefault();
            submenuParent.classList.add('active');
            submenu.style.height = "auto";
            let offset = submenu.offsetHeight;

            if (submenuGrandParentHeight) {
                submenuGrandParent.style.height = parseInt(submenuGrandParentHeight, 10) + offset + 'px'; 
            }

            submenu.style.height = `0px`;
            setTimeout(() => {
                submenu.style.height = offset + `px`;
            }, 1);
        }
    }
}

function lockScroll() {
    document.body.classList.toggle('lock-scroll');
}

function toggleSpoiler() {
    let spoilerBody = this.parentNode.getElementsByClassName("spoiler-body")[0];
    if (spoilerBody.classList.contains('active')) {
        spoilerBody.classList.remove('active');
        spoilerBody.parentNode.classList.remove('active');

        spoilerBody.style.height = 0 + 'px';
    }
    else {
        spoilerBody.classList.add('active');
        spoilerBody.parentNode.classList.add('active');

        spoilerHeight = spoilerBody.scrollHeight;
        spoilerBody.style.height = spoilerHeight + 'px';
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
    arrow.setAttribute('src', 'content/img/arrow.png');
    arrow.id = 'tutorialArrow';

    let text = document.createElement('span');
    text.innerText = 'Click this button to toggle the desired platform.';
    text.id = 'tutorialText';

    let closeDiv = document.createElement('a');
    closeDiv.id = 'tutorialClose';

    let closeText = document.createElement('span');
    closeText.id = 'tutorialCloseText';
    closeText.innerText = 'Got it!';

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
    setTimeout(function(){
        tutorialScreen.classList.add('show');
    }, 0);
    localStorage.setItem('website_visited', true);
}

function removeTutorialScreen() {
    document.body.removeChild(tutorialScreen);
}