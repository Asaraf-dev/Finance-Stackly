/*--- Admin Solutions ---*/
document.addEventListener('DOMContentLoaded', function () {
    /*--- Solution Elements ---*/
    const fnAdmSolutionSearch = document.getElementById('fn-adm-solutions-search');
    const fnAdmSolutionCategoryButtons = document.querySelectorAll('.fn-adm-solutions-filter button');
    const fnAdmSolutionStatus = document.getElementById('fn-adm-solutions-status');
    const fnAdmSolutionReset = document.getElementById('fn-adm-solutions-reset');
    const fnAdmSolutionEmptyReset = document.getElementById('fn-adm-solutions-empty-reset');
    const fnAdmSolutionCards = document.querySelectorAll('.fn-adm-solution-item');
    const fnAdmSolutionEmpty = document.getElementById('fn-adm-solutions-empty');
    const fnAdmSolutionActive = document.getElementById('fn-adm-solutions-active');
    const fnAdmSolutionTotal = document.getElementById('fn-adm-solutions-total');
    /*--- Solution Filtering ---*/
    const fnAdmFilterSolutions = function () {
        const fnAdmSearch = fnAdmSolutionSearch ? fnAdmSolutionSearch.value.trim().toLowerCase() : '';
        const fnAdmCategory = document.querySelector('.fn-adm-solutions-filter button.active')?.dataset.category || 'all';
        const fnAdmStatus = fnAdmSolutionStatus ? fnAdmSolutionStatus.value : 'all';
        let fnAdmVisible = 0;
        fnAdmSolutionCards.forEach(function (fnAdmCard) {
            const fnAdmCardCategory = fnAdmCard.dataset.category;
            const fnAdmCardStatus = fnAdmCard.dataset.status;
            const fnAdmCardName = fnAdmCard.dataset.name.toLowerCase();
            const fnAdmCardText = fnAdmCard.textContent.toLowerCase();
            const fnAdmCategoryMatch = fnAdmCategory === 'all' || fnAdmCardCategory === fnAdmCategory;
            const fnAdmStatusMatch = fnAdmStatus === 'all' || fnAdmCardStatus === fnAdmStatus;
            const fnAdmSearchMatch = !fnAdmSearch || fnAdmCardName.includes(fnAdmSearch) || fnAdmCardText.includes(fnAdmSearch);
            const fnAdmShow = fnAdmCategoryMatch && fnAdmStatusMatch && fnAdmSearchMatch;
            fnAdmCard.classList.toggle('hidden', !fnAdmShow);
            if (fnAdmShow) fnAdmVisible++;
        });
        if (fnAdmSolutionEmpty) fnAdmSolutionEmpty.classList.toggle('show', fnAdmVisible === 0);
    };
    /*--- Category Filter ---*/
    fnAdmSolutionCategoryButtons.forEach(function (fnAdmButton) {
        fnAdmButton.addEventListener('click', function () {
            fnAdmSolutionCategoryButtons.forEach(function (fnAdmItem) { fnAdmItem.classList.remove('active'); });
            fnAdmButton.classList.add('active');
            fnAdmFilterSolutions();
        });
    });
    /*--- Status Filter ---*/
    if (fnAdmSolutionStatus) {
        fnAdmSolutionStatus.addEventListener('change', fnAdmFilterSolutions);
    }
    /*--- Search ---*/
    if (fnAdmSolutionSearch) {
        fnAdmSolutionSearch.addEventListener('input', fnAdmFilterSolutions);
    }
    /*--- Reset Filters ---*/
    const fnAdmResetSolutions = function () {
        if (fnAdmSolutionSearch) fnAdmSolutionSearch.value = '';
        if (fnAdmSolutionStatus) fnAdmSolutionStatus.value = 'all';
        fnAdmSolutionCategoryButtons.forEach(function (fnAdmItem) { fnAdmItem.classList.remove('active'); });
        const fnAdmAllButton = document.querySelector('.fn-adm-solutions-filter button[data-category="all"]');
        if (fnAdmAllButton) fnAdmAllButton.classList.add('active');
        fnAdmFilterSolutions();
    };
    if (fnAdmSolutionReset) fnAdmSolutionReset.addEventListener('click', fnAdmResetSolutions);
    if (fnAdmSolutionEmptyReset) fnAdmSolutionEmptyReset.addEventListener('click', fnAdmResetSolutions);
    /*--- Solution Toggle ---*/
    const fnAdmSolutionToggles = document.querySelectorAll('[data-solution-toggle]');
    fnAdmSolutionToggles.forEach(function (fnAdmToggle) {
        fnAdmToggle.addEventListener('change', function () {
            const fnAdmCard = fnAdmToggle.closest('.fn-adm-solution-item');
            if (!fnAdmCard) return;
            const fnAdmStatus = fnAdmCard.querySelector('.fn-adm-solution-item-status');
            if (fnAdmToggle.checked) {
                fnAdmCard.dataset.status = 'active';
                if (fnAdmStatus) {
                    fnAdmStatus.classList.remove('inactive');
                    fnAdmStatus.classList.add('active');
                    fnAdmStatus.innerHTML = '<i></i> Active';
                }
            } else {
                fnAdmCard.dataset.status = 'inactive';
                if (fnAdmStatus) {
                    fnAdmStatus.classList.remove('active');
                    fnAdmStatus.classList.add('inactive');
                    fnAdmStatus.innerHTML = '<i></i> Inactive';
                }
            }
            fnAdmUpdateActiveCount();
            fnAdmFilterSolutions();
        });
    });
    /*--- Active Count ---*/
    const fnAdmUpdateActiveCount = function () {
        if (!fnAdmSolutionActive) return;
        let fnAdmCount = 0;
        fnAdmSolutionCards.forEach(function (fnAdmCard) {
            if (fnAdmCard.dataset.status === 'active') fnAdmCount++;
        });
        fnAdmSolutionActive.textContent = fnAdmCount;
    };
    /*--- Details Modal ---*/
    const fnAdmSolutionModal = document.getElementById('fn-adm-solution-modal');
    const fnAdmSolutionModalOverlay = document.getElementById('fn-adm-solution-modal-overlay');
    const fnAdmSolutionModalClose = document.getElementById('fn-adm-solution-modal-close');
    const fnAdmSolutionModalAction = document.getElementById('fn-adm-solution-modal-action');
    const fnAdmSolutionModalTitle = document.getElementById('fn-adm-solution-modal-title');
    const fnAdmSolutionModalDescription = document.getElementById('fn-adm-solution-modal-description');
    const fnAdmSolutionModalCategory = document.getElementById('fn-adm-solution-modal-category');
    const fnAdmSolutionModalStatus = document.getElementById('fn-adm-solution-modal-status');
    const fnAdmSolutionModalUsage = document.getElementById('fn-adm-solution-modal-usage');
    const fnAdmSolutionModalPerformance = document.getElementById('fn-adm-solution-modal-performance');
    const fnAdmSolutionModalIcon = document.getElementById('fn-adm-solution-modal-icon');
    /*--- Open Solution Modal ---*/
    const fnAdmOpenSolutionModal = function (fnAdmCard) {
        if (!fnAdmSolutionModal || !fnAdmCard) return;
        const fnAdmTitle = fnAdmCard.dataset.name || 'Solution';
        const fnAdmDescription = fnAdmCard.querySelector('.fn-adm-solution-item-content p')?.textContent || '';
        const fnAdmCategory = fnAdmCard.querySelector('.fn-adm-solution-item-category')?.textContent || '';
        const fnAdmStatus = fnAdmCard.dataset.status === 'active' ? 'Active' : 'Inactive';
        const fnAdmStats = fnAdmCard.querySelectorAll('.fn-adm-solution-item-stats strong');
        const fnAdmUsage = fnAdmStats[0]?.textContent || '—';
        const fnAdmPerformance = fnAdmStats[1]?.textContent || '—';
        const fnAdmIcon = fnAdmCard.querySelector('.fn-adm-solution-item-icon i')?.className || 'bi bi-stars';
        if (fnAdmSolutionModalTitle) fnAdmSolutionModalTitle.textContent = fnAdmTitle;
        if (fnAdmSolutionModalDescription) fnAdmSolutionModalDescription.textContent = fnAdmDescription;
        if (fnAdmSolutionModalCategory) fnAdmSolutionModalCategory.textContent = fnAdmCategory;
        if (fnAdmSolutionModalStatus) fnAdmSolutionModalStatus.textContent = fnAdmStatus;
        if (fnAdmSolutionModalUsage) fnAdmSolutionModalUsage.textContent = fnAdmUsage;
        if (fnAdmSolutionModalPerformance) fnAdmSolutionModalPerformance.textContent = fnAdmPerformance;
        if (fnAdmSolutionModalIcon) fnAdmSolutionModalIcon.innerHTML = '<i class="' + fnAdmIcon + '"></i>';
        fnAdmSolutionModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };
    /*--- Close Solution Modal ---*/
    const fnAdmCloseSolutionModal = function () {
        if (!fnAdmSolutionModal) return;
        fnAdmSolutionModal.classList.remove('active');
        document.body.style.overflow = '';
    };
    /*--- Solution Details Buttons ---*/
    document.querySelectorAll('.fn-adm-solution-details').forEach(function (fnAdmButton) {
        fnAdmButton.addEventListener('click', function () {
            const fnAdmCard = fnAdmButton.closest('.fn-adm-solution-item');
            fnAdmOpenSolutionModal(fnAdmCard);
        });
    });
    /*--- Modal Close ---*/
    if (fnAdmSolutionModalClose) fnAdmSolutionModalClose.addEventListener('click', fnAdmCloseSolutionModal);
    if (fnAdmSolutionModalAction) fnAdmSolutionModalAction.addEventListener('click', fnAdmCloseSolutionModal);
    if (fnAdmSolutionModalOverlay) fnAdmSolutionModalOverlay.addEventListener('click', fnAdmCloseSolutionModal);
    document.addEventListener('keydown', function (fnAdmEvent) {
        if (fnAdmEvent.key === 'Escape') fnAdmCloseSolutionModal();
    });
    /*--- Add Solution BTN ---*/
    const ssIndBlogReadButtons = document.querySelectorAll(".fn-adm-solutions-add");
    if (ssIndBlogReadButtons.length) {
        ssIndBlogReadButtons.forEach(function (ssButton) {
            ssButton.addEventListener("click", function (ssEvent) {
                ssEvent.preventDefault();
                ssEvent.stopPropagation();
                window.location.href = "404.html";
            });
        });
    }
    
    /*--- Initial State ---*/
    fnAdmUpdateActiveCount();
    fnAdmFilterSolutions();
});