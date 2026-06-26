document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('inspireBtn');
    const heroText = document.querySelector('.hero-text p');

    btn.addEventListener('click', function() {
        const messages = [
            'Дыши полной грудью. Ты — часть природы.',
            'Каждый день — новый шанс быть здоровым.',
            'Натуральное — это истинное.',
            'Забота о себе начинается с дыхания.'
        ];
        const randomMsg = messages[Math.floor(Math.random() * messages.length)];
        heroText.textContent = randomMsg;
        btn.textContent = 'Спасибо!';
        setTimeout(function() {
            btn.textContent = 'Дыши свободно';
        }, 1800);
    });

    const cards = document.querySelectorAll('.card');
    cards.forEach(function(card) {
        card.addEventListener('mouseenter', function() {
            this.style.transition = '0.25s ease';
        });
    });
});