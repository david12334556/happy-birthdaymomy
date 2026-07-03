// Список комплиментов
const compliments = [
    "Ты самая добрая на свете! ❤️",
    "Твоя улыбка освещает всё вокруг! ☀️",
    "Ты всегда меня поддерживаешь, спасибо! 🤝",
    "Ты готовишь вкуснее всех шеф-поваров! 🍳",
    "Ты мой самый лучший друг! 💎",
    "Для меня ты всегда самая красивая! 🌸",
    "Ты — сердце нашей семьи! 🏠",
    "Ты — самый мудрый и понимающий человек в моей жизни! 💖",
    "Я восхищаюсь твоей целеустремленностью и силой! 💪",
    "Ты делаешь этот мир намного светлее и добрей! ✨",
    "Спасибо, что научила меня всему самому важному! 📚",
    "Твоя забота — это самое уютное чувство на свете! 🏡",
    "Ты всегда находишь правильные слова, чтобы меня приободрить! 🥰",
    "Я очень горжусь, что у меня такая замечательная мама! 🌟"
];

// Функция показа комплимента
function showCompliment() {
    const textElem = document.getElementById('compliment-text');
    const randomIdx = Math.floor(Math.random() * compliments.length);
    textElem.innerText = compliments[randomIdx];
}

// Создание сердечек при клике
document.addEventListener('click', function(e) {
    const heart = document.createElement('div');
    heart.className = 'heart-pop';
    heart.innerHTML = '💜';
    heart.style.left = (e.clientX - 10) + 'px';
    heart.style.top = (e.clientY - 10) + 'px';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 1500);
});

// Счетчик времени
function updateTimer() {
    const birthDate = new Date("May 22, 2013 00:00:00");
    const now = new Date();
    const diff = now - birthDate;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById("time").innerHTML = 
        `${days}дн. ${hours}ч. ${minutes}мин. ${seconds}сек.`;
}

// Прокрутка слайдера
function scrollSlider(direction) {
    const slider = document.getElementById('slider');
    slider.scrollBy({
        left: direction,
        behavior: 'smooth'
    });
}

// Музыкальный плеер
const audio = document.getElementById('bg-music');
audio.volume = 0.2; // Громкость 20%
const musicBtn = document.getElementById('music-btn');

musicBtn.addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
        musicBtn.innerText = "Музыка: Вкл 🔊";
    } else {
        audio.pause();
        musicBtn.innerText = "Музыка: Выкл 🔇";
    }
});

// Автостарт музыки при первом клике по сайту
document.body.addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
        musicBtn.innerText = "Музыка: Вкл 🔊";
    }
}, { once: true });

// Запуск таймера
setInterval(updateTimer, 1000);
updateTimer();

function launchFireworks() {
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff0a7a', '#ff9e00', '#f5d142', '#33ff57', '#9b5de5']
    });
}

// Запускаем салют сразу при загрузке страницы
window.onload = launchFireworks;

// Можно также запускать его по клику на кнопку, если хочешь
// document.querySelector('.magic-btn').addEventListener('click', launchFireworks);
function launchBigFireworks() {
    let duration = 6000; // 6 секунд
    let animationEnd = Date.now() + duration;

    let interval = setInterval(function() {
        let timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        // Запускаем салюты из разных углов для эффекта "по всему экрану"
        confetti({
            particleCount: 50,
            spread: 160,
            origin: { x: Math.random(), y: Math.random() }, // случайная точка
            colors: ['#ff0a7a', '#9b5de5', '#f5d142', '#33d4ff']
        });
    }, 500); // каждые полсекунды
}

// Запускаем салют сразу при загрузке страницы
window.onload = launchBigFireworks;

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = 300;

let p1 = { x: 50, y: 150, color: 'blue' };
let p2 = { x: 700, y: 150, color: 'red' };

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Рисуем персонажей
    ctx.fillStyle = p1.color;
    ctx.beginPath(); ctx.arc(p1.x, p1.y, 20, 0, Math.PI*2); ctx.fill();
    
    ctx.fillStyle = p2.color;
    ctx.beginPath(); ctx.arc(p2.x, p2.y, 20, 0, Math.PI*2); ctx.fill();

    // Проверка касания (догонялки)
    if (Math.hypot(p1.x - p2.x, p1.y - p2.y) < 40) {
        alert("Поймал!");
        p1.x = 50; p2.x = 700;
    }
    requestAnimationFrame(draw);
}

// Упрощенное управление (потом привяжем к джойстикам)
window.addEventListener('keydown', (e) => {
    if(e.key === 'd') p1.x += 10;
    if(e.key === 'a') p1.x -= 10;
    if(e.key === 'ArrowRight') p2.x += 10;
    if(e.key === 'ArrowLeft') p2.x -= 10;
});

draw();

function showGift() {
    document.getElementById('gift-modal').style.display = 'block';
    confetti({ particleCount: 150, spread: 100, origin: { y: 0.5 } });
}

function reveal(id) {
    const texts = {
        1: "Твоя забота — самое теплое, что есть в моей жизни. Спасибо! ❤️",
        2: "Твоя улыбка способна разогнать любые тучи. Ты прекрасна! 🌟",
        3: "Твоя мудрость помогает мне во всем. Ты — мой главный учитель. 🎓",
        4: "Твои советы всегда попадают в точку. Ты так тонко всё чувствуешь! 🌸",
        5: "Просто спасибо за то, что ты — это ты. Я тебя очень люблю! 👩‍👦"
    };
    document.getElementById('reveal-text').innerText = texts[id];
}
window.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            element.classList.add('active');
        }
    });
});

let score = 0;
let gameInterval;

function startArcadeGame() {
    const gameArea = document.getElementById('game-area');
    
    // Создаем новое сердечко каждые 800 миллисекунд
    gameInterval = setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('falling-heart');
        heart.innerText = '💜';
        
        // Случайная позиция по горизонтали
        heart.style.left = Math.random() * 85 + '%';
        // Случайная скорость падения (от 1.5 до 3.5 секунд)
        heart.style.animationDuration = (Math.random() * 2 + 1.5) + 's';
        
        // Что происходит при клике на сердечко
        heart.onclick = () => {
            score++;
            document.getElementById('score').innerText = score;
            heart.remove(); // Удаляем пойманное сердечко
            
            // Проверка победы
            if (score >= 10) {
                winGame();
            }
        };

        gameArea.appendChild(heart);

        // Удаляем сердечко, если оно упало мимо (чтобы не засорять память)
        setTimeout(() => {
            if (heart.parentElement) heart.remove();
        }, 4000);
        
    }, 800);
}

function winGame() {
    clearInterval(gameInterval); // Останавливаем создание новых сердечек
    document.getElementById('game-area').innerHTML = '<h2 style="margin-top:100px; color:#8e44ad;">Победа! 🎉</h2>';
    document.getElementById('win-message').style.display = 'block';
    
    // Запускаем конфетти, если библиотека подключена
    if (typeof confetti === "function") {
        confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 } });
    }
}

// Запускаем игру с небольшой задержкой после загрузки страницы
setTimeout(startArcadeGame, 1500);

function checkPassword() {
    const input = document.getElementById('pass-input').value.toLowerCase().trim();
    if (input === 'бубуська') {
        document.getElementById('auth-screen').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
        confetti({ particleCount: 200, spread: 100, origin: { y: 0.5 } });
    } else {
        document.getElementById('error-msg').innerText = "Не-а, попробуй еще раз! 😉";
    }
}