//CAMBIAR ICONOS Y MODO OSCURO
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

//explicacion de funcion de arrib 
/*btnMenu.addEventListener('click', () => {
    if (btnDark.checked) {
        changeImage(btnMenu, '/images/close-modo-noct.svg', '/images/burger-modo-noct.svg', 1);
    } else {
        changeImage(btnMenu, '/images/close.svg', '/images/burger.svg', 1);
    }
});

btnSearch.addEventListener('click', () => {
    if (btnDark.checked) {
        changeImage(btnSearch, '/images/close-modo-noct.svg', '/images/icon-search-mod-noc.svg', 2);
    } else {
        changeImage(btnSearch, '/images/close.svg', '/images/icon-search.svg', 2);
    }
});*/


//CARROUSEL MOBILE
const track = document.querySelector('.track');

function getTrendingText() {
    fetch('https://api.giphy.com/v1/gifs/trending?api_key=r04zELcPYCkaQQ8Eaboohd6UpRglZ1Le&limit=4&rating=g')
        .then(response => response.json())
        .then(json => json.data)
        .then(data => {
            for (img of data) {
                let url = img.images.original.url
                let gif = document.createElement('img')
                gif.classList.add('card')
                gif.setAttribute = 'src'
                gif.src = url
                gif.draggable = false;
                track.appendChild(gif)
            }
        })
        .catch(console.error)
}
getTrendingText()

let initialPosition = null;
let moving = false;
let transform = 0;

const gestureStart = (e) => {
    initialPosition = e.pageX;
    moving = true;
    const transformMatrix = window.getComputedStyle(track).getPropertyValue('transform');
    if (transformMatrix !== 'none') {
        transform = parseInt(transformMatrix.split(',')[4].trim());
    }
}

let lastPageX = 0;
let transformValue = 0;

const gestureMove = (e) => {
    if (moving) {
        const currentPosition = e.pageX;
        const diff = currentPosition - initialPosition;
        if (e.pageX - lastPageX > 0) {
            if (transformValue > 0) {
                return;
            }
        } else {
            if (Math.abs(transformValue) > track.offsetWidth - 320) {
                return;
            }
        }
        transformValue = parseInt(transform) + diff;
        track.style.transform = `translateX(${transform + diff}px)`;
    }
    lastPageX = e.pageX;
};

const gestureEnd = (e) => {
    moving = false;
}

if (window.PointerEvent) {
    window.addEventListener('pointerdown', gestureStart);
    window.addEventListener('pointermove', gestureMove);
    window.addEventListener('pointerup', gestureEnd);
} else {
    window.addEventListener('touchdown', gestureStart);
    window.addEventListener('touchmove', gestureMove);
    window.addEventListener('touchup', gestureEnd);
    window.addEventListener('mousedown', gestureStart);
    window.addEventListener('mousemove', gestureMove);
    window.addEventListener('mouseup', gestureEnd);
}


//TRENDING SEARCH
let trendingSearch = document.getElementById('trendingSearch')

function trendingSearchF() {
    fetch(`https://api.giphy.com/v1/trending/searches?api_key=r04zELcPYCkaQQ8Eaboohd6UpRglZ1Le`)
        .then(response => response.json())
        .then(json => json.data)
        .then(info => {
            let nuevoText = info.splice(0, 5)
            for (text of nuevoText) {
                let texto = document.createElement('li')
                texto.textContent = text
                trendingSearch.appendChild(texto)
            }
        }).catch(console.error);
}
trendingSearchF()



//BUSCADOR
let inputSearch = document.getElementById('inputSearch')
let searchBox = document.getElementById('searchBox')
let searchResult = document.getElementById('searchResult')
let searchList = document.getElementById('searchList')
let searchDiv = document.getElementById('searchDiv')
let verMas = document.getElementById('verMas')

searchBox.addEventListener('click', buscar)
verMas.addEventListener('click', verMasF)
inputSearch.addEventListener('keyup', autocomplete)

//Completar buscador desde las sugerencias
searchList.addEventListener('click', (e) => {
    inputSearch.value = e.target.firstChild.nodeValue
    buscar()
})

//Enter
inputSearch.addEventListener("keyup", function (event) {
    if (event.key === 'Enter') {
        buscar()
    }
})

//Activar la busqueda del gif y mostrarlos en pantalla
function buscar() {
    var value = inputSearch.value
    console.log(value)
    searchList.classList.add('remove')
    searchResult.innerHTML = ''
    verMas.removeAttribute('class')
    fetch(
            `https://api.giphy.com/v1/gifs/search?api_key=r04zELcPYCkaQQ8Eaboohd6UpRglZ1Le&q=${value}&limit=${numero}&offset=0&rating=g&lang=en`
        )
        .then(response => response.json())
        .then(json => json.data)
        .then(data => {
            for (img of data) {
                let url = img.images.original.url
                let gif = document.createElement('img')
                gif.setAttribute = 'src'
                gif.src = url
                searchResult.appendChild(gif)
            }
        }).catch(console.error);
}


//Autocomplete del buscador
function autocomplete(event) {
    let inputValue = inputSearch.value
    searchList.innerHTML = ''
    fetch(
            `https://api.giphy.com/v1/gifs/search/tags?api_key=r04zELcPYCkaQQ8Eaboohd6UpRglZ1Le&q=${inputValue}&limit=5&offset=0`
        )
        .then(response => response.json())
        .then(json => json.data)
        .then(data => {
            for (names of data) {
                let li = document.createElement('li')
                li.innerHTML = names.name
                searchList.appendChild(li)
            }
        })
    if (inputValue === '') {
        searchList.innerHTML = '';
        searchList.classList.add('remove')
    } else {
        searchList.removeAttribute('class')
    }
}

//Ver mas (pasar de 12 en 12 gif, hasta llegar a 48)
let numero = 12
function verMasF() {
    searchResult.innerHTML = ''
    numero = numero + 12
    if (numero > 48) {
        numero = 12
    }
    buscar()
}