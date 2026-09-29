/*--- Overview Data ---*/
const fnAdmOverviewName = document.getElementById('fn-adm-overview-name');
const fnAdmOverviewDate = document.getElementById('fn-adm-overview-date');
const fnAdmStoredName = localStorage.getItem('fnUserName') || localStorage.getItem('fnRegisteredName') || 'Admin';
if (fnAdmOverviewName) { fnAdmOverviewName.textContent = fnAdmStoredName.split(' ')[0]; }
if (fnAdmOverviewDate) {
    fnAdmOverviewDate.textContent = new Intl.DateTimeFormat('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date());
}

const ssIndBlogReadButtons = document.querySelectorAll(".fn-adm-overview-more");
    if (ssIndBlogReadButtons.length) {
        ssIndBlogReadButtons.forEach(function (ssButton) {
            ssButton.addEventListener("click", function (ssEvent) {
                ssEvent.preventDefault();
                ssEvent.stopPropagation();
                window.location.href = "404.html";
            });
        });
    }