const noBtn = document.getElementById('noBtn');
let clickCount = 0;

const messages = [
    "Are you sure?",
    "Really sure?",
    "Think about it...",
    "You won't regret it!",
    "Don't you want to be happy?",
    "You won't get anyone like me 😢",
    "Come on, say yes!",
    "Pretty please? 🥺",
    "Pretty please",
];

// Create twinkling stars
function createStars() {
    const starsContainer = document.querySelector('.stars-container');
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        starsContainer.appendChild(star);
    }
}

// Create celebration effect with hearts
function createCelebration() {
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement('div');
        heart.style.position = 'fixed';
        heart.style.fontSize = '40px';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = Math.random() * 50 + '%';
        heart.style.zIndex = '1000';
        heart.textContent = '❤️';
        heart.style.animation = `float 4s ease-in forwards`;
        heart.style.pointerEvents = 'none';
        heart.style.opacity = '1';
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            if (heart.parentNode) {
                heart.remove();
            }
        }, 4000);
    }
}

// Initialize stars on page load
createStars();

function moveButton() {
    const maxX = Math.max(window.innerWidth - 200, 100);
    const maxY = Math.max(window.innerHeight - 100, 100);
    
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = Math.min(randomX, window.innerWidth - 150) + 'px';
    noBtn.style.top = Math.min(randomY, window.innerHeight - 50) + 'px';
    noBtn.style.width = '120px';
    noBtn.style.height = 'auto';
    noBtn.style.maxWidth = '150px';
}

noBtn.addEventListener('click', function(e) {
    e.preventDefault();
    
    if (clickCount < messages.length) {
        noBtn.textContent = messages[clickCount];
        moveButton();
        clickCount++;
        
        // If it's the final "Yes", hide the No button and make the real Yes button clickable for final message
        if (clickCount === messages.length) {
            setTimeout(() => {
                noBtn.style.display = 'none';
                const yesBtn = document.querySelector('.yes-btn');
                yesBtn.disabled = false;
                
                // Add click handler to real Yes button for final message
                yesBtn.onclick = null;
                yesBtn.addEventListener('click', function(event) {
                    event.preventDefault();
                    const messageDiv = document.getElementById('message');
                    messageDiv.textContent = 'THANKYOU VANI ❤️❤️❤️   I LOVE YOU FOREVER';
                    messageDiv.style.display = 'block';
                    messageDiv.style.fontSize = '36px';
                    messageDiv.style.color = '#ff1493';
                    messageDiv.style.fontWeight = 'bold';
                    messageDiv.style.textShadow = '3px 3px 8px rgba(255, 20, 147, 0.5)';
                    messageDiv.style.marginTop = '40px';
                    messageDiv.style.animation = 'heartbeat 1.5s ease-in-out, fadeInScale 1s ease-out';
                    messageDiv.style.letterSpacing = '2px';
                    yesBtn.disabled = true;
                    
                    // Trigger celebration effect
                    createCelebration();
                });
            }, 300);
        }
    }
});

// Make Yes button unclickable
document.querySelector('.yes-btn').addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
});
