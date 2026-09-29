/*--- Index Hero Section Start ---*/
document.addEventListener('DOMContentLoaded', function () {
    /*--- Hero Elements ---*/
    const fnIndHeroVisual = document.getElementById('fn-ind-hero-visual');
    const fnIndHeroImage = document.querySelector('.fn-ind-hero-image-wrap');
    if (!fnIndHeroVisual || !fnIndHeroImage) return;
    /*--- Hero Mouse Interaction ---*/
    fnIndHeroVisual.addEventListener('mousemove', function (fnIndHeroEvent) {
        if (window.innerWidth <= 991) return;
        const fnIndHeroRect = fnIndHeroVisual.getBoundingClientRect();
        const fnIndHeroX = (fnIndHeroEvent.clientX - fnIndHeroRect.left) / fnIndHeroRect.width - .5;
        const fnIndHeroY = (fnIndHeroEvent.clientY - fnIndHeroRect.top) / fnIndHeroRect.height - .5;
        fnIndHeroVisual.classList.add('is-moving');
        fnIndHeroImage.style.transform = 'rotateY(' + (-7 + fnIndHeroX * 8) + 'deg) rotateX(' + (3 - fnIndHeroY * 6) + 'deg) translate3d(' + (fnIndHeroX * 5) + 'px,' + (fnIndHeroY * 5) + 'px,0)';
    });
    /*--- Hero Mouse Reset ---*/
    fnIndHeroVisual.addEventListener('mouseleave', function () {
        fnIndHeroVisual.classList.remove('is-moving');
        fnIndHeroImage.style.transform = 'rotateY(-7deg) rotateX(3deg)';
    });
});
/*--- Index Hero Section End ---*/

