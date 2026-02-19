let pattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let current = 0;

document.addEventListener('keydown', (e) => {
    if (pattern.indexOf(e.key) < 0 || e.key !== pattern[current]) {
        current = 0;
        return;
    }
    current++;
    if (pattern.length === current) {
        current = 0;
        alert("ACCESS GRANTED: Hello, Mr. Permana. Government Protocol Activated.");
        document.body.style.filter = "invert(1) hue-rotate(90deg) brightness(1.2)";
        document.body.style.fontFamily = "monospace";
    }
});

console.log(
    "%c STOP! %c Sedang mencari bug atau mencari tahu cara kerja website ini? %c \n\nHalo rekan developer! Saya Kandi. Senang kamu mampir ke dapur saya. \n\nCek repo saya di: github.com/duliciouss",
    "color: red; font-size: 40px; font-weight: bold; background: black; padding: 10px;",
    "color: black; font-size: 18px;",
    "color: blue; font-size: 14px;"
);