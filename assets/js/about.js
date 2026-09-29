/*--- About Finance / Our Story Section Start ---*/
document.addEventListener('DOMContentLoaded', function () {
    /*--- Story Interactive Visual ---*/
    const fnAbtStory = document.getElementById('fn-abt-story');
    const fnAbtStoryVisual = fnAbtStory ? fnAbtStory.querySelector('.fn-abt-story-visual') : null;
    const fnAbtStoryNodes = fnAbtStory ? fnAbtStory.querySelectorAll('.fn-abt-story-node') : null;
    if (!fnAbtStory || !fnAbtStoryVisual || !fnAbtStoryNodes) return;
    /*--- Story Node Interaction ---*/
    fnAbtStoryNodes.forEach(function (fnAbtStoryNode) {
        fnAbtStoryNode.addEventListener('mouseenter', function () {
            fnAbtStoryNodes.forEach(function (fnAbtStoryItem) { fnAbtStoryItem.classList.remove('active'); });
            fnAbtStoryNode.classList.add('active');
        });
    });
    /*--- Story Visual Parallax ---*/
    if (window.matchMedia('(pointer:fine)').matches) {
        fnAbtStoryVisual.addEventListener('mousemove', function (fnAbtStoryEvent) {
            const fnAbtStoryRect = fnAbtStoryVisual.getBoundingClientRect();
            const fnAbtStoryX = (fnAbtStoryEvent.clientX - fnAbtStoryRect.left) / fnAbtStoryRect.width - .5;
            const fnAbtStoryY = (fnAbtStoryEvent.clientY - fnAbtStoryRect.top) / fnAbtStoryRect.height - .5;
            fnAbtStoryVisual.style.setProperty('--fn-abt-story-mx', (fnAbtStoryX * 12).toFixed(2) + 'px');
            fnAbtStoryVisual.style.setProperty('--fn-abt-story-my', (fnAbtStoryY * 12).toFixed(2) + 'px');
        });
        fnAbtStoryVisual.addEventListener('mouseleave', function () {
            fnAbtStoryVisual.style.setProperty('--fn-abt-story-mx', '0px');
            fnAbtStoryVisual.style.setProperty('--fn-abt-story-my', '0px');
        });
    }
});
/*--- About Finance / Our Story Section End ---*/

