/*--- Services Overview Section Start ---*/
document.addEventListener('DOMContentLoaded', function () {
    /*--- Overview Service Interaction ---*/
    const fnSrvOverviewServices = document.querySelectorAll('.fn-srv-overview-service');
    if (!fnSrvOverviewServices.length) return;
    fnSrvOverviewServices.forEach(function (fnSrvOverviewService) {
        fnSrvOverviewService.addEventListener('mouseenter', function () {
            fnSrvOverviewServices.forEach(function (fnSrvOverviewItem) { fnSrvOverviewItem.classList.remove('active'); });
            fnSrvOverviewService.classList.add('active');
        });
        fnSrvOverviewService.addEventListener('mouseleave', function () {
            fnSrvOverviewService.classList.remove('active');
        });
    });
    const ssIndBlogReadButtons = document.querySelectorAll(".fn-srv-overview-service-arrow");
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
/*--- Services Overview Section End ---*/

/*--- How Our Services Work Section Start ---*/
document.addEventListener('DOMContentLoaded', function () {
    const fnSrvProcessSteps = document.querySelectorAll('.fn-srv-process-step');
    if (!fnSrvProcessSteps.length) return;
    /*--- Process Step Interaction ---*/
    fnSrvProcessSteps.forEach(function (fnSrvProcessStep) {
        fnSrvProcessStep.addEventListener('mouseenter', function () {
            fnSrvProcessSteps.forEach(function (fnSrvProcessItem) { fnSrvProcessItem.classList.remove('active'); });
            fnSrvProcessStep.classList.add('active');
        });
        fnSrvProcessStep.addEventListener('mouseleave', function () {
            fnSrvProcessSteps.forEach(function (fnSrvProcessItem) { fnSrvProcessItem.classList.remove('active'); });
            fnSrvProcessSteps[0].classList.add('active');
        });
        fnSrvProcessStep.addEventListener('click', function () {
            fnSrvProcessSteps.forEach(function (fnSrvProcessItem) { fnSrvProcessItem.classList.remove('active'); });
            fnSrvProcessStep.classList.add('active');
        });
    });
});
/*--- How Our Services Work Section End ---*/

/*--- Find Your Solution Section Start ---*/
document.addEventListener('DOMContentLoaded', function () {
    const fnSrvFindItems = document.querySelectorAll('.fn-srv-find-nav-item');
    const fnSrvFindNumber = document.getElementById('fn-srv-find-number');
    const fnSrvFindIcon = document.getElementById('fn-srv-find-icon');
    const fnSrvFindCategory = document.getElementById('fn-srv-find-category');
    const fnSrvFindTitle = document.getElementById('fn-srv-find-title');
    const fnSrvFindText = document.getElementById('fn-srv-find-text');
    if (!fnSrvFindItems.length || !fnSrvFindNumber || !fnSrvFindIcon || !fnSrvFindCategory || !fnSrvFindTitle || !fnSrvFindText) return;
    /*--- Solution Data ---*/
    const fnSrvFindData = {
        personal: {
            number: '01',
            icon: 'bi-person',
            category: 'Personal Growth',
            title: 'Build a stronger financial foundation.',
            text: 'Create a clearer view of your current financial position and organize your priorities around the goals that matter most.'
        },
        investment: {
            number: '02',
            icon: 'bi-graph-up-arrow',
            category: 'Investment',
            title: 'Plan around opportunities with greater clarity.',
            text: 'Explore a structured approach to investment planning by connecting your objectives, time horizon, and financial priorities.'
        },
        retirement: {
            number: '03',
            icon: 'bi-calendar2-check',
            category: 'Retirement',
            title: 'Prepare today for the future you envision.',
            text: 'Build a clearer retirement direction by considering future needs, financial priorities, and long-term planning considerations.'
        },
        business: {
            number: '04',
            icon: 'bi-buildings',
            category: 'Business',
            title: 'Bring stronger financial thinking to your business.',
            text: 'Understand the financial side of your business and create a more structured direction for planning, growth, and future decisions.'
        },
        wealth: {
            number: '05',
            icon: 'bi-pie-chart',
            category: 'Wealth',
            title: 'Bring your long-term financial picture together.',
            text: 'Coordinate financial priorities with a broader perspective designed around wealth organization, planning, and long-term objectives.'
        }
    };
    /*--- Solution Update ---*/
    const fnSrvFindUpdate = function (fnSrvFindKey) {
        const fnSrvFindSolution = fnSrvFindData[fnSrvFindKey];
        if (!fnSrvFindSolution) return;
        fnSrvFindNumber.textContent = fnSrvFindSolution.number;
        fnSrvFindIcon.innerHTML = '<i class="bi ' + fnSrvFindSolution.icon + '"></i>';
        fnSrvFindCategory.textContent = fnSrvFindSolution.category;
        fnSrvFindTitle.textContent = fnSrvFindSolution.title;
        fnSrvFindText.textContent = fnSrvFindSolution.text;
    };
    /*--- Solution Selection ---*/
    fnSrvFindItems.forEach(function (fnSrvFindItem) {
        fnSrvFindItem.addEventListener('click', function () {
            fnSrvFindItems.forEach(function (fnSrvFindNavItem) { fnSrvFindNavItem.classList.remove('active'); });
            fnSrvFindItem.classList.add('active');
            fnSrvFindUpdate(fnSrvFindItem.dataset.solution);
        });
    });
});
/*--- Find Your Solution Section End ---*/