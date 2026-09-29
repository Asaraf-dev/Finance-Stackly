/*--- Client Overview ---*/
document.addEventListener('DOMContentLoaded', function () {
    /*--- Client Stored Data ---*/
    const fnClientName = localStorage.getItem('fnUserName') || localStorage.getItem('fnRegisteredName') || 'Client';
    const fnClientEmail = localStorage.getItem('fnLoggedInEmail') || localStorage.getItem('fnUserEmail') || localStorage.getItem('fnRegisteredEmail') || 'client@example.com';
    /*--- Welcome Name ---*/
    const fnClientOverviewName = document.getElementById('fn-clt-overview-name');
    if (fnClientOverviewName) {
        fnClientOverviewName.textContent = fnClientName.split(' ')[0];
    }
    /*--- Dashboard Email ---*/
    const fnClientTopbarEmail = document.getElementById('fn-adm-topbar-email');
    const fnClientSidebarEmail = document.getElementById('fn-adm-sidebar-email');
    if (fnClientTopbarEmail) fnClientTopbarEmail.textContent = fnClientEmail;
    if (fnClientSidebarEmail) fnClientSidebarEmail.textContent = fnClientEmail;
    /*--- Performance Period ---*/
    const ssIndBlogReadButtons = document.querySelectorAll(".fn-clt-overview-more");
        if (ssIndBlogReadButtons.length) {
            ssIndBlogReadButtons.forEach(function (ssButton) {
                ssButton.addEventListener("click", function (ssEvent) {
                    ssEvent.preventDefault();
                    ssEvent.stopPropagation();
                    window.location.href = "404.html";
                });
            });
        }
});