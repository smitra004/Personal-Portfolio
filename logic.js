const texts = [
    "Hi!! I'm Soumyadeep Mitra",
    "A Web Developer",
    "An Open Source Enthusiast!",
    "A Lifelong Learner!"
];

let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
    if (count === texts.length) count = 0;
    currentText = texts[count];

    letter = currentText.slice(0, ++index);
    document.getElementById('typewriter').textContent = letter;

    if (letter.length === currentText.length) {
        setTimeout(() => {
            index = 0;
            count++;
            setTimeout(type, 500);
        }, 1500);
    } else {
        setTimeout(type, 100);
    }
})();

