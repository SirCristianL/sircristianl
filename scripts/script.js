function toggleNavbar() {
    let menu = document.querySelector('.nav-list-desktop');
    menu?.classList.toggle('show');
}

function toggleTheme() {
    let body = document.querySelector('body');
    body?.classList.toggle('light-mode');
    let btns = document.querySelectorAll('.btn-theme');
    btns.forEach(item => {
        item.classList.toggle('show');
    });
}