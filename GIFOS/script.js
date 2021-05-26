//Swich img
function changeImg(iconClick, iconNoc, iconToChange, number) {
    iconClick.addEventListener('change', () => {
        if (iconClick.checked) {
            let createImg = document.createElement('img');
            createImg.setAttribute('src', iconNoc);
            let logo = document.getElementsByTagName('img')[number].replaceWith(createImg);
        } else {
            let createImg = document.createElement('img');
            createImg.setAttribute('src', iconToChange);
            let logo = document.getElementsByTagName('img')[number].replaceWith(createImg);
        }
    })
}

changeImg(btnDark, '/images/logo-mobile-modo-noct.svg', '/images/logo-mobile.svg', 0);
changeImg(btnDark, '/images/burger-modo-noct.svg', '/images/burger.svg', 1);
changeImg(btnDark, '/images/icon-search-mod-noc.svg', '/images/icon-search.svg', 3);

//Desplegar menu
let btnMenu = document.getElementById('btnMenu')
btnMenu.addEventListener('click', () => {
    var menuLIsta = document.getElementsByClassName("menuList")[0];
    if (btnMenu.checked) {
        menuLIsta.style.display = "flex";
    } else {
        menuLIsta.style.display = "none";
    }
})

//Agregar class list and darkMode
btnDark = document.getElementById('btnDark')
textdark = (a, b) => {
    btnDark.addEventListener("click", () => {
        let darckModetext = document.querySelectorAll(a);
        for (i = 0; i < darckModetext.length; i++) {
            darckModetext[i].classList.toggle(b);
        }
    });
};

textdark('body, .search', 'darkModeBody');
textdark('.menuList', 'menuListDark');
textdark('.line', 'darkModeLine');
textdark('h1, h2, p', 'darkModeColor');
textdark('.trendingGifos', 'darkBackgroung');
textdark('.search', 'darkBorder');



//cambiar texto modo nocturno
const texto = document.getElementById('textDark');
btnDark.addEventListener('click', () => {
    if (btnDark.checked) {
        texto.innerHTML = 'Modo Diurno'
        changeImg(btnMenu, '/images/close-modo-noct.svg', '/images/burger-modo-noct.svg', 1);
    } else {
        texto.innerHTML = 'Modo Nocturno'
        changeImg(btnMenu, '/images/close.svg', '/images/burger.svg', 1);
    }
});

//cambiar iconos a modo nocturno y cerrado
let btnSearch = document.getElementById('searchBox');
function changeCloseIcon(icon, iconNoc, iconClose, number) {
    icon.addEventListener('click', () => {
        if (btnDark.checked) {
            changeImg(icon, '/images/close-modo-noct.svg', iconNoc, number);
        } else {
            changeImg(icon, '/images/close.svg', iconClose, number);
        }
    })
};

changeCloseIcon(btnMenu, '/images/burger-modo-noct.svg', '/images/burger.svg', 1)
changeCloseIcon(btnSearch, '/images/icon-search-mod-noc.svg', '/images/icon-search.svg', 3)