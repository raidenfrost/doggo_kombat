let tg = window.Telegram.WebApp;
tg.expand(); // Разворачиваем на весь экран

let score = 0;
const scoreElement = document.getElementById('score');
const dogBtn = document.getElementById('dog-btn');

dogBtn.addEventListener('click', (e) => {
    score++;
    scoreElement.innerText = score;

    // Вибрация телефона при тапе (только в мобильном ТГ)
    tg.HapticFeedback.impactOccurred('medium');

    // Создаем вылетающий текст +1
    createPlusOne(e.clientX, e.clientY);
});

function createPlusOne(x, y) {
    const el = document.createElement('div');
    el.innerText = '+1';
    el.style.position = 'absolute';
    el.style.left = x + 'px';
    el.style.top = y + 'px';
    el.style.color = 'white';
    el.style.fontWeight = 'bold';
    el.style.pointerEvents = 'none';
    el.style.animation = 'moveUp 0.5s ease-out forwards';
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 500);
}

// Добавь это в style.css для анимации текста:
// @keyframes moveUp { to { transform: translateY(-100px); opacity: 0; } }

