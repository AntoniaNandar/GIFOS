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