const body = document.body;

function generation () {
    let myDots = document.querySelector("body > section.header-main > header > div.navigation-dots");
    let slides = document.querySelector("body > section.header-main > header > div.slides .s1");

    let count = 2;
    let countInput = -100;
    const howManySlides = document.querySelectorAll('.slide').length;
    
    while (count <= howManySlides) {
        
        myDots.insertAdjacentHTML('beforeend', `<label for="r${count}" class="bar"></label>`);
        slides.insertAdjacentHTML('beforebegin', `<input type="radio" name="r" id="r${count}">`);
        
        count += 1;
        countInput -= 100;
    } 
}

generation();

const anchors = document.querySelectorAll( 'a[href*="#"]' );

for (let anchor of anchors) {
    const blockID = anchor.getAttribute('href')
    const target = document.querySelector('' + blockID);

    anchor.addEventListener ('click', (event) => {
        event.preventDefault();

        target.scrollIntoView ({
            behavior: 'smooth',
            block: 'nearest',
        })
    })
}

let burger_status = document.querySelector('.header-burger__menu');
let header_status = document.querySelector('.header-nav');
let burger_nextStatus = document.querySelector("#top > section.header-main > header > div.slider__main-photo > div.header-burger__menu");
let header_nextStatus = document.querySelector("#top > section.header-main > header > div.slider__main-photo > nav");

function burger__menu () {
    burger_status.addEventListener('click', function () {

    if (burger_status.classList.contains('active') !== true) {
        burger_nextStatus.classList.add('active')
        header_nextStatus.classList.add('active')

        lockOn();

        } else {
        burger_nextStatus.classList.remove('active')
        header_nextStatus.classList.remove('active')
        lockOff();
        }
    })
}

burger__menu();

function lockOn () {
    let PagePosition = window.scrollY;
    window.scroll(0,0)
    body.classList.add('lock');
    body.dataset.position = PagePosition;
    body.style.top = -PagePosition + 'px';
}

function lockOff () {
    let PagePosition = parseInt(body.dataset.position, 10);
    body.style.top = 'auto';
    body.classList.remove('lock');
    window.scroll({top: PagePosition});
    body.removeAttribute('data-position');
}

function menu_projectClick () {
    document.querySelector("#web-design").onclick = function (e) {
        document.getElementById('hover').classList.add('hide-project')
    }
}

menu_projectClick();

let latest_project = document.getElementById('all-projects').children;


function menu_all () {
    document.querySelector("#all").onclick = function (e) {
        e.preventDefault();

        for (let i = 0; i < 6; i++) {
            latest_project[i].classList.remove('hide-project')
            latest_project[i].classList.remove('show')
            for (let i = 6; i < latest_project.length; i++) {
                latest_project[i].classList.remove('show')
                latest_project[i].classList.add('hide-project')
            }
        }
    }
}

menu_all();

let buttonState = document.querySelector("#load-btn").textContent;
let hiddenProjects = document.querySelectorAll('.hide-project');
let flag = false;

function loadMore () {
    document.querySelector("#btn-load").onclick = function (e) {
        
        for (let i = 6; i < latest_project.length; i++) {
            
            if ( flag !== true ) {
                latest_project[i].classList.remove('hide-project');
                document.querySelector("#load-btn").innerText = 'close';

            } else if ( flag === true ) {
                latest_project[i].classList.add('hide-project');
                document.querySelector("#load-btn").innerText = 'load more';
            }
            
        }     
        flag = true;
    }
}

loadMore();



function menu_design () {
    document.querySelector("#web-design").onclick = function (e) {
        e.preventDefault();
        for (let item of latest_project) {
            if (item.classList.contains('web-design')) {
                item.classList.add('show')
                item.classList.remove('hide-project')
            } else {
                item.classList.add('hide-project')
                item.classList.remove('show')
            }
        }
    }
}

menu_design();


function menu_mobile () {
    document.querySelector("#mobile-app").onclick = function (e) {
        e.preventDefault();

        for (let item of latest_project) {
            
            if (item.classList.contains('mobile-app')) {
                item.classList.add('show')
                item.classList.remove('hide-project')
            } else {
                item.classList.add('hide-project')
                item.classList.remove('show')
            }
        }
    }
}

menu_mobile();


function menu_illustration () {
    document.querySelector("#illustration").onclick = function (e) {
        e.preventDefault();

        for (let item of latest_project) {
            
            if (item.classList.contains('illustration-item')) {
                item.classList.add('show')
                item.classList.remove('hide-project')
            } else {
                item.classList.add('hide-project')
                item.classList.remove('show')
            }
        }
    }
}

menu_illustration();


function menu_photography () {
    document.querySelector("#photography").onclick = function (e) {
        e.preventDefault();

        for (let item of latest_project) {
            
            if (item.classList.contains('photography')) {
                item.classList.add('show')
                item.classList.remove('hide-project')
            } else {
                item.classList.add('hide-project')
                item.classList.remove('show')
            }
        }
    }
}

menu_photography();


let arrowLi = document.querySelector("#Blog > div > div > ul").children

function clickLi () {
    for (let item of arrowLi) {
    let flag = true;

    item.addEventListener ('click', (event) => {
        event.preventDefault();
        
        if (flag === true) {
            item.lastChild.previousElementSibling.classList.add('show-li')
            item.lastChild.previousElementSibling.classList.remove('hidden-li')
            
            flag = false;

        } else if (flag === false) {
            item.lastChild.previousElementSibling.classList.remove('show-li')
            item.lastChild.previousElementSibling.classList.add('hidden-li')
            
            flag = true;
            }
        })
    }
}

clickLi();