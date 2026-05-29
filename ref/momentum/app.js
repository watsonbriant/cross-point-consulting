// Cross Point — Momentum shared scripts
(function(){
  var b=document.getElementById('burger'), n=document.getElementById('navlinks');
  if(b&&n){ b.addEventListener('click',function(){ n.classList.toggle('open'); }); }
  var f=document.getElementById('applyForm');
  if(f){ f.addEventListener('submit',function(e){ e.preventDefault();
    f.style.display='none'; var ok=document.getElementById('formOk'); if(ok) ok.style.display='block'; }); }
})();
