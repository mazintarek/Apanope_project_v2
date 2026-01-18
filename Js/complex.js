// let el = document.querySelector(".scroller");
// let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
// addEventListener("scroll", () => {
//     let scrollTop = document.documentElement.scrollTop;
//     el.style.width = `${(scrollTop / height) * 100}%`
// })

function updateHeaderHeight() {
    const header = document.querySelector('header');
    if (!header) return;
    const h = header.offsetHeight;
    document.documentElement.style.setProperty('--header-height', (h + 100) + 'px');
}
window.addEventListener('load', updateHeaderHeight);
window.addEventListener('resize', updateHeaderHeight);