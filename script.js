//Desplegar menu
let btn = document.getElementById("btn").addEventListener("click", check);

function check() {
    var menuLIsta = document.getElementById("menuLista");
    if (btn.checked == true) {
        menuLIsta.style.display = "block";
    } else {
        menuLIsta.style.display = "none";
    }
};


//Dark mode
let checkedBox = document.getElementById("btnDark").addEventListener("click", () => {
    let darckModeBody = document.querySelector('body');
    darckModeBody.classList.toggle('darkModeBody');
});

//Remplazar
let logoDark = document.querySelector(".btnImg img");
logoDark.addEventListener("click", () => {
    //let logoDark  = document.getElementById('logoDark');
    let nuevoLogo = document.createElement('img')
    nuevoLogo.setAttribute = 'src', '/images/icon-search-mod-noc.svg';
    logoDark.replaceWith(nuevoLogo)
    //logoDark.classList.toggle('darkModeBody');
});



/*let replace = document.createElement('li')
replace.textContent = 'Nuevo texto remplazado';
let replaceLi = document.getElementById('replace');
replaceLi.replaceWith(replace);*/