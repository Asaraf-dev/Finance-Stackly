/*--- About CTA ---*/
document.addEventListener('DOMContentLoaded', function () {
    /*--- CTA Visual Interaction ---*/
    const fnAbtCtaVisual = document.querySelector('.fn-abt-cta-visual');
    const fnAbtCtaCenter = document.querySelector('.fn-abt-cta-center');
    const fnAbtCtaCards = document.querySelectorAll('.fn-abt-cta-card');
    if (!fnAbtCtaVisual) return;
    /*--- CTA Floating Card Interaction ---*/
    fnAbtCtaCards.forEach(function (fnAbtCtaCard) {
        fnAbtCtaCard.addEventListener('mouseenter', function () {
            fnAbtCtaCards.forEach(function (fnAbtCtaItem) { fnAbtCtaItem.classList.remove('active'); });
            fnAbtCtaCard.classList.add('active');
        });
        fnAbtCtaCard.addEventListener('mouseleave', function () {
            fnAbtCtaCard.classList.remove('active');
        });
    });
    /*--- CTA Visual Parallax ---*/
    if (fnAbtCtaCenter && window.matchMedia('(pointer:fine)').matches) {
        fnAbtCtaVisual.addEventListener('mousemove', function (fnAbtCtaEvent) {
            const fnAbtCtaRect = fnAbtCtaVisual.getBoundingClientRect();
            const fnAbtCtaX = (fnAbtCtaEvent.clientX - fnAbtCtaRect.left) / fnAbtCtaRect.width - .5;
            const fnAbtCtaY = (fnAbtCtaEvent.clientY - fnAbtCtaRect.top) / fnAbtCtaRect.height - .5;
            fnAbtCtaCenter.style.setProperty('--fn-abt-cta-x', (fnAbtCtaX * 8).toFixed(2) + 'px');
            fnAbtCtaCenter.style.setProperty('--fn-abt-cta-y', (fnAbtCtaY * 8).toFixed(2) + 'px');
        });
        fnAbtCtaVisual.addEventListener('mouseleave', function () {
            fnAbtCtaCenter.style.setProperty('--fn-abt-cta-x', '0px');
            fnAbtCtaCenter.style.setProperty('--fn-abt-cta-y', '0px');
        });
    }
});