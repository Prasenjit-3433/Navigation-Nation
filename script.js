const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const navItems = overlay.querySelectorAll('nav ul li');

// Controll Navigation Animation
function navAnimation(direction1, direction2) {
    for (i = 0; i < navItems.length; i++) {
        navItems[i].classList.replace(`slide-${direction1}-${i+1}`, `slide-${direction2}-${i+1}`);
    }
}

function toggleNav() {
    // Toggle: Menu Bars Open/Closed
    menuBars.classList.toggle('change');

    // Toggle: Menu Active
    overlay.classList.toggle('overlay-active');
    if (overlay.classList.contains('overlay-active')) {
        // Animate In - Overlay
        overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
        // Animate In - Nav Items
        navAnimation('out', 'in');
    } else {
        // Animate Out - Overlay    
        overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
        // Animate Out - Nav Items
        navAnimation('in', 'out');
    }

}

// Event Listeners
menuBars.addEventListener('click', toggleNav);
for (const navItem of navItems) {
    navItem.addEventListener('click', toggleNav);
}