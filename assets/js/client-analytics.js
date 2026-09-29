/*--- Client Analytics ---*/
document.addEventListener('DOMContentLoaded', function () {
    /*--- Client Data ---*/
    const fnClientName = localStorage.getItem('fnUserName') || localStorage.getItem('fnRegisteredName') || 'Client';
    const fnClientEmail = localStorage.getItem('fnLoggedInEmail') || localStorage.getItem('fnUserEmail') || localStorage.getItem('fnRegisteredEmail') || 'client@example.com';
    const fnClientNameElement = document.getElementById('fn-clt-overview-name');
    const fnClientEmailElement = document.getElementById('fn-adm-topbar-email');
    const fnClientSidebarEmail = document.getElementById('fn-adm-sidebar-email');
    if (fnClientNameElement) fnClientNameElement.textContent = fnClientName.split(' ')[0];
    if (fnClientEmailElement) fnClientEmailElement.textContent = fnClientEmail;
    if (fnClientSidebarEmail) fnClientSidebarEmail.textContent = fnClientEmail;
    /*--- Analytics Elements ---*/
    const fnClientPeriod = document.getElementById('fn-clt-analytics-period');
    const fnClientAsset = document.getElementById('fn-clt-analytics-asset');
    const fnClientView = document.getElementById('fn-clt-analytics-view');
    const fnClientReset = document.getElementById('fn-clt-analytics-reset');
    const fnClientValue = document.getElementById('fn-clt-analytics-value');
    const fnClientGrowth = document.getElementById('fn-clt-analytics-growth');
    const fnClientReturn = document.getElementById('fn-clt-analytics-return');
    const fnClientAssets = document.getElementById('fn-clt-analytics-assets');
    const fnClientValueChange = document.getElementById('fn-clt-analytics-value-change');
    const fnClientGrowthChange = document.getElementById('fn-clt-analytics-growth-change');
    const fnClientAssetsCount = document.getElementById('fn-clt-analytics-assets-count');
    const fnClientChartTitle = document.getElementById('fn-clt-analytics-chart-title');
    const fnClientChartPeriod = document.getElementById('fn-clt-analytics-chart-period');
    const fnClientChartCurrent = document.getElementById('fn-clt-analytics-chart-current');
    const fnClientChartChange = document.getElementById('fn-clt-analytics-chart-change');
    const fnClientChartLine = document.getElementById('fn-clt-analytics-chart-line');
    const fnClientChartArea = document.getElementById('fn-clt-analytics-chart-area-path');
    const fnClientChartPoints = document.getElementById('fn-clt-analytics-chart-points');
    const fnClientXAxis = document.getElementById('fn-clt-analytics-x-axis');
    const fnClientDonut = document.getElementById('fn-clt-analytics-breakdown-donut');
    const fnClientDonutValue = document.getElementById('fn-clt-analytics-donut-value');
    const fnClientTableBody = document.getElementById('fn-clt-analytics-table-body');
    const fnClientTableCount = document.getElementById('fn-clt-analytics-table-count');
    const fnClientEmpty = document.getElementById('fn-clt-analytics-empty');
    /*--- Analytics Dataset ---*/
    const fnClientData = {
        '1M': { label: '1 Month', value: 1284650, growth: 99650, returnValue: 8.42, points: [1185000, 1198000, 1209000, 1223000, 1241000, 1258000, 1284650], labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'Now'] },
        '3M': { label: '3 Months', value: 1284650, growth: 99650, returnValue: 8.42, points: [1145000, 1168000, 1189000, 1204000, 1219000, 1248000, 1284650], labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Now'] },
        '6M': { label: '6 Months', value: 1284650, growth: 99650, returnValue: 8.42, points: [1035000, 1082000, 1114000, 1156000, 1189000, 1232000, 1284650], labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Now'] },
        '1Y': { label: '1 Year', value: 1284650, growth: 99650, returnValue: 8.42, points: [925000, 964000, 1002000, 1048000, 1085000, 1124000, 1168000, 1205000, 1229000, 1251000, 1270000, 1284650], labels: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'] }
    };
    const fnClientAssetsData = {
        all: { value: 1198250, count: '4 asset classes', donut: '48% 27% 15% 10%' },
        equity: { value: 523600, count: '2 equity investments', donut: '100% 0% 0% 0%' },
        debt: { value: 214600, count: '1 debt investment', donut: '0% 100% 0% 0%' },
        mutual: { value: 286450, count: '1 mutual fund', donut: '0% 0% 100% 0%' },
        cash: { value: 86400, count: 'Available cash', donut: '0% 0% 0% 100%' }
    };
    const fnClientFormatCurrency = function (fnClientAmount) {
        return '₹' + Number(fnClientAmount).toLocaleString('en-IN');
    };
    const fnClientFormatLakh = function (fnClientAmount) {
        return '₹' + (fnClientAmount / 100000).toFixed(2) + 'L';
    };
    /*--- Chart Renderer ---*/
    const fnClientRenderChart = function (fnClientChartData) {
        const fnClientPoints = fnClientChartData.points;
        const fnClientMax = Math.max(...fnClientPoints);
        const fnClientMin = Math.min(...fnClientPoints);
        const fnClientRange = Math.max(fnClientMax - fnClientMin, 1);
        const fnClientCoords = fnClientPoints.map(function (fnClientPoint, fnClientIndex) {
            const fnClientX = (fnClientIndex / (fnClientPoints.length - 1)) * 760;
            const fnClientY = 235 - ((fnClientPoint - fnClientMin) / fnClientRange) * 195;
            return { x: fnClientX, y: fnClientY };
        });
        const fnClientLinePath = fnClientCoords.map(function (fnClientPoint, fnClientIndex) {
            return (fnClientIndex === 0 ? 'M' : 'L') + ' ' + fnClientPoint.x + ' ' + fnClientPoint.y;
        }).join(' ');
        const fnClientAreaPath = fnClientLinePath + ' L 760 270 L 0 270 Z';
        fnClientChartLine.setAttribute('d', fnClientLinePath);
        fnClientChartArea.setAttribute('d', fnClientAreaPath);
        fnClientChartPoints.innerHTML = fnClientCoords.map(function (fnClientPoint, fnClientIndex) {
            if (fnClientIndex !== fnClientCoords.length - 1) return '';
            return '<circle class="fn-clt-analytics-chart-point" cx="' + fnClientPoint.x + '" cy="' + fnClientPoint.y + '" r="5"></circle>';
        }).join('');
        fnClientXAxis.innerHTML = fnClientChartData.labels.map(function (fnClientLabel) {
            return '<span>' + fnClientLabel + '</span>';
        }).join('');
    };
    /*--- Asset Filter ---*/
    const fnClientFilterTable = function () {
        const fnClientRows = Array.from(fnClientTableBody.querySelectorAll('tr'));
        let fnClientVisibleCount = 0;
        fnClientRows.forEach(function (fnClientRow) {
            const fnClientRowAsset = fnClientRow.getAttribute('data-asset');
            const fnClientShow = fnClientAsset.value === 'all' || fnClientRowAsset === fnClientAsset.value;
            fnClientRow.style.display = fnClientShow ? '' : 'none';
            if (fnClientShow) fnClientVisibleCount++;
        });
        fnClientTableCount.textContent = fnClientVisibleCount + (fnClientVisibleCount === 1 ? ' Investment' : ' Investments');
        fnClientEmpty.style.display = fnClientVisibleCount ? 'none' : 'flex';
    };
    /*--- Update Analytics ---*/
    const fnClientUpdate = function () {
        const fnClientPeriodData = fnClientData[fnClientPeriod.value];
        const fnClientAssetData = fnClientAssetsData[fnClientAsset.value];
        let fnClientCurrentValue = fnClientPeriodData.value;
        let fnClientGrowthValue = fnClientPeriodData.growth;
        let fnClientReturnValue = fnClientPeriodData.returnValue;
        if (fnClientAsset.value !== 'all') {
            fnClientCurrentValue = fnClientAssetData.value;
            fnClientGrowthValue = Math.round(fnClientCurrentValue * (fnClientReturnValue / 100));
            fnClientReturnValue = fnClientReturnValue * (fnClientAsset.value === 'equity' ? 1.25 : fnClientAsset.value === 'debt' ? .65 : fnClientAsset.value === 'mutual' ? .92 : .25);
        }
        fnClientValue.textContent = fnClientFormatCurrency(fnClientCurrentValue);
        fnClientGrowth.textContent = fnClientFormatCurrency(fnClientGrowthValue);
        fnClientReturn.textContent = fnClientReturnValue.toFixed(2) + '%';
        fnClientAssets.textContent = fnClientFormatCurrency(fnClientAssetsData.all.value);
        fnClientAssetsCount.textContent = fnClientAssetData.count;
        fnClientValueChange.innerHTML = '<i class="bi bi-arrow-up"></i> +' + fnClientReturnValue.toFixed(2) + '%';
        fnClientGrowthChange.innerHTML = '<i class="bi bi-arrow-up"></i> +' + fnClientReturnValue.toFixed(2) + '%';
        fnClientChartTitle.textContent = fnClientView.value === 'value' ? 'Portfolio value' : fnClientView.value === 'growth' ? 'Portfolio growth' : 'Portfolio return';
        fnClientChartPeriod.textContent = fnClientPeriodData.label;
        fnClientChartCurrent.textContent = fnClientFormatCurrency(fnClientCurrentValue);
        fnClientChartChange.textContent = '+' + fnClientReturnValue.toFixed(2) + '%';
        fnClientDonutValue.textContent = fnClientFormatLakh(fnClientCurrentValue);
        const fnClientDonutValues = fnClientAsset.value === 'all' ? '48% 27% 15% 10%' : fnClientAsset.value === 'equity' ? '100% 0% 0% 0%' : fnClientAsset.value === 'debt' ? '0% 100% 0% 0%' : fnClientAsset.value === 'mutual' ? '0% 0% 100% 0%' : '0% 0% 0% 100%';
        fnClientDonut.style.background = 'conic-gradient(var(--fn-primary) 0 ' + fnClientDonutValues.split(' ')[0] + ',#2563eb ' + fnClientDonutValues.split(' ')[0] + ' ' + fnClientDonutValues.split(' ')[0] + ',#8b5cf6 ' + fnClientDonutValues.split(' ')[0] + ' ' + fnClientDonutValues.split(' ')[0] + ',#d8e1e7 ' + fnClientDonutValues.split(' ')[0] + ' 100%)';
        fnClientRenderChart(fnClientPeriodData);
        fnClientFilterTable();
    };
    /*--- Controls ---*/
    [fnClientPeriod, fnClientAsset, fnClientView].forEach(function (fnClientControl) {
        if (fnClientControl) fnClientControl.addEventListener('change', fnClientUpdate);
    });
    if (fnClientReset) {
        fnClientReset.addEventListener('click', function () {
            fnClientPeriod.value = '6M';
            fnClientAsset.value = 'all';
            fnClientView.value = 'value';
            fnClientUpdate();
        });
    }
    /*--- Initial Render ---*/
    const fnClientDonutMap = {
        all: 'conic-gradient(var(--fn-primary) 0 48%,#2563eb 48% 75%,#8b5cf6 75% 90%,#d8e1e7 90% 100%)',
        equity: 'conic-gradient(var(--fn-primary) 0 100%)',
        debt: 'conic-gradient(#2563eb 0 100%)',
        mutual: 'conic-gradient(#8b5cf6 0 100%)',
        cash: 'conic-gradient(#d8e1e7 0 100%)'
    };
    fnClientDonut.style.background = fnClientDonutMap[fnClientAsset.value];
});