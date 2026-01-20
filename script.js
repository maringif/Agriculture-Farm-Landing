window.addEventListener('DOMContentLoaded', () => {
    const headerInner = document.querySelector('.header__inner'); // ドットが必要
    const menu = document.querySelector('.header__list');         // ドットが必要

    if (headerInner && menu) {
        const hamburger = document.createElement('div');
        hamburger.className = 'hamburger__btn';
        hamburger.innerHTML = '<span></span><span></span><span></span>';
        headerInner.appendChild(hamburger);

        hamburger.addEventListener('click', () => {
            menu.classList.toggle('is-active');
            hamburger.classList.toggle('is-active');
        });
    }
});