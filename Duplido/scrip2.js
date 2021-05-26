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
changeImage(btnDark, '/images/burger-modo-noct.svg', '/images/burger.svg', 1);

//Desplegar menu
let btnMneu = document.getElementById('btnMenu')
btnMneu.addEventListener('click', ()=> {
    var menuLIsta = document.getElementsByClassName("menuList")[0];
    if (btnMenu.checked) {
        menuLIsta.style.display = "flex";
    } else {
        menuLIsta.style.display = "none";
    }
})

//DARCK MODE
btnDark = document.getElementById('btnDark')
textdark = (a, b) => {
    btnDark.addEventListener("click", () => {
        let darckModetext = document.querySelectorAll(a);
        for (i = 0; i < darckModetext.length; i++) {
            darckModetext[i].classList.toggle(b);
        }
    });
};

textdark('body', 'darkModeBody');
textdark('.menuList', 'menuListDark');


//cambiar texto
const texto = document.getElementById('textDark');
btnDark.addEventListener('click', () => {
    if (btnDark.checked) {
        texto.innerHTML = 'Modo Diurno'
        changeImage(btnMenu, '/images/close-modo-noct.svg', '/images/burger-modo-noct.svg', 1);
    } else {
        texto.innerHTML = 'Modo Nocturno'
        changeImage(btnMenu, '/images/close.svg', '/images/burger.svg', 1);
    }
});
