/*--- Client Investments ---*/
document.addEventListener('DOMContentLoaded', function () {
    /*--- Client Data ---*/
    const fnClientEmail = localStorage.getItem('fnLoggedInEmail') || localStorage.getItem('fnUserEmail') || localStorage.getItem('fnRegisteredEmail') || 'client@example.com';
    const fnClientTopbarEmail = document.getElementById('fn-adm-topbar-email');
    const fnClientSidebarEmail = document.getElementById('fn-adm-sidebar-email');
    if (fnClientTopbarEmail) fnClientTopbarEmail.textContent = fnClientEmail;
    if (fnClientSidebarEmail) fnClientSidebarEmail.textContent = fnClientEmail;
    /*--- Investment Data ---*/
    const fnClientInvestments = [
        {id:1,name:'Large Cap Equity',category:'Equity Fund',type:'equity',typeName:'Equity',invested:292000,value:324800,returnValue:11.24,status:'active',icon:'bi-bar-chart-fill'},
        {id:2,name:'Balanced Growth',category:'Hybrid Fund',type:'mutual',typeName:'Mutual Fund',invested:265700,value:286450,returnValue:7.82,status:'active',icon:'bi-buildings'},
        {id:3,name:'Secure Debt Fund',category:'Debt Fund',type:'debt',typeName:'Debt',invested:204050,value:214600,returnValue:5.16,status:'active',icon:'bi-safe2'},
        {id:4,name:'Global Opportunities',category:'Global Equity',type:'equity',typeName:'Equity',invested:181650,value:198800,returnValue:9.46,status:'active',icon:'bi-globe2'},
        {id:5,name:'Future Growth Watchlist',category:'Equity Opportunity',type:'equity',typeName:'Equity',invested:0,value:0,returnValue:0,status:'watchlist',icon:'bi-eye'}
    ];
    /*--- Elements ---*/
    const fnClientSearch = document.getElementById('fn-clt-investments-search');
    const fnClientType = document.getElementById('fn-clt-investments-type');
    const fnClientStatus = document.getElementById('fn-clt-investments-status');
    const fnClientSort = document.getElementById('fn-clt-investments-sort');
    const fnClientReset = document.getElementById('fn-clt-investments-reset');
    const fnClientEmptyReset = document.getElementById('fn-clt-investments-empty-reset');
    const fnClientTableBody = document.getElementById('fn-clt-investments-table-body');
    const fnClientCardView = document.getElementById('fn-clt-investments-card-view');
    const fnClientTableView = document.getElementById('fn-clt-investments-table-view');
    const fnClientEmpty = document.getElementById('fn-clt-investments-empty');
    const fnClientVisibleCount = document.getElementById('fn-clt-investments-visible-count');
    const fnClientViewButtons = document.querySelectorAll('.fn-clt-investments-view-toggle button');
    const fnClientModal = document.getElementById('fn-clt-investments-modal');
    const fnClientModalClose = document.getElementById('fn-clt-investments-modal-close');
    const fnClientModalBackdrop = document.getElementById('fn-clt-investments-modal-backdrop');
    /*--- Format Currency ---*/
    const fnClientCurrency = function (fnClientValue) {
        return '₹' + Number(fnClientValue).toLocaleString('en-IN');
    };
    /*--- Investment HTML ---*/
    const fnClientInvestmentRow = function (fnClientItem) {
        const fnClientStatusText = fnClientItem.status === 'watchlist' ? 'Watchlist' : 'Active';
        const fnClientReturnText = fnClientItem.returnValue > 0 ? '+' + fnClientItem.returnValue.toFixed(2) + '%' : '—';
        return '<tr>' +
            '<td><div class="fn-clt-investment-name"><span class="fn-clt-investment-icon"><i class="bi ' + fnClientItem.icon + '"></i></span><div class="fn-clt-investment-name-content"><strong>' + fnClientItem.name + '</strong><small>' + fnClientItem.category + '</small></div></div></td>' +
            '<td>' + fnClientItem.typeName + '</td>' +
            '<td>' + (fnClientItem.invested ? fnClientCurrency(fnClientItem.invested) : '—') + '</td>' +
            '<td>' + (fnClientItem.value ? fnClientCurrency(fnClientItem.value) : '—') + '</td>' +
            '<td class="fn-clt-investment-return">' + fnClientReturnText + '</td>' +
            '<td><span class="fn-clt-investment-status ' + fnClientItem.status + '">' + fnClientStatusText + '</span></td>' +
            '<td><button type="button" class="fn-clt-investment-details-btn" data-investment-id="' + fnClientItem.id + '">Details <i class="bi bi-arrow-up-right"></i></button></td>' +
            '</tr>';
    };
    const fnClientInvestmentCard = function (fnClientItem) {
        const fnClientStatusText = fnClientItem.status === 'watchlist' ? 'Watchlist' : 'Active';
        const fnClientReturnText = fnClientItem.returnValue > 0 ? '+' + fnClientItem.returnValue.toFixed(2) + '%' : '—';
        return '<article class="fn-clt-investment-card">' +
            '<div class="fn-clt-investment-card-top"><div class="fn-clt-investment-card-name"><span class="fn-clt-investment-icon"><i class="bi ' + fnClientItem.icon + '"></i></span><div><strong>' + fnClientItem.name + '</strong><small>' + fnClientItem.category + '</small></div></div><span class="fn-clt-investment-status ' + fnClientItem.status + '">' + fnClientStatusText + '</span></div>' +
            '<div class="fn-clt-investment-card-stats"><div><span>Invested</span><strong>' + (fnClientItem.invested ? fnClientCurrency(fnClientItem.invested) : '—') + '</strong></div><div><span>Current Value</span><strong>' + (fnClientItem.value ? fnClientCurrency(fnClientItem.value) : '—') + '</strong></div><div><span>Return</span><strong class="fn-clt-investments-positive">' + fnClientReturnText + '</strong></div><div><span>Type</span><strong>' + fnClientItem.typeName + '</strong></div></div>' +
            '<button type="button" class="fn-clt-investment-card-btn" data-investment-id="' + fnClientItem.id + '">View Details <i class="bi bi-arrow-right"></i></button>' +
            '</article>';
    };
    /*--- Filter + Sort ---*/
    const fnClientRender = function () {
        const fnClientQuery = fnClientSearch.value.trim().toLowerCase();
        const fnClientFiltered = fnClientInvestments.filter(function (fnClientItem) {
            const fnClientSearchMatch = !fnClientQuery || fnClientItem.name.toLowerCase().includes(fnClientQuery) || fnClientItem.category.toLowerCase().includes(fnClientQuery) || fnClientItem.typeName.toLowerCase().includes(fnClientQuery);
            const fnClientTypeMatch = fnClientType.value === 'all' || fnClientItem.type === fnClientType.value;
            const fnClientStatusMatch = fnClientStatus.value === 'all' || fnClientItem.status === fnClientStatus.value;
            return fnClientSearchMatch && fnClientTypeMatch && fnClientStatusMatch;
        });
        fnClientFiltered.sort(function (fnClientA,fnClientB) {
            if (fnClientSort.value === 'value-desc') return fnClientB.value - fnClientA.value;
            if (fnClientSort.value === 'value-asc') return fnClientA.value - fnClientB.value;
            if (fnClientSort.value === 'return-desc') return fnClientB.returnValue - fnClientA.returnValue;
            if (fnClientSort.value === 'return-asc') return fnClientA.returnValue - fnClientB.returnValue;
            return fnClientA.name.localeCompare(fnClientB.name);
        });
        fnClientTableBody.innerHTML = fnClientFiltered.map(fnClientInvestmentRow).join('');
        fnClientCardView.innerHTML = fnClientFiltered.map(fnClientInvestmentCard).join('');
        fnClientVisibleCount.textContent = fnClientFiltered.length + (fnClientFiltered.length === 1 ? ' Investment' : ' Investments');
        fnClientEmpty.style.display = fnClientFiltered.length ? 'none' : 'flex';
        fnClientTableView.style.display = fnClientFiltered.length ? '' : 'none';
        fnClientCardView.style.display = fnClientFiltered.length ? 'none' : 'none';
        fnClientAttachDetails();
    };
    /*--- Details Modal ---*/
    const fnClientAttachDetails = function () {
        document.querySelectorAll('[data-investment-id]').forEach(function (fnClientButton) {
            fnClientButton.addEventListener('click', function () {
                const fnClientId = Number(this.getAttribute('data-investment-id'));
                const fnClientItem = fnClientInvestments.find(function (fnClientInvestment) {
                    return fnClientInvestment.id === fnClientId;
                });
                if (!fnClientItem) return;
                document.getElementById('fn-clt-investments-modal-icon').innerHTML = '<i class="bi ' + fnClientItem.icon + '"></i>';
                document.getElementById('fn-clt-investments-modal-type').textContent = fnClientItem.typeName;
                document.getElementById('fn-clt-investments-modal-name').textContent = fnClientItem.name;
                document.getElementById('fn-clt-investments-modal-category').textContent = fnClientItem.category;
                document.getElementById('fn-clt-investments-modal-invested').textContent = fnClientItem.invested ? fnClientCurrency(fnClientItem.invested) : '—';
                document.getElementById('fn-clt-investments-modal-value').textContent = fnClientItem.value ? fnClientCurrency(fnClientItem.value) : '—';
                document.getElementById('fn-clt-investments-modal-return').textContent = fnClientItem.returnValue ? '+' + fnClientItem.returnValue.toFixed(2) + '%' : '—';
                document.getElementById('fn-clt-investments-modal-status').textContent = fnClientItem.status === 'watchlist' ? 'Watchlist' : 'Active';
                fnClientModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        });
    };
    /*--- Close Modal ---*/
    const fnClientCloseModal = function () {
        fnClientModal.classList.remove('active');
        document.body.style.overflow = '';
    };
    fnClientModalClose.addEventListener('click',fnClientCloseModal);
    fnClientModalBackdrop.addEventListener('click',fnClientCloseModal);
    document.addEventListener('keydown',function (fnClientEvent) {
        if (fnClientEvent.key === 'Escape') fnClientCloseModal();
    });
    /*--- View Toggle ---*/
    fnClientViewButtons.forEach(function (fnClientButton) {
        fnClientButton.addEventListener('click',function () {
            fnClientViewButtons.forEach(function (fnClientCurrent) {
                fnClientCurrent.classList.remove('active');
            });
            this.classList.add('active');
            const fnClientView = this.getAttribute('data-view');
            if (fnClientView === 'cards') {
                fnClientTableView.style.display = 'none';
                fnClientCardView.style.display = 'grid';
            } else {
                fnClientTableView.style.display = 'block';
                fnClientCardView.style.display = 'none';
            }
        });
    });
    /*--- Controls ---*/
    [fnClientSearch,fnClientType,fnClientStatus,fnClientSort].forEach(function (fnClientControl) {
        if (!fnClientControl) return;
        fnClientControl.addEventListener(fnClientControl.tagName === 'INPUT' ? 'input' : 'change',fnClientRender);
    });
    const fnClientClearFilters = function () {
        fnClientSearch.value = '';
        fnClientType.value = 'all';
        fnClientStatus.value = 'all';
        fnClientSort.value = 'value-desc';
        fnClientRender();
    };
    fnClientReset.addEventListener('click',fnClientClearFilters);
    fnClientEmptyReset.addEventListener('click',fnClientClearFilters);
    /*--- Initial Render ---*/
    fnClientRender();
});