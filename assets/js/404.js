/*--- 404 ---*/
document.addEventListener("DOMContentLoaded",function(){
const fn404BackBtn=document.getElementById("fn-404-back-btn");
const fn404Particles=document.getElementById("fn-404-particles");
/*--- 404 Go Back ---*/
if(fn404BackBtn){
fn404BackBtn.addEventListener("click",function(){
if(window.history.length>1){
window.history.back();
}else{
window.location.href="index.html";
}
});
}
/*--- 404 Particles ---*/
if(fn404Particles&&!fn404Particles.querySelector(".fn-404-particle")){
for(let i=0;i<28;i++){
const fn404Particle=document.createElement("span");
fn404Particle.className="fn-404-particle";
fn404Particle.style.left=Math.random()*100+"%";
fn404Particle.style.top=Math.random()*100+"%";
const fn404ParticleSize=2+Math.random()*3;
fn404Particle.style.width=fn404ParticleSize+"px";
fn404Particle.style.height=fn404ParticleSize+"px";
fn404Particle.style.animationDelay=Math.random()*5+"s";
fn404Particle.style.animationDuration=4+Math.random()*5+"s";
fn404Particles.appendChild(fn404Particle);
}
}
/*--- 404 Mouse Glow ---*/
const fn404Page=document.querySelector(".fn-404-page");
if(fn404Page){
document.addEventListener("mousemove",function(fn404Event){
fn404Page.style.setProperty("--fn-404-x",fn404Event.clientX+"px");
fn404Page.style.setProperty("--fn-404-y",fn404Event.clientY+"px");
});
}
});