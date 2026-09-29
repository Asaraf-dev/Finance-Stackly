/*--- Navbar ---*/
document.addEventListener('DOMContentLoaded', function () {
    const fnNavNavbar = document.getElementById('fn-nav-navbar');
    const fnNavNavbarLinks = document.getElementById('fn-nav-navbar-links');
    const fnNavNavbarToggle = document.querySelector('.fn-nav-navbar-toggle');
    const fnNavNavbarLinkItems = document.querySelectorAll('.fn-nav-navbar-link');
    if (!fnNavNavbar) return;
    /*--- Navbar Scroll Effect ---*/
    const fnNavNavbarScroll = function () {
        if (window.scrollY > 30) { fnNavNavbar.classList.add('scrolled'); } else { fnNavNavbar.classList.remove('scrolled'); }
    };
    window.addEventListener('scroll', fnNavNavbarScroll, { passive: true });
    fnNavNavbarScroll();
    /*--- Navbar Mobile Toggle ---*/
    if (fnNavNavbarToggle && fnNavNavbarLinks) {
        fnNavNavbarToggle.addEventListener('click', function () {
            const fnNavNavbarIsOpen = fnNavNavbarLinks.classList.toggle('active');
            fnNavNavbarToggle.classList.toggle('active', fnNavNavbarIsOpen);
            fnNavNavbarToggle.setAttribute('aria-expanded', fnNavNavbarIsOpen ? 'true' : 'false');
        });
    }
    /*--- Navbar Active Link ---*/
    const fnNavNavbarCurrentPage = window.location.pathname.split('/').pop() || 'index.html';
    fnNavNavbarLinkItems.forEach(function (fnNavNavbarLink) {
        const fnNavNavbarHref = fnNavNavbarLink.getAttribute('href');
        if (fnNavNavbarHref === fnNavNavbarCurrentPage) { fnNavNavbarLinkItems.forEach(function (fnNavNavbarItem) { fnNavNavbarItem.classList.remove('active'); }); fnNavNavbarLink.classList.add('active'); }
        fnNavNavbarLink.addEventListener('click', function () {
            fnNavNavbarLinkItems.forEach(function (fnNavNavbarItem) { fnNavNavbarItem.classList.remove('active'); });
            fnNavNavbarLink.classList.add('active');
            if (window.innerWidth <= 991 && fnNavNavbarLinks && fnNavNavbarToggle) { fnNavNavbarLinks.classList.remove('active'); fnNavNavbarToggle.classList.remove('active'); fnNavNavbarToggle.setAttribute('aria-expanded', 'false'); }
        });
    });
    /*--- Navbar Outside Click ---*/
    document.addEventListener('click', function (fnNavNavbarEvent) {
        if (window.innerWidth <= 991 && fnNavNavbarLinks && fnNavNavbarToggle && !fnNavNavbar.contains(fnNavNavbarEvent.target) && fnNavNavbarLinks.classList.contains('active')) { fnNavNavbarLinks.classList.remove('active'); fnNavNavbarToggle.classList.remove('active'); fnNavNavbarToggle.setAttribute('aria-expanded', 'false'); }
    });
    /*--- Navbar Resize ---*/
    window.addEventListener('resize', function () {
        if (window.innerWidth > 991 && fnNavNavbarLinks && fnNavNavbarToggle) { fnNavNavbarLinks.classList.remove('active'); fnNavNavbarToggle.classList.remove('active'); fnNavNavbarToggle.setAttribute('aria-expanded', 'false'); }
    });
});