/*--- Live Market Snapshot Section Start ---*/
document.addEventListener('DOMContentLoaded', function () {
    const fnIndMarket = document.getElementById('fn-ind-market');
    if (!fnIndMarket) return;
    const fnIndMarketValues = {
        nasdaq: 18421.30,
        sp: 5842.11,
        gold: 2684.20,
        btc: 67420
    };
    /*--- Market Value Updates ---*/
    const fnIndMarketUpdate = function () {
        Object.keys(fnIndMarketValues).forEach(function (fnIndMarketKey) {
            const fnIndMarketValue = document.querySelector('[data-value="' + fnIndMarketKey + '"]');
            if (!fnIndMarketValue) return;
            const fnIndMarketChange = (Math.random() - .45) * 8;
            fnIndMarketValues[fnIndMarketKey] += fnIndMarketChange;
            let fnIndMarketFormatted = '';
            if (fnIndMarketKey === 'nasdaq' || fnIndMarketKey === 'sp') { fnIndMarketFormatted = fnIndMarketValues[fnIndMarketKey].toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }
            if (fnIndMarketKey === 'gold') { fnIndMarketFormatted = '$' + fnIndMarketValues[fnIndMarketKey].toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }
            if (fnIndMarketKey === 'btc') { fnIndMarketFormatted = '$' + Math.round(fnIndMarketValues[fnIndMarketKey]).toLocaleString('en-US'); }
            fnIndMarketValue.textContent = fnIndMarketFormatted;
        });
    };
    /*--- Market Card Hover ---*/
    const fnIndMarketCards = document.querySelectorAll('.fn-ind-market-card');
    fnIndMarketCards.forEach(function (fnIndMarketCard) {
        fnIndMarketCard.addEventListener('mouseenter', function () {
            fnIndMarketCards.forEach(function (fnIndMarketItem) { fnIndMarketItem.classList.remove('is-active'); });
            fnIndMarketCard.classList.add('is-active');
        });
    });
    /*--- Market Update Timer ---*/
    setInterval(fnIndMarketUpdate, 4000);

    const ssIndBlogReadButtons = document.querySelectorAll(".fn-ind-market-arrow");
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
/*--- Live Market Snapshot Section End ---*/

/*--- Financial Solutions Section Start ---*/
document.addEventListener('DOMContentLoaded', function () {
    const fnIndSolutions = document.getElementById('fn-ind-solutions');
    if (!fnIndSolutions) return;
    /*--- Solution Card Interaction ---*/
    const fnIndSolutionCards = fnIndSolutions.querySelectorAll('.fn-ind-solutions-card');
    fnIndSolutionCards.forEach(function (fnIndSolutionCard) {
        fnIndSolutionCard.addEventListener('mouseenter', function () {
            fnIndSolutionCards.forEach(function (fnIndSolutionItem) { fnIndSolutionItem.classList.remove('is-active'); });
            fnIndSolutionCard.classList.add('is-active');
        });
        fnIndSolutionCard.addEventListener('mouseleave', function () {
            fnIndSolutionCard.classList.remove('is-active');
        });
    });
    /*--- Featured Solution Interaction ---*/
    const fnIndFeatured = fnIndSolutions.querySelector('.fn-ind-solutions-featured');
    if (fnIndFeatured) {
        fnIndFeatured.addEventListener('mousemove', function (fnIndSolutionEvent) {
            if (window.innerWidth <= 767) return;
            const fnIndSolutionRect = fnIndFeatured.getBoundingClientRect();
            const fnIndSolutionX = (fnIndSolutionEvent.clientX - fnIndSolutionRect.left) / fnIndSolutionRect.width - .5;
            const fnIndSolutionY = (fnIndSolutionEvent.clientY - fnIndSolutionRect.top) / fnIndSolutionRect.height - .5;
            fnIndFeatured.style.transform = 'perspective(900px) rotateY(' + (fnIndSolutionX * 2) + 'deg) rotateX(' + (-fnIndSolutionY * 2) + 'deg)';
        });
        fnIndFeatured.addEventListener('mouseleave', function () {
            fnIndFeatured.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg)';
        });
    }
    const ssIndBlogReadButtons = document.querySelectorAll(".fn-ind-solutions-card-arrow");
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
/*--- Financial Solutions Section End ---*/

/*--- Interactive Wealth Growth Section Start ---*/
document.addEventListener('DOMContentLoaded', function () {
    const fnIndGrowth = document.getElementById('fn-ind-growth');
    if (!fnIndGrowth) return;
    /*--- Growth Inputs ---*/
    const fnIndGrowthInitial = document.getElementById('fn-ind-growth-initial');
    const fnIndGrowthMonthly = document.getElementById('fn-ind-growth-monthly');
    const fnIndGrowthYears = document.getElementById('fn-ind-growth-years');
    const fnIndGrowthReturn = document.getElementById('fn-ind-growth-return');
    const fnIndGrowthInitialValue = document.getElementById('fn-ind-growth-initial-value');
    const fnIndGrowthMonthlyValue = document.getElementById('fn-ind-growth-monthly-value');
    const fnIndGrowthYearsValue = document.getElementById('fn-ind-growth-years-value');
    const fnIndGrowthReturnValue = document.getElementById('fn-ind-growth-return-value');
    const fnIndGrowthFutureValue = document.getElementById('fn-ind-growth-future-value');
    const fnIndGrowthGrowthPercent = document.getElementById('fn-ind-growth-growth-percent');
    const fnIndGrowthContributions = document.getElementById('fn-ind-growth-contributions');
    const fnIndGrowthProfit = document.getElementById('fn-ind-growth-profit');
    const fnIndGrowthSummaryYears = document.getElementById('fn-ind-growth-summary-years');
    const fnIndGrowthArea = document.getElementById('fn-ind-growth-area');
    const fnIndGrowthLine = document.getElementById('fn-ind-growth-line');
    const fnIndGrowthPoint = document.getElementById('fn-ind-growth-point');
    const fnIndGrowthChartStart = document.getElementById('fn-ind-growth-chart-start');
    const fnIndGrowthChartEnd = document.getElementById('fn-ind-growth-chart-end');
    const fnIndGrowthChartYears = document.getElementById('fn-ind-growth-chart-years');
    /*--- Currency Formatter ---*/
    const fnIndGrowthCurrency = function (fnIndGrowthNumber) {
        return '₹' + Math.round(fnIndGrowthNumber).toLocaleString('en-IN');
    };
    /*--- Calculate Growth ---*/
    const fnIndGrowthCalculate = function () {
        const fnIndGrowthInitialAmount = Math.max(0, Number(fnIndGrowthInitial.value));
        const fnIndGrowthMonthlyAmount = Math.max(0, Number(fnIndGrowthMonthly.value));
        const fnIndGrowthPeriod = Math.max(1, Number(fnIndGrowthYears.value));
        const fnIndGrowthAnnualReturn = Math.max(0, Number(fnIndGrowthReturn.value)) / 100;
        const fnIndGrowthMonthlyRate = fnIndGrowthAnnualReturn / 12;
        const fnIndGrowthTotalMonths = fnIndGrowthPeriod * 12;
        let fnIndGrowthBalance = fnIndGrowthInitialAmount;
        const fnIndGrowthPoints = [fnIndGrowthBalance];
        let fnIndGrowthTotalContributed = fnIndGrowthInitialAmount;
        for (let fnIndGrowthMonth = 1; fnIndGrowthMonth <= fnIndGrowthTotalMonths; fnIndGrowthMonth++) {
            fnIndGrowthBalance = fnIndGrowthBalance * (1 + fnIndGrowthMonthlyRate) + fnIndGrowthMonthlyAmount;
            fnIndGrowthTotalContributed += fnIndGrowthMonthlyAmount;
            if (fnIndGrowthMonth % 12 === 0) { fnIndGrowthPoints.push(fnIndGrowthBalance); }
        }
        const fnIndGrowthProfitAmount = Math.max(0, fnIndGrowthBalance - fnIndGrowthTotalContributed);
        const fnIndGrowthGrowthAmount = fnIndGrowthTotalContributed > 0 ? (fnIndGrowthProfitAmount / fnIndGrowthTotalContributed) * 100 : 0;
        fnIndGrowthInitialValue.textContent = fnIndGrowthCurrency(fnIndGrowthInitialAmount);
        fnIndGrowthMonthlyValue.textContent = fnIndGrowthCurrency(fnIndGrowthMonthlyAmount);
        fnIndGrowthYearsValue.textContent = fnIndGrowthPeriod + ' Year' + (fnIndGrowthPeriod === 1 ? '' : 's');
        fnIndGrowthReturnValue.textContent = fnIndGrowthAnnualReturn * 100 + '%';
        fnIndGrowthFutureValue.textContent = fnIndGrowthCurrency(fnIndGrowthBalance);
        fnIndGrowthGrowthPercent.textContent = '+' + fnIndGrowthGrowthAmount.toFixed(1) + '% growth';
        fnIndGrowthContributions.textContent = fnIndGrowthCurrency(fnIndGrowthTotalContributed);
        fnIndGrowthProfit.textContent = fnIndGrowthCurrency(fnIndGrowthProfitAmount);
        fnIndGrowthSummaryYears.textContent = fnIndGrowthPeriod + ' Year' + (fnIndGrowthPeriod === 1 ? '' : 's');
        fnIndGrowthChartStart.textContent = fnIndGrowthCurrency(fnIndGrowthPoints[0]);
        fnIndGrowthChartEnd.textContent = fnIndGrowthCurrency(fnIndGrowthBalance);
        fnIndGrowthRenderChart(fnIndGrowthPoints);
    };
    /*--- Growth Chart ---*/
    const fnIndGrowthRenderChart = function (fnIndGrowthPoints) {
        const fnIndGrowthWidth = 700;
        const fnIndGrowthHeight = 270;
        const fnIndGrowthPadding = 10;
        const fnIndGrowthMax = Math.max(...fnIndGrowthPoints, 1);
        const fnIndGrowthMin = 0;
        const fnIndGrowthRange = Math.max(fnIndGrowthMax - fnIndGrowthMin, 1);
        const fnIndGrowthCoords = fnIndGrowthPoints.map(function (fnIndGrowthValue, fnIndGrowthIndex) {
            const fnIndGrowthX = fnIndGrowthPadding + (fnIndGrowthIndex / Math.max(fnIndGrowthPoints.length - 1, 1)) * (fnIndGrowthWidth - fnIndGrowthPadding * 2);
            const fnIndGrowthY = fnIndGrowthHeight - fnIndGrowthPadding - ((fnIndGrowthValue - fnIndGrowthMin) / fnIndGrowthRange) * (fnIndGrowthHeight - fnIndGrowthPadding * 2);
            return { x: fnIndGrowthX, y: fnIndGrowthY };
        });
        const fnIndGrowthLinePath = fnIndGrowthCoords.map(function (fnIndGrowthPointValue, fnIndGrowthIndex) { return (fnIndGrowthIndex === 0 ? 'M' : 'L') + fnIndGrowthPointValue.x + ' ' + fnIndGrowthPointValue.y; }).join(' ');
        const fnIndGrowthAreaPath = fnIndGrowthLinePath + ' L ' + fnIndGrowthCoords[fnIndGrowthCoords.length - 1].x + ' ' + fnIndGrowthHeight + ' L ' + fnIndGrowthCoords[0].x + ' ' + fnIndGrowthHeight + ' Z';
        fnIndGrowthLine.setAttribute('d', fnIndGrowthLinePath);
        fnIndGrowthArea.setAttribute('d', fnIndGrowthAreaPath);
        const fnIndGrowthLastPoint = fnIndGrowthCoords[fnIndGrowthCoords.length - 1];
        fnIndGrowthPoint.setAttribute('cx', fnIndGrowthLastPoint.x);
        fnIndGrowthPoint.setAttribute('cy', fnIndGrowthLastPoint.y);
        fnIndGrowthChartYears.innerHTML = '';
        const fnIndGrowthPeriod = Number(fnIndGrowthYears.value);
        const fnIndGrowthLabelCount = Math.min(6, fnIndGrowthPoints.length);
        for (let fnIndGrowthIndex = 0; fnIndGrowthIndex < fnIndGrowthLabelCount; fnIndGrowthIndex++) {
            const fnIndGrowthYear = Math.round((fnIndGrowthIndex / (fnIndGrowthLabelCount - 1 || 1)) * fnIndGrowthPeriod);
            const fnIndGrowthLabel = document.createElement('span');
            fnIndGrowthLabel.textContent = fnIndGrowthYear === 0 ? 'Today' : fnIndGrowthYear + 'Y';
            fnIndGrowthChartYears.appendChild(fnIndGrowthLabel);
        }
    };
    /*--- Growth Slider Fill ---*/
    const fnIndGrowthUpdateSlider = function (fnIndGrowthInput) {
        const fnIndGrowthMin = Number(fnIndGrowthInput.min);
        const fnIndGrowthMax = Number(fnIndGrowthInput.max);
        const fnIndGrowthValue = Number(fnIndGrowthInput.value);
        const fnIndGrowthPercent = ((fnIndGrowthValue - fnIndGrowthMin) / (fnIndGrowthMax - fnIndGrowthMin)) * 100;
        fnIndGrowthInput.style.background = 'linear-gradient(90deg,var(--fn-primary) 0%,var(--fn-primary) ' + fnIndGrowthPercent + '%,rgba(255,255,255,.1) ' + fnIndGrowthPercent + '%,rgba(255,255,255,.1) 100%)';
    };
    /*--- Growth Input Events ---*/
    [fnIndGrowthInitial, fnIndGrowthMonthly, fnIndGrowthYears, fnIndGrowthReturn].forEach(function (fnIndGrowthInput) {
        fnIndGrowthInput.addEventListener('input', function () {
            fnIndGrowthUpdateSlider(fnIndGrowthInput);
            fnIndGrowthCalculate();
        });
        fnIndGrowthUpdateSlider(fnIndGrowthInput);
    });
    /*--- Growth Initialize ---*/
    fnIndGrowthCalculate();
});
/*--- Interactive Wealth Growth Section End ---*/

/*--- Why Choose Finance Section Start ---*/
document.addEventListener('DOMContentLoaded', function () {
    const fnIndWhy = document.getElementById('fn-ind-why');
    if (!fnIndWhy) return;
    /*--- Why Reason Interaction ---*/
    const fnIndWhyItems = fnIndWhy.querySelectorAll('.fn-ind-why-item');
    fnIndWhyItems.forEach(function (fnIndWhyItem) {
        fnIndWhyItem.addEventListener('click', function () {
            fnIndWhyItems.forEach(function (fnIndWhyCurrent) { fnIndWhyCurrent.classList.remove('is-active'); });
            fnIndWhyItem.classList.add('is-active');
        });
    });
    /*--- Why Visual Interaction ---*/
    const fnIndWhyVisual = fnIndWhy.querySelector('.fn-ind-why-visual');
    const fnIndWhyCore = fnIndWhy.querySelector('.fn-ind-why-core');
    if (fnIndWhyVisual && fnIndWhyCore) {
        fnIndWhyVisual.addEventListener('mousemove', function (fnIndWhyEvent) {
            if (window.innerWidth <= 991) return;
            const fnIndWhyRect = fnIndWhyVisual.getBoundingClientRect();
            const fnIndWhyX = (fnIndWhyEvent.clientX - fnIndWhyRect.left) / fnIndWhyRect.width - .5;
            const fnIndWhyY = (fnIndWhyEvent.clientY - fnIndWhyRect.top) / fnIndWhyRect.height - .5;
            fnIndWhyCore.style.transform = 'translate3d(' + (fnIndWhyX * 8) + 'px,' + (fnIndWhyY * 8) + 'px,0)';
        });
        fnIndWhyVisual.addEventListener('mouseleave', function () {
            fnIndWhyCore.style.transform = 'translate3d(0,0,0)';
        });
    }
});
/*--- Why Choose Finance Section End ---*/

/*--- Testimonials Section Start ---*/
document.addEventListener('DOMContentLoaded', function () {
    const fnIndTest = document.getElementById('fn-ind-test');
    if (!fnIndTest) return;
    const fnIndTestData = [
        { quote: '"Finance helped us turn a complicated financial picture into a much clearer plan. The insights and tools made it easier to understand where we stood and what we could work toward next."', name: 'Arjun Mehta', role: 'Business Owner', image: 'assets/images/client-1.webp', result: 'Structured' },
        { quote: '"The platform gave me a much better way to organize my financial goals and understand different possibilities."', name: 'Priya Nair', role: 'Marketing Director', image: 'assets/images/client-2.webp', result: 'Goal Focused' },
        { quote: '"Having market information and financial planning tools together made our decision-making process far more organized."', name: 'Rahul Kapoor', role: 'Technology Founder', image: 'assets/images/client-3.webp', result: 'Organized' }];
    const fnIndTestQuote = document.getElementById('fn-ind-test-quote');
    const fnIndTestName = document.getElementById('fn-ind-test-name');
    const fnIndTestRole = document.getElementById('fn-ind-test-role');
    const fnIndTestImage = document.getElementById('fn-ind-test-image');
    const fnIndTestResult = document.getElementById('fn-ind-test-result');
    const fnIndTestIndex = document.getElementById('fn-ind-test-index');
    const fnIndTestProgress = document.getElementById('fn-ind-test-progress');
    const fnIndTestCards = fnIndTest.querySelectorAll('.fn-ind-test-mini-card');
    const fnIndTestPrev = document.getElementById('fn-ind-test-prev');
    const fnIndTestNext = document.getElementById('fn-ind-test-next');
    let fnIndTestCurrent = 0;
    let fnIndTestTimer = null;
    /*--- Testimonial Render ---*/
    const fnIndTestRender = function (fnIndTestNumber) {
        const fnIndTestItem = fnIndTestData[fnIndTestNumber];
        fnIndTestQuote.textContent = fnIndTestItem.quote;
        fnIndTestName.textContent = fnIndTestItem.name;
        fnIndTestRole.textContent = fnIndTestItem.role;
        fnIndTestImage.src = fnIndTestItem.image;
        fnIndTestResult.textContent = fnIndTestItem.result;
        fnIndTestIndex.textContent = String(fnIndTestNumber + 1).padStart(2, '0') + ' / ' + String(fnIndTestData.length).padStart(2, '0');
        fnIndTestProgress.style.width = ((fnIndTestNumber + 1) / fnIndTestData.length * 100) + '%';
        fnIndTestCards.forEach(function (fnIndTestCard) { fnIndTestCard.classList.remove('is-active'); });
        const fnIndTestActiveCard = fnIndTest.querySelector('[data-testimonial="' + fnIndTestNumber + '"]');
        if (fnIndTestActiveCard) fnIndTestActiveCard.classList.add('is-active');
    };
    /*--- Testimonial Change ---*/
    const fnIndTestChange = function (fnIndTestDirection) {
        fnIndTestCurrent = (fnIndTestCurrent + fnIndTestDirection + fnIndTestData.length) % fnIndTestData.length;
        fnIndTestRender(fnIndTestCurrent);
    };
    /*--- Testimonial Card Click ---*/
    fnIndTestCards.forEach(function (fnIndTestCard) {
        fnIndTestCard.addEventListener('click', function () {
            fnIndTestCurrent = Number(fnIndTestCard.dataset.testimonial);
            fnIndTestRender(fnIndTestCurrent);
            fnIndTestStart();
        });
    });
    /*--- Testimonial Controls ---*/
    fnIndTestPrev.addEventListener('click', function () { fnIndTestChange(-1); fnIndTestStart(); });
    fnIndTestNext.addEventListener('click', function () { fnIndTestChange(1); fnIndTestStart(); });
    /*--- Testimonial Auto Play ---*/
    const fnIndTestStart = function () {
        clearInterval(fnIndTestTimer);
        fnIndTestTimer = setInterval(function () { fnIndTestChange(1); }, 6000);
    };
    /*--- Testimonial Initialize ---*/
    fnIndTestRender(0);
    fnIndTestStart();
});
/*--- Testimonials Section End ---*/

/*--- CTA Section Start ---*/
document.addEventListener('DOMContentLoaded', function () {
    const fnIndCta = document.getElementById('fn-ind-cta');
    const fnIndCtaVisual = document.getElementById('fn-ind-cta-visual');
    const fnIndCtaChart = document.querySelector('.fn-ind-cta-chart-card');
    if (!fnIndCta || !fnIndCtaVisual || !fnIndCtaChart) return;
    /*--- CTA Mouse Interaction ---*/
    fnIndCtaVisual.addEventListener('mousemove', function (fnIndCtaEvent) {
        if (window.innerWidth <= 991) return;
        const fnIndCtaRect = fnIndCtaVisual.getBoundingClientRect();
        const fnIndCtaX = (fnIndCtaEvent.clientX - fnIndCtaRect.left) / fnIndCtaRect.width - .5;
        const fnIndCtaY = (fnIndCtaEvent.clientY - fnIndCtaRect.top) / fnIndCtaRect.height - .5;
        fnIndCtaChart.style.transform = 'translate3d(' + (fnIndCtaX * 8) + 'px,' + (fnIndCtaY * 8) + 'px,0) rotateY(' + (-7 + fnIndCtaX * 6) + 'deg) rotateX(' + (3 - fnIndCtaY * 5) + 'deg)';
    });
    /*--- CTA Mouse Reset ---*/
    fnIndCtaVisual.addEventListener('mouseleave', function () {
        if (window.innerWidth <= 991) return;
        fnIndCtaChart.style.transform = 'rotateY(-7deg) rotateX(3deg)';
    });
});
/*--- CTA Section End ---*/