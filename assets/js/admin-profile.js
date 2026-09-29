/*--- Admin Profile ---*/
document.addEventListener('DOMContentLoaded', function () {
    /*--- Stored Authentication Data ---*/
    const fnProfileName = localStorage.getItem('fnUserName') || localStorage.getItem('fnRegisteredName') || 'Not Available';
    const fnProfilePhone = localStorage.getItem('fnUserPhone') || localStorage.getItem('fnRegisteredPhone') || 'Not Available';
    const fnProfileEmail = localStorage.getItem('fnUserEmail') || localStorage.getItem('fnRegisteredEmail') || localStorage.getItem('fnLoggedInEmail') || 'Not Available';
    const fnProfileRegisteredRole = localStorage.getItem('fnRegisteredRole') || 'Not Available';
    const fnProfileLoggedRole = localStorage.getItem('fnLoggedInRole') || 'Not Available';
    const fnProfileLoggedEmail = localStorage.getItem('fnLoggedInEmail') || fnProfileEmail;
    const fnProfileRemember = localStorage.getItem('fnLoginRemember') === 'true';
    /*--- Helper ---*/
    const fnProfileSetText = function (fnProfileId, fnProfileValue) {
        const fnProfileElement = document.getElementById(fnProfileId);
        if (fnProfileElement) fnProfileElement.textContent = fnProfileValue;
    };
    /*--- Role Formatting ---*/
    const fnProfileFormatRole = function (fnProfileRole) {
        if (!fnProfileRole || fnProfileRole === 'Not Available') return 'Not Available';
        return fnProfileRole.charAt(0).toUpperCase() + fnProfileRole.slice(1);
    };
    const fnProfileRegisteredRoleText = fnProfileFormatRole(fnProfileRegisteredRole);
    const fnProfileLoggedRoleText = fnProfileFormatRole(fnProfileLoggedRole);
    /*--- Profile Identity ---*/
    fnProfileSetText('fn-adm-profile-name', fnProfileName);
    fnProfileSetText('fn-adm-profile-email', fnProfileEmail);
    fnProfileSetText('fn-adm-profile-role', fnProfileRegisteredRoleText);
    fnProfileSetText('fn-adm-profile-account-role', fnProfileRegisteredRoleText);
    /*--- Personal Information ---*/
    fnProfileSetText('fn-adm-profile-detail-name', fnProfileName);
    fnProfileSetText('fn-adm-profile-detail-phone', fnProfilePhone);
    fnProfileSetText('fn-adm-profile-detail-email', fnProfileEmail);
    fnProfileSetText('fn-adm-profile-detail-role', fnProfileRegisteredRoleText);
    /*--- Login Information ---*/
    fnProfileSetText('fn-adm-profile-logged-email', fnProfileLoggedEmail);
    fnProfileSetText('fn-adm-profile-logged-role', fnProfileLoggedRoleText);
    fnProfileSetText('fn-adm-profile-remember', fnProfileRemember ? 'Enabled' : 'Disabled');
});