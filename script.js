// Animasi typing text berganti-ganti
const typingText = document.querySelector('.typing-text');
const texts = [
    "Saya seorang Web Developer.",
    "Saya pelajar di SMK Satya Praja 2 Petarukan.",
    "Saya suka membuat website dan aplikasi sederhana."
];
let textIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < texts[textIndex].length) {
        typingText.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 50);
    } else {
        setTimeout(erase, 1500); // delay sebelum hapus
    }
}

function erase() {
    if (charIndex > 0) {
        typingText.textContent = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 30);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(type, 500);
    }
}

// Mulai animasi
document.addEventListener("DOMContentLoaded", function(){
    setTimeout(type, 500);
});

// Animasi skill bar
const fills = document.querySelectorAll('.fill');
fills.forEach(fill => {
    const width = fill.getAttribute('data-fill');
    setTimeout(() => {
        fill.style.width = width;
    }, 500);
});
