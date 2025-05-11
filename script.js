const mouseFollower = document.createElement('div');
mouseFollower.className = 'mouse-follower';
document.body.appendChild(mouseFollower);
document.addEventListener('mousemove', (e) => {
    mouseFollower.style.left = e.clientX + 'px';
    mouseFollower.style.top = e.clientY + 'px';
    const cards = document.querySelectorAll('.watch-card');
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const cardCenterX = rect.left + rect.width / 2;
        const cardCenterY = rect.top + rect.height / 2;
        const distanceX = mouseX - cardCenterX;
        const distanceY = mouseY - cardCenterY;
        const rotateY = distanceX * 0.03;
        const rotateX = -distanceY * 0.03;
        card.style.transform = `
            perspective(2000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateZ(50px)
            scale(1.05)
        `;
        const shadowX = distanceX * 0.1;
        const shadowY = distanceY * 0.1;
        card.style.boxShadow = `
            ${shadowX}px ${shadowY}px 50px rgba(0, 0, 0, 0.6),
            ${-shadowX * 0.5}px ${-shadowY * 0.5}px 30px rgba(255, 111, 97, 0.2)
        `;
    });
});
function createEnhancedFloatingElements() {
    const container = document.querySelector('.hero');
    const elements = 8;
    for(let i = 0; i < elements; i++) {
        const element = document.createElement('div');
        element.className = 'floating-element';
        const size = Math.random() * 100 + 50;
        element.style.width = `${size}px`;
        element.style.height = `${size}px`;
        element.style.left = `${Math.random() * 100}%`;
        element.style.top = `${Math.random() * 100}%`;
        element.style.animationDelay = `${Math.random() * 5}s`;
        element.style.animationDuration = `${Math.random() * 20 + 15}s`;
        element.style.opacity = Math.random() * 0.3;
        container.appendChild(element);
    }
}
document.addEventListener('DOMContentLoaded', () => {
    createEnhancedFloatingElements();
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
});
document.addEventListener('mouseleave', () => {
    const cards = document.querySelectorAll('.watch-card');
    cards.forEach(card => {
        card.style.transform = `
            perspective(2000px)
            rotateX(0deg)
            rotateY(0deg)
            translateZ(50px)
            scale(1)
        `;
        card.style.boxShadow = 'none';
    });
});
