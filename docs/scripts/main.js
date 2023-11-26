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

document.onload = function () {
    let urlParams = new URLSearchParams(window.location.search);
    let platform;
    
    if (urlParams.has('platform')) {
        let platformUrlValue = urlParams.get('platform');
        platform = platformUrlValue;
    } else {
        platform = localStorage.getItem('platform');
    }

    togglePlatform(platform, true);


    let isTouchscreen = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchscreen) {
        if (!localStorage.getItem('website_visited')) {
            drawTutorialScreen();
        }


        let platformsElement = document.getElementById('platforms');
        platformsElement.addEventListener('mouseover', function () {
            if (!localStorage.getItem('platforms_opened')) {
                drawTutorialScreen(2);
            }
        });
        platformsElement.addEventListener('touchstart', function () {
            if (!localStorage.getItem('platforms_opened')) {
                drawTutorialScreen(2);
            }
        });
    }

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
                let platformContentArr = this.responseText.split('<div class="platform-content" ');
                platformContentArr.shift();
                let processedContentArr = [];
                let counter = 0;
                for (let i = 0; i < platformBoxes.length; i++) {
                    if (Object.hasOwnProperty.call(platformBoxes, i)) {
                        platformBoxes[i].innerHTML = '';
                        updatePlatformBoxClass(platformBoxes[i], platform);
                
                        let platformBoxIdMatch = platformBoxes[i].id.match(/pfbx-(.*)/);
                        let platformBoxId = platformBoxIdMatch ? platformBoxIdMatch[1] : null;
                
                        for (let j = 0; j < platformContentArr.length; j++) {                            
                            let currentPlatformDiv = i === 0 ? platformContentArr[j] : processedContentArr[j].content;
                            let platformContentId;
                            if (i === 0) {
                                currentPlatformDiv = currentPlatformDiv.substring(0, currentPlatformDiv.lastIndexOf('</div>'));
                                let platformContentIdMatch = currentPlatformDiv.match(/id="pfct-([^"]*)/);
                                platformContentId = platformContentIdMatch ? platformContentIdMatch[1] : null;
                                
                                currentPlatformDiv = currentPlatformDiv.replace(/id="[^"]*">\s*[^<]*/, '');
                                processedContentArr.push({ content: currentPlatformDiv, id: platformContentId });
                            } else {
                                platformContentId = processedContentArr[j].id;
                            }
                            if (platformBoxId == platformContentId) {
                                platformBoxes[i].innerHTML = currentPlatformDiv;
                            }
                        }

                        if (platformBoxes[i].childNodes.length == 0) {
                            platformBoxes[i].classList.add("platform-box-empty");
                        } else {
                            platformBoxes[i].classList.remove("platform-box-empty");
                        }
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
                fillPlatformBox(newPlatform);
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
        setTimeout(function () {
            appendMiniPlatformPickers();
        }, 600);
    }
}

function togglePlatform(platform, isPageReload) {
    let currentPlatform = localStorage.getItem('platform');
    let newPlatform;

    if (currentPlatform != platform || isPageReload) {
        document.getElementById('platforms').removeAttribute('class');
        document.getElementById('platforms').classList.add(platform);
        localStorage.setItem('platform', platform);
        newPlatform = platform;
    }
    else {
        localStorage.removeItem('platform');
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
    }
    else {
        spoilerBody.classList.add('active');
        spoilerBody.parentNode.classList.add('active');
    }
}

function drawTutorialScreen(tutorialNumber = 1) {
    let tutorialScreen = document.createElement('div');
    tutorialScreen.className = 'tutorial-screen';
    if (tutorialNumber == 1) {
        tutorialScreen.id = 'tutorialScreen1';
    } else {
        tutorialScreen.id = 'tutorialScreen2';
    }

    let platformIcon = document.createElement('div');
    platformIcon.id = 'tutorialPlatform';

    let arrow = document.createElement('img');
    arrow.setAttribute('src', 'content/img/arrow.png');
    arrow.id = 'tutorialArrow';

    let text = document.createElement('span');
    if (tutorialNumber == 1) {
        text.innerText = 'Click this button to toggle the desired platform.';
    } else {
        text.innerText = 'Choose a platform, and the pink platform boxes on these pages will show relevant content if available.';
    }
    text.id = 'tutorialText';

    let closeDiv = document.createElement('a');
    closeDiv.id = 'tutorialClose';

    let closeText = document.createElement('span');
    closeText.id = 'tutorialCloseText';
    closeText.innerText = 'Got it!';

    let closeButton = document.createElement('div');
    closeButton.id = 'tutorialCloseButton';

    if (tutorialNumber == 1) {
        updateTutorialPosition(null, [platformIcon, arrow, text, closeDiv]);
    } else {
        updateTutorialPosition(null, [platformIcon, arrow, text, closeDiv], 2);
    }

    window.addEventListener('resize', updateTutorialPosition);

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

    if (tutorialNumber == 1) {
        localStorage.setItem('website_visited', true);
    } else {
        localStorage.setItem('platforms_opened', true);
    }
}

function updateTutorialPosition(event = null, existingTutorialElements = false, tutorialScreen = 1) {
    let platformsElement = document.getElementById('platforms');
    let tutorialPlatformIcon, tutorialArrow, tutorialText;
    let offsetLeftCorrection

    if (tutorialScreen == 1) {
        offsetLeftCorrection = !existingTutorialElements ? 11 : 30;
    } else {
        offsetLeftCorrection = 11;
    }

    if (!existingTutorialElements) {
        tutorialPlatformIcon = document.getElementById('tutorialPlatform');
        tutorialArrow = document.getElementById('tutorialArrow');
        tutorialText = document.getElementById('tutorialText');
        tutorialClose = document.getElementById('tutorialClose');
    } else {
        tutorialPlatformIcon = existingTutorialElements[0];
        tutorialArrow = existingTutorialElements[1];
        tutorialText = existingTutorialElements[2];
        tutorialClose = existingTutorialElements[3];
    }

    setTimeout(() => {
        tutorialCloseTop = tutorialText.offsetTop + tutorialText.offsetHeight + 20;
        tutorialClose.style.top = tutorialCloseTop + 'px';
    }, 0);

    if (window.innerWidth >= 1100) {
        if (tutorialPlatformIcon && platformsElement) {
            tutorialPlatformIconLeft = platformsElement.offsetLeft - offsetLeftCorrection;
            tutorialPlatformIcon.style.left = tutorialPlatformIconLeft + 'px';
            tutorialArrow.style.left = tutorialPlatformIconLeft - 80 + 'px';
            tutorialArrow.style.transform = 'scaleX(-1)';
            tutorialText.style.left = tutorialPlatformIconLeft - 230 + 'px';
            tutorialCloseLeft = platformsElement.offsetLeft + platformsElement.offsetWidth / 2 - offsetLeftCorrection - 45;
            tutorialClose.style.left = tutorialCloseLeft + 'px';
        }
    } else {
        tutorialPlatformIcon.style.removeProperty('top');
        tutorialPlatformIcon.style.removeProperty('left');
        tutorialArrow.style.removeProperty('top');
        tutorialArrow.style.removeProperty('left');
        tutorialArrow.style.removeProperty('transform');
        tutorialText.style.removeProperty('top');
        tutorialText.style.removeProperty('left');
        tutorialClose.style.removeProperty('left');
    }
}

function removeTutorialScreen() {
    tutorialScreen = document.getElementsByClassName('tutorial-screen')[0];
    document.body.removeChild(tutorialScreen);
    window.removeEventListener('resize', updateTutorialPosition);
}