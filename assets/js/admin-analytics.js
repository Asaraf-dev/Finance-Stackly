/*--- Admin Analytics ---*/
document.addEventListener('DOMContentLoaded', function () {
    /*--- Analytics Elements ---*/
    const fnAdmAnalyticsPeriod = document.querySelectorAll('#fn-adm-analytics-period button');
    const fnAdmAnalyticsAsset = document.getElementById('fn-adm-analytics-asset-filter');
    const fnAdmAnalyticsMarket = document.getElementById('fn-adm-analytics-market-filter');
    const fnAdmAnalyticsReset = document.getElementById('fn-adm-analytics-reset');
    const fnAdmAnalyticsSearch = document.getElementById('fn-adm-analytics-search');
    const fnAdmAnalyticsRows = document.querySelectorAll('#fn-adm-analytics-market-body tr');
    const fnAdmAnalyticsEmpty = document.getElementById('fn-adm-analytics-empty');
    const fnAdmAnalyticsExport = document.getElementById('fn-adm-analytics-export');
    /*--- Analytics Data ---*/
    const fnAdmAnalyticsData = {
        '7D': { growth: '18.42%', growthChange: '+8.4%', value: '₹12.84L', valueChange: '+6.2%', average: '12.64%', averageChange: '+4.8%', clients: '2,846', clientChange: '+12.6%', label: 'Last 7 Days', status: 'Positive trend', chart: ['Jan', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], points: [235, 215, 225, 175, 190, 120, 72] },
        '30D': { growth: '16.85%', growthChange: '+7.2%', value: '₹12.21L', valueChange: '+5.6%', average: '11.94%', averageChange: '+4.1%', clients: '2,764', clientChange: '+10.8%', label: 'Last 30 Days', status: 'Steady growth', chart: ['W1', 'W2', 'W3', 'W4', 'Now'], points: [245, 225, 205, 145, 95] },
        '90D': { growth: '14.76%', growthChange: '+9.1%', value: '₹11.68L', valueChange: '+8.3%', average: '10.82%', averageChange: '+5.6%', clients: '2,592', clientChange: '+9.4%', label: 'Last 90 Days', status: 'Strong trend', chart: ['M1', 'M2', 'M3', 'Now'], points: [260, 225, 190, 120] },
        '1Y': { growth: '18.42%', growthChange: '+12.8%', value: '₹12.84L', valueChange: '+10.4%', average: '12.64%', averageChange: '+7.9%', clients: '2,846', clientChange: '+12.6%', label: 'Last 12 Months', status: 'Positive trend', chart: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'], points: [250, 235, 220, 190, 200, 160, 145, 105, 55] }
    };
    /*--- Analytics Elements ---*/
    const fnAdmGrowth = document.getElementById('fn-adm-analytics-growth');
    const fnAdmGrowthChange = document.getElementById('fn-adm-analytics-growth-change');
    const fnAdmValue = document.getElementById('fn-adm-analytics-value');
    const fnAdmValueChange = document.getElementById('fn-adm-analytics-value-change');
    const fnAdmReturn = document.getElementById('fn-adm-analytics-return');
    const fnAdmReturnChange = document.getElementById('fn-adm-analytics-return-change');
    const fnAdmClients = document.getElementById('fn-adm-analytics-clients');
    const fnAdmClientChange = document.getElementById('fn-adm-analytics-client-change');
    const fnAdmPeriodLabel = document.getElementById('fn-adm-analytics-period-label');
    const fnAdmChartValue = document.getElementById('fn-adm-analytics-chart-value');
    const fnAdmChartStatus = document.getElementById('fn-adm-analytics-chart-status');
    const fnAdmChartFill = document.getElementById('fn-adm-analytics-chart-fill');
    const fnAdmChartLine = document.getElementById('fn-adm-analytics-chart-line');
    const fnAdmChartDot = document.getElementById('fn-adm-analytics-chart-dot');
    const fnAdmChartX = document.getElementById('fn-adm-analytics-chart-x');
    /*--- Create Chart Path ---*/
    const fnAdmCreateChartPath = function (fnAdmPoints) {
        const fnAdmWidth = 900;
        const fnAdmHeight = 300;
        const fnAdmMax = 300;
        const fnAdmMin = 40;
        const fnAdmStep = fnAdmPoints.length > 1 ? fnAdmWidth / (fnAdmPoints.length - 1) : fnAdmWidth;
        return fnAdmPoints.map(function (fnAdmPoint, fnAdmIndex) {
            const fnAdmX = fnAdmIndex * fnAdmStep;
            const fnAdmY = fnAdmPoint;
            return (fnAdmIndex === 0 ? 'M' : 'L') + fnAdmX + ',' + fnAdmY;
        }).join(' ');
    };
    /*--- Create Fill Path ---*/
    const fnAdmCreateFillPath = function (fnAdmPoints) {
        const fnAdmLine = fnAdmCreateChartPath(fnAdmPoints);
        const fnAdmStep = fnAdmPoints.length > 1 ? 900 / (fnAdmPoints.length - 1) : 900;
        const fnAdmLastX = (fnAdmPoints.length - 1) * fnAdmStep;
        return fnAdmLine + ' L' + fnAdmLastX + ',300 L0,300 Z';
    };
    /*--- Update Chart ---*/
    const fnAdmUpdateChart = function (fnAdmPeriod) {
        const fnAdmData = fnAdmAnalyticsData[fnAdmPeriod];
        if (!fnAdmData) return;
        const fnAdmLine = fnAdmCreateChartPath(fnAdmData.points);
        if (fnAdmChartLine) fnAdmChartLine.setAttribute('d', fnAdmLine);
        if (fnAdmChartFill) fnAdmChartFill.setAttribute('d', fnAdmCreateFillPath(fnAdmData.points));
        if (fnAdmChartDot) {
            const fnAdmStep = fnAdmData.points.length > 1 ? 900 / (fnAdmData.points.length - 1) : 900;
            fnAdmChartDot.setAttribute('cx', (fnAdmData.points.length - 1) * fnAdmStep);
            fnAdmChartDot.setAttribute('cy', fnAdmData.points[fnAdmData.points.length - 1]);
        }
        if (fnAdmChartX) {
            fnAdmChartX.innerHTML = '';
            fnAdmData.chart.forEach(function (fnAdmLabel) {
                const fnAdmSpan = document.createElement('span');
                fnAdmSpan.textContent = fnAdmLabel;
                fnAdmChartX.appendChild(fnAdmSpan);
            });
        }
    };
    /*--- Update Metrics ---*/
    const fnAdmUpdateMetrics = function (fnAdmPeriod) {
        const fnAdmData = fnAdmAnalyticsData[fnAdmPeriod];
        if (!fnAdmData) return;
        if (fnAdmGrowth) fnAdmGrowth.textContent = fnAdmData.growth;
        if (fnAdmGrowthChange) fnAdmGrowthChange.textContent = fnAdmData.growthChange;
        if (fnAdmValue) fnAdmValue.textContent = fnAdmData.value;
        if (fnAdmValueChange) fnAdmValueChange.textContent = fnAdmData.valueChange;
        if (fnAdmReturn) fnAdmReturn.textContent = fnAdmData.average;
        if (fnAdmReturnChange) fnAdmReturnChange.textContent = fnAdmData.averageChange;
        if (fnAdmClients) fnAdmClients.textContent = fnAdmData.clients;
        if (fnAdmClientChange) fnAdmClientChange.textContent = fnAdmData.clientChange;
        if (fnAdmPeriodLabel) fnAdmPeriodLabel.textContent = fnAdmData.label;
        if (fnAdmChartValue) fnAdmChartValue.textContent = fnAdmData.growth;
        if (fnAdmChartStatus) fnAdmChartStatus.textContent = fnAdmData.status;
        fnAdmUpdateChart(fnAdmPeriod);
    };
    /*--- Period Filter ---*/
    fnAdmAnalyticsPeriod.forEach(function (fnAdmButton) {
        fnAdmButton.addEventListener('click', function () {
            fnAdmAnalyticsPeriod.forEach(function (fnAdmItem) { fnAdmItem.classList.remove('active'); });
            fnAdmButton.classList.add('active');
            fnAdmUpdateMetrics(fnAdmButton.dataset.period);
        });
    });
    /*--- Allocation Data ---*/
    const fnAdmAllocationData = {
        equity: { equity: 100, debt: 0, cash: 0, other: 0 },
        debt: { equity: 0, debt: 100, cash: 0, other: 0 },
        cash: { equity: 0, debt: 0, cash: 100, other: 0 },
        other: { equity: 0, debt: 0, cash: 0, other: 100 }
    };
    /*--- Update Allocation ---*/
    const fnAdmUpdateAllocation = function () {
        const fnAdmSelected = fnAdmAnalyticsAsset ? fnAdmAnalyticsAsset.value : 'all';
        const fnAdmDonut = document.getElementById('fn-adm-analytics-donut');
        const fnAdmLegend = document.querySelectorAll('#fn-adm-analytics-allocation-legend>div');
        if (!fnAdmDonut) return;
        if (fnAdmSelected === 'all') {
            fnAdmDonut.style.background = 'conic-gradient(#16c784 0deg 151deg,#2563eb 151deg 252deg,#8b5cf6 252deg 317deg,#d8e1e6 317deg 360deg)';
            fnAdmLegend.forEach(function (fnAdmItem) { fnAdmItem.style.display = 'flex'; });
        } else {
            const fnAdmColors = { equity: '#16c784', debt: '#2563eb', cash: '#8b5cf6', other: '#d8e1e6' };
            fnAdmDonut.style.background = 'conic-gradient(' + fnAdmColors[fnAdmSelected] + ' 0deg 360deg)';
            fnAdmLegend.forEach(function (fnAdmItem) {
                fnAdmItem.style.display = fnAdmItem.dataset.asset === fnAdmSelected ? 'flex' : 'none';
            });
        }
    };
    /*--- Table Filtering ---*/
    const fnAdmFilterTable = function () {
        const fnAdmAsset = fnAdmAnalyticsAsset ? fnAdmAnalyticsAsset.value : 'all';
        const fnAdmMarket = fnAdmAnalyticsMarket ? fnAdmAnalyticsMarket.value : 'all';
        const fnAdmSearch = fnAdmAnalyticsSearch ? fnAdmAnalyticsSearch.value.trim().toLowerCase() : '';
        let fnAdmVisible = 0;
        fnAdmAnalyticsRows.forEach(function (fnAdmRow) {
            const fnAdmRowAsset = fnAdmRow.dataset.asset;
            const fnAdmRowMarket = fnAdmRow.dataset.market;
            const fnAdmText = fnAdmRow.textContent.toLowerCase();
            const fnAdmAssetMatch = fnAdmAsset === 'all' || fnAdmRowAsset === fnAdmAsset;
            const fnAdmMarketMatch = fnAdmMarket === 'all' || fnAdmRowMarket === fnAdmMarket;
            const fnAdmSearchMatch = !fnAdmSearch || fnAdmText.includes(fnAdmSearch);
            const fnAdmShow = fnAdmAssetMatch && fnAdmMarketMatch && fnAdmSearchMatch;
            fnAdmRow.style.display = fnAdmShow ? '' : 'none';
            if (fnAdmShow) fnAdmVisible++;
        });
        if (fnAdmAnalyticsEmpty) fnAdmAnalyticsEmpty.classList.toggle('show', fnAdmVisible === 0);
    };
    /*--- Asset Filter ---*/
    if (fnAdmAnalyticsAsset) {
        fnAdmAnalyticsAsset.addEventListener('change', function () {
            fnAdmUpdateAllocation();
            fnAdmFilterTable();
        });
    }
    /*--- Market Filter ---*/
    if (fnAdmAnalyticsMarket) {
        fnAdmAnalyticsMarket.addEventListener('change', fnAdmFilterTable);
    }
    /*--- Search ---*/
    if (fnAdmAnalyticsSearch) {
        fnAdmAnalyticsSearch.addEventListener('input', fnAdmFilterTable);
    }
    /*--- Reset Filters ---*/
    if (fnAdmAnalyticsReset) {
        fnAdmAnalyticsReset.addEventListener('click', function () {
            fnAdmAnalyticsAsset.value = 'all';
            fnAdmAnalyticsMarket.value = 'all';
            fnAdmAnalyticsSearch.value = '';
            fnAdmAnalyticsPeriod.forEach(function (fnAdmItem) { fnAdmItem.classList.remove('active'); });
            const fnAdmDefaultPeriod = document.querySelector('#fn-adm-analytics-period button[data-period="7D"]');
            if (fnAdmDefaultPeriod) fnAdmDefaultPeriod.classList.add('active');
            fnAdmUpdateAllocation();
            fnAdmFilterTable();
            fnAdmUpdateMetrics('7D');
        });
    }
    /*--- Export Report ---*/
    if (fnAdmAnalyticsExport) {
        fnAdmAnalyticsExport.addEventListener('click', function () {
            const fnAdmReportData = [
                ['Finance Analytics Report', ''],
                ['Generated', new Date().toLocaleString('en-IN')],
                ['Period', document.querySelector('#fn-adm-analytics-period button.active')?.dataset.period || '7D'],
                ['Portfolio Growth', fnAdmGrowth?.textContent || ''],
                ['Managed Value', fnAdmValue?.textContent || ''],
                ['Average Return', fnAdmReturn?.textContent || ''],
                ['Active Clients', fnAdmClients?.textContent || '']
            ];
            const fnAdmCsv = fnAdmReportData.map(function (fnAdmRow) {
                return fnAdmRow.map(function (fnAdmCell) { return '"' + String(fnAdmCell).replace(/"/g, '""') + '"'; }).join(',');
            }).join('\n');
            const fnAdmBlob = new Blob([fnAdmCsv], { type: 'text/csv;charset=utf-8;' });
            const fnAdmUrl = URL.createObjectURL(fnAdmBlob);
            const fnAdmLink = document.createElement('a');
            fnAdmLink.href = fnAdmUrl;
            fnAdmLink.download = 'finance-analytics-report.csv';
            document.body.appendChild(fnAdmLink);
            fnAdmLink.click();
            document.body.removeChild(fnAdmLink);
            URL.revokeObjectURL(fnAdmUrl);
        });
        /*--- Initial Analytics ---*/
        fnAdmUpdateMetrics('7D');
        fnAdmUpdateAllocation();
        fnAdmFilterTable();
    }
});