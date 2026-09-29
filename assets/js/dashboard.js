/*--- Dashboard ---*/
document.addEventListener('DOMContentLoaded', function () {
    /*--- Dashboard Elements ---*/
    const fnAdmDashboard = document.getElementById('fn-adm-dashboard');
    const fnAdmSidebar = document.getElementById('fn-adm-sidebar');
    const fnAdmSidebarOverlay = document.getElementById('fn-adm-sidebar-overlay');
    const fnAdmSidebarClose = document.getElementById('fn-adm-sidebar-close');
    const fnAdmMenuToggle = document.getElementById('fn-adm-menu-toggle');
    const fnAdmSidebarLinks = document.querySelectorAll('.fn-adm-sidebar-link[data-section]');
    const fnAdmLogout = document.getElementById('fn-adm-logout');
    /*--- Login Data ---*/
    const fnAdmUserName = localStorage.getItem('fnUserName') || localStorage.getItem('fnRegisteredName') || 'Admin User';
    const fnAdmUserPhone = localStorage.getItem('fnUserPhone') || localStorage.getItem('fnRegisteredPhone') || 'Not available';
    const fnAdmUserEmail = localStorage.getItem('fnUserEmail') || localStorage.getItem('fnLoginEmail') || 'admin@example.com';
    /*--- Display Login Data ---*/
    const fnAdmTopbarEmail = document.getElementById('fn-adm-topbar-email');
    const fnAdmSidebarEmail = document.getElementById('fn-adm-sidebar-email');
    const fnAdmProfileName = document.getElementById('fn-adm-profile-name');
    const fnAdmProfileEmail = document.getElementById('fn-adm-profile-email');
    const fnAdmProfilePhone = document.getElementById('fn-adm-profile-phone');
    if (fnAdmTopbarEmail) fnAdmTopbarEmail.textContent = fnAdmUserEmail;
    if (fnAdmSidebarEmail) fnAdmSidebarEmail.textContent = fnAdmUserEmail;
    if (fnAdmProfileName) fnAdmProfileName.textContent = fnAdmUserName;
    if (fnAdmProfileEmail) fnAdmProfileEmail.textContent = fnAdmUserEmail;
    if (fnAdmProfilePhone) fnAdmProfilePhone.textContent = fnAdmUserPhone;
    /*--- Current Date ---*/
    const fnAdmCurrentDate = document.getElementById('fn-adm-current-date');
    if (fnAdmCurrentDate) {
        fnAdmCurrentDate.textContent = new Intl.DateTimeFormat('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date());
    }
    /*--- Sidebar Open ---*/
    const fnAdmOpenSidebar = function () {
        if (!fnAdmSidebar) return;
        fnAdmSidebar.classList.add('active');
        if (fnAdmSidebarOverlay) fnAdmSidebarOverlay.classList.add('active');
        if (fnAdmMenuToggle) {
            fnAdmMenuToggle.classList.add('active');
            fnAdmMenuToggle.setAttribute('aria-expanded', 'true');
        }
        document.body.style.overflow = 'hidden';
    };
    /*--- Sidebar Close ---*/
    const fnAdmCloseSidebar = function () {
        if (!fnAdmSidebar) return;
        fnAdmSidebar.classList.remove('active');
        if (fnAdmSidebarOverlay) fnAdmSidebarOverlay.classList.remove('active');
        if (fnAdmMenuToggle) {
            fnAdmMenuToggle.classList.remove('active');
            fnAdmMenuToggle.setAttribute('aria-expanded', 'false');
        }
        document.body.style.overflow = '';
    };
    /*--- Mobile Menu Toggle ---*/
    if (fnAdmMenuToggle) {
        fnAdmMenuToggle.addEventListener('click', function () {
            if (fnAdmSidebar.classList.contains('active')) { fnAdmCloseSidebar(); } else { fnAdmOpenSidebar(); }
        });
    }
    /*--- Sidebar Close Button ---*/
    if (fnAdmSidebarClose) fnAdmSidebarClose.addEventListener('click', fnAdmCloseSidebar);
    if (fnAdmSidebarOverlay) fnAdmSidebarOverlay.addEventListener('click', fnAdmCloseSidebar);
    /*--- Sidebar Navigation ---*/
    fnAdmSidebarLinks.forEach(function (fnAdmLink) {
        fnAdmLink.addEventListener('click', function () {
            fnAdmSidebarLinks.forEach(function (fnAdmItem) { fnAdmItem.classList.remove('active'); });
            fnAdmLink.classList.add('active');
            if (window.innerWidth <= 991) fnAdmCloseSidebar();
        });
    });
    /*--- Smooth Section Navigation ---*/
    fnAdmSidebarLinks.forEach(function (fnAdmLink) {
        fnAdmLink.addEventListener('click', function (fnAdmEvent) {
            const fnAdmTarget = fnAdmLink.getAttribute('href');
            if (fnAdmTarget && fnAdmTarget.startsWith('#')) {
                fnAdmEvent.preventDefault();
                const fnAdmSection = document.querySelector(fnAdmTarget);
                if (fnAdmSection) {
                    const fnAdmTopbar = document.querySelector('.fn-adm-topbar');
                    const fnAdmOffset = fnAdmTopbar ? fnAdmTopbar.offsetHeight + 15 : 90;
                    const fnAdmPosition = fnAdmSection.getBoundingClientRect().top + window.scrollY - fnAdmOffset;
                    window.scrollTo({ top: fnAdmPosition, behavior: 'smooth' });
                }
            }
        });
    });
    /*--- Active Navigation On Scroll ---
    const fnAdmSections = document.querySelectorAll('.fn-adm-section[id]');
    const fnAdmScrollSpy = function () {
        let fnAdmCurrent = 'overview';
        const fnAdmScrollPosition = window.scrollY + 150;
        fnAdmSections.forEach(function (fnAdmSection) {
            if (fnAdmScrollPosition >= fnAdmSection.offsetTop) { fnAdmCurrent = fnAdmSection.id; }
        });
        fnAdmSidebarLinks.forEach(function (fnAdmLink) {
            fnAdmLink.classList.toggle('active', fnAdmLink.dataset.section === fnAdmCurrent);
        });
    };
    window.addEventListener('scroll', fnAdmScrollSpy, { passive: true });
    fnAdmScrollSpy();*/
    /*--- Logout ---*/
    if (fnAdmLogout) {
        fnAdmLogout.addEventListener('click', function () {
            localStorage.removeItem('fnUserName');
            localStorage.removeItem('fnUserPhone');
            localStorage.removeItem('fnUserEmail');
            localStorage.removeItem('fnRegisteredName');
            localStorage.removeItem('fnRegisteredPhone');
            localStorage.removeItem('fnRegisteredEmail');
            localStorage.removeItem('fnRegisteredRole');
            localStorage.removeItem('fnRememberedEmail');
        });
    }
    /*--- Dashboard Resize ---*/
    window.addEventListener('resize', function () {
        if (window.innerWidth > 991) fnAdmCloseSidebar();
    });
    /*--- Prevent Horizontal Overflow ---
    window.addEventListener('load', function () {
        document.documentElement.style.overflowX = 'hidden';
        document.body.style.overflowX = 'hidden';
    });*/
});