/*--- Live Market Snapshot Section Start ---*/
document.addEventListener('DOMContentLoaded', function () {
    /*--- Snapshot Time ---*/
    const fnMktSnapshotTime = document.getElementById('fn-mkt-snapshot-time');
    if (fnMktSnapshotTime) {
        const fnMktSnapshotUpdateTime = function () {
            const fnMktSnapshotNow = new Date();
            fnMktSnapshotTime.textContent = fnMktSnapshotNow.toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit'
            });
        };
        fnMktSnapshotUpdateTime();
    }
    /*--- Snapshot Hover ---*/
    const fnMktSnapshotItems = document.querySelectorAll('.fn-mkt-snapshot-item');
    fnMktSnapshotItems.forEach(function (fnMktSnapshotItem) {
        fnMktSnapshotItem.addEventListener('mouseenter', function () {
            fnMktSnapshotItem.classList.add('active');
        });
        fnMktSnapshotItem.addEventListener('mouseleave', function () {
            fnMktSnapshotItem.classList.remove('active');
        });
    });
});
/*--- Live Market Snapshot Section End ---*/

/*--- Featured Insight Section Start ---*/
document.addEventListener('DOMContentLoaded', function () {
    const fnMktFeaturedCard = document.querySelector('.fn-mkt-featured-card');
    if (!fnMktFeaturedCard) return;
    /*--- Featured Visual Interaction ---*/
    const fnMktFeaturedVisual = fnMktFeaturedCard.querySelector('.fn-mkt-featured-visual');
    if (fnMktFeaturedVisual) {
        fnMktFeaturedVisual.addEventListener('mousemove', function (fnMktFeaturedEvent) {
            if (window.innerWidth <= 991) return;
            const fnMktFeaturedRect = fnMktFeaturedVisual.getBoundingClientRect();
            const fnMktFeaturedX = (fnMktFeaturedEvent.clientX - fnMktFeaturedRect.left) / fnMktFeaturedRect.width - .5;
            const fnMktFeaturedY = (fnMktFeaturedEvent.clientY - fnMktFeaturedRect.top) / fnMktFeaturedRect.height - .5;
            const fnMktFeaturedChart = fnMktFeaturedVisual.querySelector('.fn-mkt-featured-visual-chart');
            const fnMktFeaturedBadge = fnMktFeaturedVisual.querySelector('.fn-mkt-featured-visual-badge');
            if (fnMktFeaturedChart) fnMktFeaturedChart.style.transform = 'translate(' + fnMktFeaturedX * 8 + 'px,' + fnMktFeaturedY * 8 + 'px)';
            if (fnMktFeaturedBadge) fnMktFeaturedBadge.style.transform = 'translateX(calc(-50% + ' + fnMktFeaturedX * 5 + 'px)) translateY(' + fnMktFeaturedY * 5 + 'px)';
        });
        fnMktFeaturedVisual.addEventListener('mouseleave', function () {
            const fnMktFeaturedChart = fnMktFeaturedVisual.querySelector('.fn-mkt-featured-visual-chart');
            const fnMktFeaturedBadge = fnMktFeaturedVisual.querySelector('.fn-mkt-featured-visual-badge');
            if (fnMktFeaturedChart) fnMktFeaturedChart.style.transform = '';
            if (fnMktFeaturedBadge) fnMktFeaturedBadge.style.transform = 'translateX(-50%)';
        });
    }
});
/*--- Featured Insight Section End ---*/

