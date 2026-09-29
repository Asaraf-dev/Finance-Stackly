/*--- Loader ---*/
const fnLdrLoader=document.getElementById("fn-ldr-loader");
const fnLdrMessage=document.getElementById("fn-ldr-message");
const fnLdrParticles=document.getElementById("fn-ldr-particles");
let fnLdrMessageInterval=null;
let fnLdrHideTimeout=null;
/*--- Loader Messages ---*/
const fnLdrMessages=[
"Preparing your financial experience...",
"Analyzing the market environment...",
"Building smarter financial insights...",
"Securing your financial journey...",
"Almost ready to explore..."
];
let fnLdrMessageIndex=0;
/*--- Show Loader ---*/
function fnShowLoader(){
if(!fnLdrLoader){
return;
}
clearTimeout(fnLdrHideTimeout);
clearInterval(fnLdrMessageInterval);
fnLdrLoader.style.display="flex";
fnLdrLoader.classList.remove("fn-ldr-hidden","fn-ldr-exit");
fnLdrMessageIndex=0;
if(fnLdrMessage){
fnLdrMessage.textContent=fnLdrMessages[0];
fnLdrMessage.style.opacity="1";
fnLdrMessage.style.transform="translateY(0)";
}
fnLdrMessageInterval=setInterval(function(){
fnLdrMessageIndex++;
if(fnLdrMessageIndex>=fnLdrMessages.length){
fnLdrMessageIndex=0;
}
if(fnLdrMessage){
fnLdrMessage.style.opacity="0";
fnLdrMessage.style.transform="translateY(5px)";
setTimeout(function(){
if(fnLdrMessage){
fnLdrMessage.textContent=fnLdrMessages[fnLdrMessageIndex];
fnLdrMessage.style.opacity="1";
fnLdrMessage.style.transform="translateY(0)";
}
},250);
}
},1300);
}
/*--- Hide Loader ---*/
function fnHideLoader(){
if(!fnLdrLoader){
return;
}
clearTimeout(fnLdrHideTimeout);
fnLdrHideTimeout=setTimeout(function(){
clearInterval(fnLdrMessageInterval);
fnLdrLoader.classList.add("fn-ldr-exit");
setTimeout(function(){
if(fnLdrLoader){
fnLdrLoader.classList.add("fn-ldr-hidden");
fnLdrLoader.style.display="none";
}
},750);
},500);
}
/*--- Create Particles ---*/
function fnCreateLoaderParticles(){
if(!fnLdrParticles){
return;
}
if(fnLdrParticles.querySelector(".fn-ldr-particle")){
return;
}
for(let i=0;i<35;i++){
const fnLdrParticle=document.createElement("span");
fnLdrParticle.className="fn-ldr-particle";
fnLdrParticle.style.left=Math.random()*100+"%";
fnLdrParticle.style.top=Math.random()*100+"%";
const fnLdrParticleSize=2+Math.random()*3;
fnLdrParticle.style.width=fnLdrParticleSize+"px";
fnLdrParticle.style.height=fnLdrParticleSize+"px";
fnLdrParticle.style.animationDelay=Math.random()*5+"s";
fnLdrParticle.style.animationDuration=4+Math.random()*5+"s";
fnLdrParticles.appendChild(fnLdrParticle);
}
}
/*--- Mouse Glow ---*/
document.addEventListener("mousemove",function(fnLdrEvent){
if(!fnLdrLoader||fnLdrLoader.style.display==="none"){
return;
}
fnLdrLoader.style.setProperty("--fn-ldr-x",fnLdrEvent.clientX+"px");
fnLdrLoader.style.setProperty("--fn-ldr-y",fnLdrEvent.clientY+"px");
});
/*--- Initial Page Load ---*/
document.addEventListener("DOMContentLoaded",function(){
fnCreateLoaderParticles();
fnShowLoader();
});
/*--- Window Loaded ---*/
window.addEventListener("load",function(){
fnHideLoader();
});
/*--- Browser Back / Forward ---*/
window.addEventListener("pageshow",function(fnLdrEvent){
if(fnLdrEvent.persisted){
if(fnLdrLoader){
fnLdrLoader.style.display="flex";
}
fnShowLoader();
fnHideLoader();
}
});