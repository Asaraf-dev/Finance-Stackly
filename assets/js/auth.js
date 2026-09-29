/*--- Authentication ---*/
document.addEventListener('DOMContentLoaded', function () {
    /*--- Login Elements ---*/
    const fnLoginForm = document.getElementById('fn-login-form');
    const fnLoginEmail = document.getElementById('fn-login-email');
    const fnLoginPassword = document.getElementById('fn-login-password');
    const fnLoginPasswordToggle = document.getElementById('fn-login-password-toggle');
    const fnLoginRemember = document.getElementById('fn-login-remember');
    const fnLoginForgot = document.getElementById('fn-login-forgot');
    const fnLoginRoleOptions = document.querySelectorAll('.fn-login-role-option');
    /*--- Remembered Email ---*/
    const fnLoginSavedEmail = localStorage.getItem('fnLoginEmail');
    const fnLoginRemembered = localStorage.getItem('fnLoginRemember');
    if (fnLoginSavedEmail && fnLoginRemembered === 'true' && fnLoginEmail && fnLoginRemember) {
        fnLoginEmail.value = fnLoginSavedEmail;
        fnLoginRemember.checked = true;
    }
    /*--- Role Selection ---*/
    fnLoginRoleOptions.forEach(function (fnLoginRoleOption) {
        const fnLoginRoleInput = fnLoginRoleOption.querySelector('input');
        if (!fnLoginRoleInput) return;
        fnLoginRoleInput.addEventListener('change', function () {
            fnLoginRoleOptions.forEach(function (fnLoginCurrentOption) {
                fnLoginCurrentOption.classList.remove('active');
            });
            if (this.checked) { fnLoginRoleOption.classList.add('active'); }
        });
    });
    /*--- Login Password Visibility ---*/
    if (fnLoginPasswordToggle && fnLoginPassword) {
        fnLoginPasswordToggle.addEventListener('click', function () {
            const fnLoginIsPassword = fnLoginPassword.type === 'password';
            fnLoginPassword.type = fnLoginIsPassword ? 'text' : 'password';
            this.innerHTML = fnLoginIsPassword ? '<i class="bi bi-eye-slash"></i>' : '<i class="bi bi-eye"></i>';
            this.setAttribute('aria-label', fnLoginIsPassword ? 'Hide password' : 'Show password');
        });
    }
    /*--- Login Submit ---*/
    if (fnLoginForm) {
        fnLoginForm.addEventListener('submit', function (fnLoginEvent) {
            fnLoginEvent.preventDefault();
            if (!fnLoginForm.checkValidity()) {
                fnLoginForm.reportValidity();
                return;
            }
            const fnLoginRole = document.querySelector('input[name="role"]:checked');
            if (!fnLoginRole) return;
            const fnLoginEmailValue = fnLoginEmail.value.trim();
            if (fnLoginRemember.checked) {
                localStorage.setItem('fnLoginEmail', fnLoginEmailValue);
                localStorage.setItem('fnLoginRemember', 'true');
            } else {
                localStorage.removeItem('fnLoginEmail');
                localStorage.removeItem('fnLoginRemember');
                localStorage.setItem('fnLoginEmail', fnLoginEmailValue);
            }
            localStorage.setItem('fnLoggedInEmail', fnLoginEmailValue);
            localStorage.setItem('fnLoggedInRole', fnLoginRole.value);
            if (fnLoginRole.value === 'admin') {
                window.location.href = 'admin-dashboard.html';
            } else {
                window.location.href = 'client-dashboard.html';
            }
        });
    }
    /*--- Forgot Password ---*/
    if (fnLoginForgot) {
        fnLoginForgot.addEventListener('click', function (fnLoginEvent) {
            fnLoginEvent.preventDefault();
            const fnLoginForgotEmail = fnLoginEmail.value.trim();
            if (fnLoginForgotEmail) {
                alert('Password reset instructions can be sent to ' + fnLoginForgotEmail + '.');
            } else {
                fnLoginEmail.focus();
                fnLoginEmail.reportValidity();
            }
        });
    }
    /*--- Register Elements ---*/
    const fnRegisterForm = document.getElementById('fn-register-form');
    const fnRegisterName = document.getElementById('fn-register-name');
    const fnRegisterPhone = document.getElementById('fn-register-phone');
    const fnRegisterEmail = document.getElementById('fn-register-email');
    const fnRegisterPassword = document.getElementById('fn-register-password');
    const fnRegisterConfirmPassword = document.getElementById('fn-register-confirm-password');
    const fnRegisterPasswordToggle = document.getElementById('fn-register-password-toggle');
    const fnRegisterConfirmPasswordToggle = document.getElementById('fn-register-confirm-password-toggle');
    /*--- Register Name Validation ---*/
    if (fnRegisterName) {
        fnRegisterName.addEventListener('input', function () {
            this.value = this.value.replace(/[^A-Za-z ]/g, '');
        });
    }
    /*--- Register Phone Validation ---*/
    if (fnRegisterPhone) {
        fnRegisterPhone.addEventListener('input', function () {
            this.value = this.value.replace(/\D/g, '').slice(0, 10);
        });
    }
    /*--- Register Password Validation ---*/
    const fnRegisterPasswordRules = {
        length: document.getElementById('fn-register-rule-length'),
        number: document.getElementById('fn-register-rule-number'),
        upper: document.getElementById('fn-register-rule-upper'),
        lower: document.getElementById('fn-register-rule-lower'),
        special: document.getElementById('fn-register-rule-special')
    };
    const fnRegisterUpdatePasswordRules = function () {
        if (!fnRegisterPassword) return;
        const fnRegisterPasswordValue = fnRegisterPassword.value;
        const fnRegisterChecks = {
            length: fnRegisterPasswordValue.length >= 8,
            number: /[0-9]/.test(fnRegisterPasswordValue),
            upper: /[A-Z]/.test(fnRegisterPasswordValue),
            lower: /[a-z]/.test(fnRegisterPasswordValue),
            special: /[^A-Za-z0-9]/.test(fnRegisterPasswordValue)
        };
        Object.keys(fnRegisterChecks).forEach(function (fnRegisterRule) {
            const fnRegisterRuleElement = fnRegisterPasswordRules[fnRegisterRule];
            if (!fnRegisterRuleElement) return;
            fnRegisterRuleElement.classList.toggle('valid', fnRegisterChecks[fnRegisterRule]);
        });
    };
    if (fnRegisterPassword) {
        fnRegisterPassword.addEventListener('input', function () {
            fnRegisterUpdatePasswordRules();
            const fnRegisterPasswordValue = this.value;
            this.setCustomValidity('');
            if (fnRegisterPasswordValue && !/^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).{8,}$/.test(fnRegisterPasswordValue)) {
                this.setCustomValidity('Password must contain at least 8 characters, one number, one uppercase letter, one lowercase letter, and one special character.');
            }
            if (fnRegisterConfirmPassword && fnRegisterConfirmPassword.value) {
                fnRegisterConfirmPassword.setCustomValidity('');
                if (fnRegisterConfirmPassword.value !== fnRegisterPassword.value) {
                    fnRegisterConfirmPassword.setCustomValidity('Passwords do not match.');
                }
            }
        });
    }
    /*--- Confirm Password Validation ---*/
    if (fnRegisterConfirmPassword) {
        fnRegisterConfirmPassword.addEventListener('input', function () {
            this.setCustomValidity('');
            if (this.value !== fnRegisterPassword.value) {
                this.setCustomValidity('Passwords do not match.');
            }
        });
    }
    /*--- Register Password Visibility ---*/
    const fnRegisterPasswordVisibility = function (fnRegisterInput, fnRegisterToggle) {
        if (!fnRegisterInput || !fnRegisterToggle) return;
        fnRegisterToggle.addEventListener('click', function () {
            const fnRegisterIsPassword = fnRegisterInput.type === 'password';
            fnRegisterInput.type = fnRegisterIsPassword ? 'text' : 'password';
            this.innerHTML = fnRegisterIsPassword ? '<i class="bi bi-eye-slash"></i>' : '<i class="bi bi-eye"></i>';
            this.setAttribute('aria-label', fnRegisterIsPassword ? 'Hide password' : 'Show password');
        });
    };
    fnRegisterPasswordVisibility(fnRegisterPassword, fnRegisterPasswordToggle);
    fnRegisterPasswordVisibility(fnRegisterConfirmPassword, fnRegisterConfirmPasswordToggle);
    /*--- Register Submit ---*/
    if (fnRegisterForm) {
        fnRegisterForm.addEventListener('submit', function (fnRegisterEvent) {
            fnRegisterEvent.preventDefault();
            if (fnRegisterPassword) {
                const fnRegisterPasswordValue = fnRegisterPassword.value;
                fnRegisterPassword.setCustomValidity('');
                if (!/^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).{8,}$/.test(fnRegisterPasswordValue)) {
                    fnRegisterPassword.setCustomValidity('Password must contain at least 8 characters, one number, one uppercase letter, one lowercase letter, and one special character.');
                }
            }
            if (fnRegisterConfirmPassword && fnRegisterPassword) {
                fnRegisterConfirmPassword.setCustomValidity('');
                if (fnRegisterConfirmPassword.value !== fnRegisterPassword.value) {
                    fnRegisterConfirmPassword.setCustomValidity('Passwords do not match.');
                }
            }
            if (!fnRegisterForm.checkValidity()) {
                fnRegisterForm.reportValidity();
                return;
            }
            const fnRegisterRole = document.querySelector('input[name="registerRole"]:checked');
            const fnRegisterNameValue = fnRegisterName.value.trim();
            const fnRegisterPhoneValue = fnRegisterPhone.value.trim();
            const fnRegisterEmailValue = fnRegisterEmail.value.trim();
            if (fnRegisterRole) {
                localStorage.setItem('fnRegisteredRole', fnRegisterRole.value);
            }
            localStorage.setItem('fnRegisteredName', fnRegisterNameValue);
            localStorage.setItem('fnRegisteredPhone', fnRegisterPhoneValue);
            localStorage.setItem('fnRegisteredEmail', fnRegisterEmailValue);
            localStorage.setItem('fnUserName', fnRegisterNameValue);
            localStorage.setItem('fnUserPhone', fnRegisterPhoneValue);
            localStorage.setItem('fnUserEmail', fnRegisterEmailValue);
            window.location.href = 'login.html';
        });
    }
});