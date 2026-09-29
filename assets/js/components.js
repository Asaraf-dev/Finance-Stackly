/*--- Components ---*/
document.addEventListener('DOMContentLoaded',function(){
/*--- Component Loader ---*/
const fnComponentsLoad=function(fnComponentsSelector,fnComponentsPath){
const fnComponentsTarget=document.querySelector(fnComponentsSelector);
if(!fnComponentsTarget)return;
fetch(fnComponentsPath).then(function(fnComponentsResponse){
if(!fnComponentsResponse.ok)throw new Error('Component could not be loaded: '+fnComponentsPath);
return fnComponentsResponse.text();
}).then(function(fnComponentsHtml){
fnComponentsTarget.innerHTML=fnComponentsHtml;
document.dispatchEvent(new CustomEvent('fnComponentLoaded',{detail:{selector:fnComponentsSelector,path:fnComponentsPath}}));
}).catch(function(fnComponentsError){
console.error(fnComponentsError);
});
};
/*--- Navbar Component ---*/
fnComponentsLoad('#fn-navbar-component','assets/components/navbar.html');
/*--- Footer Component ---*/
fnComponentsLoad('#fn-footer-component','assets/components/footer.html');
/*--- Component Loaded Events ---*/
document.addEventListener('fnComponentLoaded',function(fnComponentsEvent){
const fnComponentsPath=fnComponentsEvent.detail.path;
if(fnComponentsPath.includes('navbar.html')){fnComponentsInitNavbar();}
if(fnComponentsPath.includes('footer.html')){fnComponentsInitFooter();}
});
/*--- Navbar Component ---*/
const fnComponentsInitNavbar=function(){
const fnNavNavbar=document.getElementById('fn-nav-navbar');
const fnNavNavbarLinks=document.getElementById('fn-nav-navbar-links');
const fnNavNavbarToggle=document.querySelector('.fn-nav-navbar-toggle');
const fnNavNavbarLinkItems=document.querySelectorAll('.fn-nav-navbar-link');
if(!fnNavNavbar)return;
/*--- Navbar Scroll Effect ---*/
const fnNavNavbarScroll=function(){
if(window.scrollY>30){fnNavNavbar.classList.add('scrolled');}else{fnNavNavbar.classList.remove('scrolled');}
};
window.addEventListener('scroll',fnNavNavbarScroll,{passive:true});
fnNavNavbarScroll();
/*--- Navbar Mobile Toggle ---*/
if(fnNavNavbarToggle&&fnNavNavbarLinks){
fnNavNavbarToggle.addEventListener('click',function(){
const fnNavNavbarIsOpen=fnNavNavbarLinks.classList.toggle('active');
fnNavNavbarToggle.classList.toggle('active',fnNavNavbarIsOpen);
fnNavNavbarToggle.setAttribute('aria-expanded',fnNavNavbarIsOpen?'true':'false');
});
}
/*--- Navbar Active Link ---*/
const fnNavNavbarCurrentPage=window.location.pathname.split('/').pop()||'index.html';
fnNavNavbarLinkItems.forEach(function(fnNavNavbarLink){
const fnNavNavbarHref=fnNavNavbarLink.getAttribute('href');
if(fnNavNavbarHref===fnNavNavbarCurrentPage){fnNavNavbarLinkItems.forEach(function(fnNavNavbarItem){fnNavNavbarItem.classList.remove('active');});fnNavNavbarLink.classList.add('active');}
fnNavNavbarLink.addEventListener('click',function(){
fnNavNavbarLinkItems.forEach(function(fnNavNavbarItem){fnNavNavbarItem.classList.remove('active');});
fnNavNavbarLink.classList.add('active');
if(window.innerWidth<=991&&fnNavNavbarLinks&&fnNavNavbarToggle){fnNavNavbarLinks.classList.remove('active');fnNavNavbarToggle.classList.remove('active');fnNavNavbarToggle.setAttribute('aria-expanded','false');}
});
});
/*--- Navbar Outside Click ---*/
document.addEventListener('click',function(fnNavNavbarEvent){
if(window.innerWidth<=991&&fnNavNavbarLinks&&fnNavNavbarToggle&&!fnNavNavbar.contains(fnNavNavbarEvent.target)&&fnNavNavbarLinks.classList.contains('active')){fnNavNavbarLinks.classList.remove('active');fnNavNavbarToggle.classList.remove('active');fnNavNavbarToggle.setAttribute('aria-expanded','false');}
});
/*--- Navbar Resize ---*/
window.addEventListener('resize',function(){
if(window.innerWidth>991&&fnNavNavbarLinks&&fnNavNavbarToggle){fnNavNavbarLinks.classList.remove('active');fnNavNavbarToggle.classList.remove('active');fnNavNavbarToggle.setAttribute('aria-expanded','false');}
});
};
/*--- Footer Component ---*/
const fnComponentsInitFooter=function(){
const fnFootFooterYear=document.getElementById('fn-foot-footer-year');
const fnFootFooterTopBtn=document.getElementById('fn-foot-footer-top-btn');
/*--- Footer Current Year ---*/
if(fnFootFooterYear){fnFootFooterYear.textContent=new Date().getFullYear();}
/*--- Footer Back To Top ---*/
if(fnFootFooterTopBtn){
fnFootFooterTopBtn.addEventListener('click',function(){
window.scrollTo({top:0,behavior:'smooth'});
});
}
};
});