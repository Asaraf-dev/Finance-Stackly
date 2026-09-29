/*--- Footer ---*/
document.addEventListener('DOMContentLoaded',function(){
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
});