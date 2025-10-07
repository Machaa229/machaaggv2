function toggleContactMenu() {
    const menu = document.getElementById('contactMenu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    if (menu.style.display === 'block') {
        menu.style.animation = 'fadeInUp 0.3s ease-out';
    }
}

function openTelegram() {
    window.open('https://t.me/+9779700722498', '_blank');
    document.getElementById('contactMenu').style.display = 'none';
}

function showWhatsAppModal() {
    document.getElementById('whatsappModal').style.display = 'flex';
    document.getElementById('contactMenu').style.display = 'none';
}

function closeWhatsAppModal() {
    document.getElementById('whatsappModal').style.display = 'none';
}

function openWhatsApp() {
    window.open('https://wa.me/989923318558', '_blank');
}

function showInstallation() {
    window.open('https://www.youtube.com/watch?v=llWk3kWVDKE', '_blank');
}

function showToolSharing() {
    window.open('arac.html', '_blank');
}

function showScriptsDownload() {
    window.open('https://www.mediafire.com/file/ji578ikoekqtqq6/%5BIM_ALAN%5D_4.9.4.lua/file', '_blank');
}

function showNewScriptsDownload() {
    window.open('https://www.mediafire.com/file/h3inpzrrbuyw4mm/car+parking+4.9.5.1.lua/file', '_blank');
}

function showAboutModal() {
    document.getElementById('aboutModal').style.display = 'flex';
}

function closeAboutModal() {
    document.getElementById('aboutModal').style.display = 'none';
}

function toggleTheme() {
    document.body.classList.toggle('light-theme');
    const icon = document.querySelector('.theme-toggle');
    icon.textContent = document.body.classList.contains('light-theme') ? '☀️' : '🌙';
    localStorage.setItem('theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
    // Theme geçişinde confetti efekti
    playConfetti();
}

// Sayfa yüklendiğinde tema yükle
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        document.querySelector('.theme-toggle').textContent = '☀️';
    }
    // Son güncellemeler
    const updates = [
        { date: '05.10.2025', desc: 'Yeni CPM 4.9.5.1 script paketi eklendi!' },
        { date: '05.10.2025', desc: 'Yeni CPM 4.9.4 script paketi eklendi!' },
        { date: '01.10.2025', desc: 'CPM araç paylaşım sayfası güncellendi.' }
    ];
    const list = document.getElementById('updatesList');
    updates.forEach((update, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${update.date}:</strong> ${update.desc}`;
        li.style.animationDelay = `${index * 0.2}s`;
        li.style.animation = 'fadeInUp 0.5s ease-out forwards';
        list.appendChild(li);
    });

    // Gelişmiş Particle effect - daha canlı
    function createParticles() {
        for (let i = 0; i < 100; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'fixed';
            particle.style.width = `${Math.random() * 4 + 1}px`;
            particle.style.height = particle.style.width;
            particle.style.background = `hsl(${Math.random()*360}, 70%, 60%)`;
            particle.style.borderRadius = '50%';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animation = `float ${Math.random() * 5 + 3}s infinite ease-in-out, spinSlow 10s linear infinite`;
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '-1';
            particle.style.opacity = Math.random() * 0.6 + 0.4;
            document.body.appendChild(particle);
        }
    }

    // Float ve spin stillerini ekle
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes spinSlow {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
    createParticles();

    // Gelişmiş Konfeti efekti - daha havalı
    function playConfetti() {
        for (let i = 0; i < 150; i++) {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.width = `${Math.random() * 8 + 4}px`;
            confetti.style.height = confetti.style.width;
            confetti.style.background = `hsl(${Math.random()*360}, 100%, ${Math.random()*50 + 50}%)`;
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = Math.random() * 100 + '%';
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '999';
            confetti.style.animation = `confettiFall ${Math.random() * 3 + 2}s linear forwards, spinSlow ${Math.random() * 2 + 1}s linear infinite`;
            document.body.appendChild(confetti);
            setTimeout(() => confetti.remove(), 5000);
        }
    }
    const confettiStyle = document.createElement('style');
    confettiStyle.textContent = '@keyframes confettiFall { 0% { transform: translateY(-100vh) rotate(0deg); opacity:1; } 100% { transform: translateY(100vh) rotate(720deg); opacity:0; } }';
    document.head.appendChild(confettiStyle);

    // Sayfa scroll ile parallax efekti
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('body::before');
        if (parallax) {
            parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Mouse hareketi ile cursor trail efekti
    let trail = [];
    document.addEventListener('mousemove', (e) => {
        trail.push({x: e.clientX, y: e.clientY});
        if (trail.length > 10) trail.shift();
        trail.forEach((pos, index) => {
            setTimeout(() => {
                const dot = document.createElement('div');
                dot.style.position = 'fixed';
                dot.style.left = pos.x + 'px';
                dot.style.top = pos.y + 'px';
                dot.style.width = '2px';
                dot.style.height = '2px';
                dot.style.background = 'rgba(74, 144, 226, 0.6)';
                dot.style.borderRadius = '50%';
                dot.style.pointerEvents = 'none';
                dot.style.zIndex = '1000';
                dot.style.animation = 'fadeOut 1s ease-out forwards';
                document.body.appendChild(dot);
                setTimeout(() => dot.remove(), 1000);
            }, index * 50);
        });
    });
    const trailStyle = document.createElement('style');
    trailStyle.textContent = '@keyframes fadeOut { to { opacity: 0; transform: scale(0); } }';
    document.head.appendChild(trailStyle);
});

// Modal kapatma için ESC tuşu ve dış tıklama
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.getElementById('aboutModal').style.display = 'none';
        document.getElementById('whatsappModal').style.display = 'none';
    }
});
document.addEventListener('click', (e) => {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});