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

function hidePlatformPicker() {
    let platformPicker = document.getElementsByClassName('platform-picker')[0];
    let isHidden = platformPicker.classList.contains('hidden');

    if (isHidden) {
        platformPicker.classList.remove('hidden');
    } else {
        platformPicker.classList.add('hidden');
    }
}

function resetPlatformPicker() {
    let platformPicker = document.getElementsByClassName('platform-picker')[0];
    let isHidden = platformPicker.classList.contains('hidden');

    if (isHidden) {
        platformPicker.classList.remove('hidden');
    }
}

function togglePlatform(platform, isPageReload) {
    let platforms = document.getElementById('platforms');
    let platformLinks = document.querySelectorAll('.platform-picker a');
    let currentPlatform = localStorage.getItem('platform');
    let newPlatform;

    if (currentPlatform != platform || isPageReload) {
        platforms.removeAttribute('class');
        platforms.classList.add(platform);
        localStorage.setItem('platform', platform);
        newPlatform = platform;
    }
    else {
        localStorage.removeItem('platform');
        document.getElementById('platforms').removeAttribute('class');
    }

    platforms.addEventListener('mouseover', resetPlatformPicker);
    platformLinks.forEach(function(link) {
        link.addEventListener('click', hidePlatformPicker);
    });

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