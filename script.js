//Desplegar menu
/*let btn = document.getElementById("btn");
btn.addEventListener("click", check);

function check() {
    var menuLIsta = document.getElementById("menuLista");
    if (btn.checked == true) {
        menuLIsta.style.display = "block";
    } else {
        menuLIsta.style.display = "none";
    }
};*/

let btn = document.getElementById("btn");
btn.addEventListener("click", check);

function check() {
    var menuLIsta = document.getElementById("menuLista");
    //menuLIsta.classList.toggle('listaMenu')
    if (btn.checked == true) {
        menuLIsta.style.display = "flex";
    } else {
        menuLIsta.style.display = "none";
    }
}

//trending gifos color



//DARCK MODE
textdark = (a, b) => {
    btnDark.addEventListener("click", () => {
        let darckModetext = document.querySelectorAll(a);
        for (i = 0; i < darckModetext.length; i++) {
            darckModetext[i].classList.toggle(b);
        }
    });
};
textdark('body', 'darkModeBody');
textdark('h2, p, h1', 'darkModeColor');
textdark('.line', 'darkModeLine');


//cambiar texto
const texto = document.getElementById('textDark');
btnDark.addEventListener('click', () => {
    if (btnDark.checked) {
        texto.innerHTML = 'Modo Diurno'
    } else {
        texto.innerHTML = 'Modo Nocturno'
    }
});

//Remplazar imagen heading darkmode
function changeImage(a, b, c, d) {
    a.addEventListener('change', () => {
        if (a.checked) {
            let createImg = document.createElement('img');
            createImg.setAttribute('src', b);
            let logo = document.getElementsByTagName('img')[d].replaceWith(createImg);
        } else {
            let createImg = document.createElement('img');
            createImg.setAttribute('src', c);
            let logo = document.getElementsByTagName('img')[d].replaceWith(createImg);
        }
    })
}

changeImage(btnDark, '/images/Logo-modo-noc.svg', '/images/logo-mobile.svg', 0);
changeImage(btnDark, '/images/burger-modo-noct.svg', '/images/burger.svg', 1)
changeImage(btnDark, '/images/icon_facebook_noc.svg', '/images/icon_facebook.svg', 3)
changeImage(btnDark, '/images/icon_instagram_noc.svg', '/images/icon_instagram.svg', 4)
changeImage(btnDark, '/images/icon_twitter_noc.svg', '/images/icon-twitter.svg', 5) 