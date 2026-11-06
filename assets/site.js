(function(){
  var root=document.documentElement;
  // Theme toggle
  var tb=document.querySelector('.theme-btn');
  if(tb){tb.addEventListener('click',function(){
    var dark=root.dataset.theme?root.dataset.theme==='dark':matchMedia('(prefers-color-scheme: dark)').matches;
    root.dataset.theme=dark?'light':'dark';
    try{localStorage.setItem('cl-theme',root.dataset.theme)}catch(e){}
  });}
  // Mobile menu
  var mb=document.querySelector('.menu-btn'),nav=document.getElementById('site-nav');
  if(mb&&nav){mb.addEventListener('click',function(){
    var open=nav.classList.toggle('open');mb.setAttribute('aria-expanded',open);
  });
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&nav.classList.contains('open')){nav.classList.remove('open');mb.setAttribute('aria-expanded','false');mb.focus();}});}
  // Glossary filter
  var q=document.getElementById('term-search');
  if(q){var items=[].slice.call(document.querySelectorAll('.terms > div')),empty=document.getElementById('no-terms');
    q.addEventListener('input',function(){var v=q.value.trim().toLowerCase(),n=0;
      items.forEach(function(d){var hit=!v||d.textContent.toLowerCase().indexOf(v)>-1;d.hidden=!hit;if(hit)n++;});
      empty.hidden=n>0;});}
})();