/*--- Latest Market Insights Section Start ---*/
document.addEventListener('DOMContentLoaded', function () {
    const fnMktLatestList = document.getElementById('fn-mkt-latest-list');
    const fnMktLatestSearch = document.getElementById('fn-mkt-latest-search');
    const fnMktLatestClear = document.getElementById('fn-mkt-latest-clear');
    const fnMktLatestFilters = document.querySelectorAll('.fn-mkt-latest-filter');
    const fnMktLatestCards = document.querySelectorAll('.fn-mkt-latest-card');
    const fnMktLatestCount = document.getElementById('fn-mkt-latest-count');
    const fnMktLatestResultText = document.getElementById('fn-mkt-latest-result-text');
    const fnMktLatestReset = document.getElementById('fn-mkt-latest-reset');
    const fnMktLatestEmpty = document.getElementById('fn-mkt-latest-empty');
    const fnMktLatestEmptyReset = document.getElementById('fn-mkt-latest-empty-reset');
    if (!fnMktLatestList || !fnMktLatestSearch || !fnMktLatestCards.length) return;
    let fnMktLatestCategory = 'all';
    /*--- Latest Filter ---*/
    const fnMktLatestApply = function () {
        const fnMktLatestQuery = fnMktLatestSearch.value.trim().toLowerCase();
        let fnMktLatestVisible = 0;
        fnMktLatestCards.forEach(function (fnMktLatestCard) {
            const fnMktLatestCardCategory = fnMktLatestCard.dataset.category || '';
            const fnMktLatestCardSearch = (fnMktLatestCard.dataset.search || '').toLowerCase();
            const fnMktLatestCardText = fnMktLatestCard.textContent.toLowerCase();
            const fnMktLatestCategoryMatch = fnMktLatestCategory === 'all' || fnMktLatestCardCategory === fnMktLatestCategory;
            const fnMktLatestSearchMatch = !fnMktLatestQuery || fnMktLatestCardSearch.includes(fnMktLatestQuery) || fnMktLatestCardText.includes(fnMktLatestQuery);
            if (fnMktLatestCategoryMatch && fnMktLatestSearchMatch) {
                fnMktLatestCard.classList.remove('hidden');
                fnMktLatestVisible++;
            } else {
                fnMktLatestCard.classList.add('hidden');
            }
        });
        /*--- Latest Count ---*/
        if (fnMktLatestCount) fnMktLatestCount.textContent = fnMktLatestVisible;
        /*--- Latest Status ---*/
        if (fnMktLatestResultText) {
            if (fnMktLatestQuery && fnMktLatestCategory !== 'all') {
                fnMktLatestResultText.textContent = 'Showing ' + fnMktLatestVisible + ' results for "' + fnMktLatestSearch.value.trim() + '" in ' + fnMktLatestCategory.replace('-', ' ') + '.';
            } else if (fnMktLatestQuery) {
                fnMktLatestResultText.textContent = 'Showing ' + fnMktLatestVisible + ' results for "' + fnMktLatestSearch.value.trim() + '".';
            } else if (fnMktLatestCategory !== 'all') {
                const fnMktLatestActiveButton = document.querySelector('.fn-mkt-latest-filter.active');
                const fnMktLatestActiveName = fnMktLatestActiveButton ? fnMktLatestActiveButton.textContent.trim() : fnMktLatestCategory;
                fnMktLatestResultText.textContent = 'Showing ' + fnMktLatestVisible + ' ' + fnMktLatestActiveName.toLowerCase() + ' insights.';
            } else {
                fnMktLatestResultText.textContent = 'Showing all insights';
            }
        }
        /*--- Latest Empty State ---*/
        if (fnMktLatestEmpty) {
            if (fnMktLatestVisible === 0) fnMktLatestEmpty.classList.add('visible');
            else fnMktLatestEmpty.classList.remove('visible');
        }
        if (fnMktLatestClear) {
            if (fnMktLatestSearch.value.trim()) fnMktLatestClear.classList.add('visible');
            else fnMktLatestClear.classList.remove('visible');
        }
    };
    /*--- Category Selection ---*/
    fnMktLatestFilters.forEach(function (fnMktLatestFilter) {
        fnMktLatestFilter.addEventListener('click', function () {
            fnMktLatestFilters.forEach(function (fnMktLatestItem) { fnMktLatestItem.classList.remove('active'); });
            fnMktLatestFilter.classList.add('active');
            fnMktLatestCategory = fnMktLatestFilter.dataset.category || 'all';
            fnMktLatestApply();
        });
    });
    /*--- Search Input ---*/
    fnMktLatestSearch.addEventListener('input', function () {
        fnMktLatestApply();
    });
    /*--- Clear Search ---*/
    if (fnMktLatestClear) {
        fnMktLatestClear.addEventListener('click', function () {
            fnMktLatestSearch.value = '';
            fnMktLatestSearch.focus();
            fnMktLatestApply();
        });
    }
    /*--- Reset Filters ---*/
    const fnMktLatestResetAll = function () {
        fnMktLatestCategory = 'all';
        fnMktLatestSearch.value = '';
        fnMktLatestFilters.forEach(function (fnMktLatestItem) { fnMktLatestItem.classList.remove('active'); });
        const fnMktLatestAllButton = document.querySelector('.fn-mkt-latest-filter[data-category="all"]');
        if (fnMktLatestAllButton) fnMktLatestAllButton.classList.add('active');
        fnMktLatestApply();
    };
    if (fnMktLatestReset) fnMktLatestReset.addEventListener('click', fnMktLatestResetAll);
    if (fnMktLatestEmptyReset) fnMktLatestEmptyReset.addEventListener('click', fnMktLatestResetAll);
    /*--- Initial State ---*/
    fnMktLatestApply();
});
/*--- Latest Market Insights Section End ---*/