/*--- Mission & Vision Section Start ---*/
document.addEventListener('DOMContentLoaded', function () {
    /*--- Mission Vision Cards ---*/
    const fnAbtMissionCards = document.querySelectorAll('.fn-abt-mission-card');
    if (!fnAbtMissionCards.length) return;
    fnAbtMissionCards.forEach(function (fnAbtMissionCard) {
        fnAbtMissionCard.addEventListener('mouseenter', function () {
            fnAbtMissionCards.forEach(function (fnAbtMissionItem) { fnAbtMissionItem.classList.remove('active'); });
            fnAbtMissionCard.classList.add('active');
        });
        fnAbtMissionCard.addEventListener('mouseleave', function () {
            fnAbtMissionCard.classList.remove('active');
        });
    });
    /*--- Mission Vision Pointer Effect ---*/
    const fnAbtMissionSection = document.getElementById('fn-abt-mission');
    if (fnAbtMissionSection && window.matchMedia('(pointer:fine)').matches) {
        fnAbtMissionSection.addEventListener('mousemove', function (fnAbtMissionEvent) {
            const fnAbtMissionRect = fnAbtMissionSection.getBoundingClientRect();
            const fnAbtMissionX = (fnAbtMissionEvent.clientX - fnAbtMissionRect.left) / fnAbtMissionRect.width - .5;
            const fnAbtMissionY = (fnAbtMissionEvent.clientY - fnAbtMissionRect.top) / fnAbtMissionRect.height - .5;
            fnAbtMissionSection.style.setProperty('--fn-abt-mission-x', (fnAbtMissionX * 14).toFixed(2) + 'px');
            fnAbtMissionSection.style.setProperty('--fn-abt-mission-y', (fnAbtMissionY * 14).toFixed(2) + 'px');
        });
    }
    const ssIndBlogReadButtons = document.querySelectorAll(".fn-abt-mission-statement-arrow");
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
/*--- Mission & Vision Section End ---*/

/*--- What We Help You Achieve Section Start ---*/
document.addEventListener('DOMContentLoaded', function () {
    /*--- Help Data ---*/
    const fnAbtHelpData = {
        growth: { category: 'Financial Growth', icon: 'bi-graph-up-arrow', title: 'Build toward meaningful financial growth.', text: 'Understand opportunities, track progress, and create a clearer path toward your long-term financial goals.', focus: 'Long-Term Growth', approach: 'Data + Planning' },
        planning: { category: 'Financial Planning', icon: 'bi-calendar2-check', title: 'Turn financial goals into practical plans.', text: 'Bring your priorities together and create a structured approach for managing the financial decisions ahead.', focus: 'Goal Planning', approach: 'Structure + Clarity' },
        insights: { category: 'Market Intelligence', icon: 'bi-bar-chart-line', title: 'Understand the market with greater clarity.', text: 'Explore financial information and market signals in a way that helps you see trends, opportunities, and changing conditions.', focus: 'Market Awareness', approach: 'Data + Insights' },
        risk: { category: 'Risk Awareness', icon: 'bi-shield-check', title: 'Make decisions with greater risk awareness.', text: 'Understand potential uncertainties and consider different financial scenarios before moving forward with important decisions.', focus: 'Risk Awareness', approach: 'Analysis + Planning' },
        business: { category: 'Business Finance', icon: 'bi-buildings', title: 'Create stronger financial foundations for business.', text: 'Support business decisions with clearer financial thinking, better planning, and a stronger understanding of financial priorities.', focus: 'Business Growth', approach: 'Strategy + Finance' },
        confidence: { category: 'Financial Confidence', icon: 'bi-compass', title: 'Move forward with a clearer financial direction.', text: 'Connect information, planning, and action so your next financial decision can be made with greater understanding.', focus: 'Better Decisions', approach: 'Clarity + Action' }
    };
    /*--- Help Elements ---*/
    const fnAbtHelpItems = document.querySelectorAll('.fn-abt-help-nav-item');
    const fnAbtHelpCategory = document.getElementById('fn-abt-help-category');
    const fnAbtHelpIndex = document.getElementById('fn-abt-help-index');
    const fnAbtHelpIcon = document.getElementById('fn-abt-help-icon');
    const fnAbtHelpTitle = document.getElementById('fn-abt-help-title');
    const fnAbtHelpText = document.getElementById('fn-abt-help-text');
    const fnAbtHelpFocus = document.getElementById('fn-abt-help-focus');
    const fnAbtHelpApproach = document.getElementById('fn-abt-help-approach');
    if (!fnAbtHelpItems.length) return;
    /*--- Help Content Switcher ---*/
    fnAbtHelpItems.forEach(function (fnAbtHelpItem, fnAbtHelpItemIndex) {
        fnAbtHelpItem.addEventListener('click', function () {
            const fnAbtHelpKey = fnAbtHelpItem.getAttribute('data-help');
            const fnAbtHelpDataItem = fnAbtHelpData[fnAbtHelpKey];
            if (!fnAbtHelpDataItem) return;
            fnAbtHelpItems.forEach(function (fnAbtHelpNav) { fnAbtHelpNav.classList.remove('active'); });
            fnAbtHelpItem.classList.add('active');
            fnAbtHelpCategory.textContent = fnAbtHelpDataItem.category;
            fnAbtHelpIndex.textContent = String(fnAbtHelpItemIndex + 1).padStart(2, '0') + ' / 06';
            fnAbtHelpIcon.innerHTML = '<i class="bi ' + fnAbtHelpDataItem.icon + '"></i>';
            fnAbtHelpTitle.textContent = fnAbtHelpDataItem.title;
            fnAbtHelpText.textContent = fnAbtHelpDataItem.text;
            fnAbtHelpFocus.textContent = fnAbtHelpDataItem.focus;
            fnAbtHelpApproach.textContent = fnAbtHelpDataItem.approach;
        });
    });
    /*--- Help Showcase Parallax ---*/
    const fnAbtHelpShowcase = document.querySelector('.fn-abt-help-showcase');
    if (fnAbtHelpShowcase && window.matchMedia('(pointer:fine)').matches) {
        fnAbtHelpShowcase.addEventListener('mousemove', function (fnAbtHelpEvent) {
            const fnAbtHelpRect = fnAbtHelpShowcase.getBoundingClientRect();
            const fnAbtHelpX = (fnAbtHelpEvent.clientX - fnAbtHelpRect.left) / fnAbtHelpRect.width - .5;
            const fnAbtHelpY = (fnAbtHelpEvent.clientY - fnAbtHelpRect.top) / fnAbtHelpRect.height - .5;
            fnAbtHelpShowcase.style.setProperty('--fn-abt-help-mx', (fnAbtHelpX * 8).toFixed(2) + 'px');
            fnAbtHelpShowcase.style.setProperty('--fn-abt-help-my', (fnAbtHelpY * 8).toFixed(2) + 'px');
        });
        fnAbtHelpShowcase.addEventListener('mouseleave', function () {
            fnAbtHelpShowcase.style.setProperty('--fn-abt-help-mx', '0px');
            fnAbtHelpShowcase.style.setProperty('--fn-abt-help-my', '0px');
        });
    }
});
/*--- What We Help You Achieve Section End ---*/

/*--- Who We Serve Section Start ---*/
document.addEventListener('DOMContentLoaded',function(){
/*--- Serve Cards Interaction ---*/
const fnAbtServeCards=document.querySelectorAll('.fn-abt-serve-card');
if(!fnAbtServeCards.length)return;
fnAbtServeCards.forEach(function(fnAbtServeCard){
fnAbtServeCard.addEventListener('mouseenter',function(){
fnAbtServeCards.forEach(function(fnAbtServeItem){fnAbtServeItem.classList.remove('active');});
fnAbtServeCard.classList.add('active');
});
fnAbtServeCard.addEventListener('mouseleave',function(){
fnAbtServeCard.classList.remove('active');
});
});
/*--- Serve Ecosystem Parallax ---*/
const fnAbtServeEcosystem=document.querySelector('.fn-abt-serve-ecosystem');
if(fnAbtServeEcosystem&&window.matchMedia('(pointer:fine)').matches){
fnAbtServeEcosystem.addEventListener('mousemove',function(fnAbtServeEvent){
const fnAbtServeRect=fnAbtServeEcosystem.getBoundingClientRect();
const fnAbtServeX=(fnAbtServeEvent.clientX-fnAbtServeRect.left)/fnAbtServeRect.width-.5;
const fnAbtServeY=(fnAbtServeEvent.clientY-fnAbtServeRect.top)/fnAbtServeRect.height-.5;
fnAbtServeEcosystem.style.setProperty('--fn-abt-serve-x',(fnAbtServeX*8).toFixed(2)+'px');
fnAbtServeEcosystem.style.setProperty('--fn-abt-serve-y',(fnAbtServeY*8).toFixed(2)+'px');
});
fnAbtServeEcosystem.addEventListener('mouseleave',function(){
fnAbtServeEcosystem.style.setProperty('--fn-abt-serve-x','0px');
fnAbtServeEcosystem.style.setProperty('--fn-abt-serve-y','0px');
});
}
});
/*--- Who We Serve Section End ---*/

/*--- Security & Trust Section Start ---*/
document.addEventListener('DOMContentLoaded',function(){
/*--- Trust Card Interaction ---*/
const fnAbtTrustCards=document.querySelectorAll('.fn-abt-trust-card');
if(!fnAbtTrustCards.length)return;
fnAbtTrustCards.forEach(function(fnAbtTrustCard){
fnAbtTrustCard.addEventListener('mouseenter',function(){
fnAbtTrustCards.forEach(function(fnAbtTrustItem){fnAbtTrustItem.classList.remove('active');});
fnAbtTrustCard.classList.add('active');
});
fnAbtTrustCard.addEventListener('mouseleave',function(){
fnAbtTrustCard.classList.remove('active');
});
});
/*--- Trust Center Parallax ---*/
const fnAbtTrustCenter=document.querySelector('.fn-abt-trust-center');
const fnAbtTrustArchitecture=document.querySelector('.fn-abt-trust-architecture');
if(fnAbtTrustCenter&&fnAbtTrustArchitecture&&window.matchMedia('(pointer:fine)').matches){
fnAbtTrustArchitecture.addEventListener('mousemove',function(fnAbtTrustEvent){
const fnAbtTrustRect=fnAbtTrustArchitecture.getBoundingClientRect();
const fnAbtTrustX=(fnAbtTrustEvent.clientX-fnAbtTrustRect.left)/fnAbtTrustRect.width-.5;
const fnAbtTrustY=(fnAbtTrustEvent.clientY-fnAbtTrustRect.top)/fnAbtTrustRect.height-.5;
fnAbtTrustCenter.style.setProperty('--fn-abt-trust-x',(fnAbtTrustX*7).toFixed(2)+'px');
fnAbtTrustCenter.style.setProperty('--fn-abt-trust-y',(fnAbtTrustY*7).toFixed(2)+'px');
});
fnAbtTrustArchitecture.addEventListener('mouseleave',function(){
fnAbtTrustCenter.style.setProperty('--fn-abt-trust-x','0px');
fnAbtTrustCenter.style.setProperty('--fn-abt-trust-y','0px');
});
}
});
const ssIndBlogReadButtons = document.querySelectorAll(".fn-abt-trust-card-footer");
    if (ssIndBlogReadButtons.length) {
        ssIndBlogReadButtons.forEach(function (ssButton) {
            ssButton.addEventListener("click", function (ssEvent) {
                ssEvent.preventDefault();
                ssEvent.stopPropagation();
                window.location.href = "404.html";
            });
        });
    }
/*--- Security & Trust Section End ---*/
