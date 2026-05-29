// Cross Point — Vanguard shared scripts
(function(){
  // Reveal on scroll — rect-based (robust across iframes where IO may not fire)
  function revealCheck(){
    var vh = window.innerHeight || document.documentElement.clientHeight;
    var els = document.querySelectorAll('.reveal:not(.in)');
    for(var i=0;i<els.length;i++){
      var r = els[i].getBoundingClientRect();
      if(r.top < vh*0.92 && r.bottom > 0){ els[i].classList.add('in'); }
    }
  }
  revealCheck();
  window.addEventListener('scroll', revealCheck, {passive:true});
  window.addEventListener('resize', revealCheck);
  window.addEventListener('load', revealCheck);
  setTimeout(revealCheck, 200);
  setTimeout(revealCheck, 800);

  // Mobile nav
  var b = document.getElementById('burger'), n = document.getElementById('navlinks');
  if(b && n){ b.addEventListener('click', function(){ n.classList.toggle('open'); }); }

  // Contact form (demo)
  var f = document.getElementById('applyForm');
  if(f){ f.addEventListener('submit', function(ev){
    ev.preventDefault();
    var ok = document.getElementById('formOk');
    f.style.display='none';
    if(ok) ok.style.display='block';
  }); }
})();
