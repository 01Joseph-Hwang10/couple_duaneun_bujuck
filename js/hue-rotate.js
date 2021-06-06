const subject = document.querySelector('.hueRotate')

const randomInt = () => {
    return Math.floor(Math.random() * 255);
}

const randomColor = () => {
    return `rgb( ${randomInt()} , ${randomInt()} , ${randomInt()} )`
}

setInterval(() => {
    if (subject) {
        const rgb = randomColor();
        subject.style.color = rgb
    }
}, 100)