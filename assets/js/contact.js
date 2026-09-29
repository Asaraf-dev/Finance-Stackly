/*--- Contact Information + Main Contact Form Section Start ---*/
document.addEventListener('DOMContentLoaded', function () {
    const fnCntContactForm = document.getElementById('fn-cnt-contact-form');
    const fnCntContactName = document.getElementById('fn-cnt-contact-name');
    const fnCntContactPhone = document.getElementById('fn-cnt-contact-phone');
    const fnCntContactPopup = document.getElementById('fn-cnt-contact-popup');
    const fnCntContactPopupClose = document.getElementById('fn-cnt-contact-popup-close');
    const fnCntContactPopupButton = document.getElementById('fn-cnt-contact-popup-button');
    const fnCntContactPopupOverlay = document.querySelector('.fn-cnt-contact-popup-overlay');
    if (!fnCntContactForm) return;
    /*--- Name Validation ---*/
    if (fnCntContactName) {
        fnCntContactName.addEventListener('input', function () {
            this.value = this.value.replace(/[^A-Za-z ]/g, '');
        });
    }
    /*--- Phone Validation ---*/
    if (fnCntContactPhone) {
        fnCntContactPhone.addEventListener('input', function () {
            this.value = this.value.replace(/\D/g, '').slice(0, 10);
        });
    }
    /*--- Open Confirmation Popup ---*/
    const fnCntContactOpenPopup = function () {
        if (!fnCntContactPopup) return;
        fnCntContactPopup.classList.add('active');
        fnCntContactPopup.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    };
    /*--- Close Confirmation Popup ---*/
    const fnCntContactClosePopup = function () {
        if (!fnCntContactPopup) return;
        fnCntContactPopup.classList.remove('active');
        fnCntContactPopup.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    };
    /*--- Contact Form Submit ---*/
    fnCntContactForm.addEventListener('submit', function (fnCntContactEvent) {
        fnCntContactEvent.preventDefault();
        if (!fnCntContactForm.checkValidity()) {
            fnCntContactForm.reportValidity();
            return;
        }
        fnCntContactOpenPopup();
        fnCntContactForm.reset();
    });
    /*--- Popup Close ---*/
    if (fnCntContactPopupClose) {
        fnCntContactPopupClose.addEventListener('click', fnCntContactClosePopup);
    }
    if (fnCntContactPopupButton) {
        fnCntContactPopupButton.addEventListener('click', fnCntContactClosePopup);
    }
    if (fnCntContactPopupOverlay) {
        fnCntContactPopupOverlay.addEventListener('click', fnCntContactClosePopup);
    }
    /*--- Popup Escape ---*/
    document.addEventListener('keydown', function (fnCntContactEvent) {
        if (fnCntContactEvent.key === 'Escape' && fnCntContactPopup && fnCntContactPopup.classList.contains('active')) { fnCntContactClosePopup(); }
    });
});
/*--- Contact Information + Main Contact Form Section End ---*/

/*--- FAQ Section Start ---*/
const fnCntFaqItems = document.querySelectorAll('.fn-cnt-faq-item');
fnCntFaqItems.forEach(function (fnCntFaqItem) {
    const fnCntFaqButton = fnCntFaqItem.querySelector('.fn-cnt-faq-question');
    if (!fnCntFaqButton) return;
    fnCntFaqButton.addEventListener('click', function () {
        const fnCntFaqIsActive = fnCntFaqItem.classList.contains('active');
        fnCntFaqItems.forEach(function (fnCntFaqCurrentItem) {
            fnCntFaqCurrentItem.classList.remove('active');
            const fnCntFaqCurrentButton = fnCntFaqCurrentItem.querySelector('.fn-cnt-faq-question');
            if (fnCntFaqCurrentButton) { fnCntFaqCurrentButton.setAttribute('aria-expanded', 'false'); }
        });
        if (!fnCntFaqIsActive) {
            fnCntFaqItem.classList.add('active');
            fnCntFaqButton.setAttribute('aria-expanded', 'true');
        }
    });
});
/*--- FAQ Section End ---*/
