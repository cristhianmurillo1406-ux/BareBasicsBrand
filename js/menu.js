const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const sideMenu = document.getElementById('sideMenu');
const overlay = document.getElementById('menuOverlay');
const params = new URLSearchParams(window.location.search);
const filter = params.get("filter");

function openSideMenu() {
    sideMenu.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeSideMenu() {
    sideMenu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

openMenu.addEventListener('click', openSideMenu);
closeMenu.addEventListener('click', closeSideMenu);
overlay.addEventListener('click', closeSideMenu);
