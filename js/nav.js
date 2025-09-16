<script>
  // basit aktif sekme
  (function(){
    const here = location.pathname.split('/').pop() || 'index.html';
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(t => {
      const target = t.getAttribute('href') || '';
      const isHere = (here === '' && target === 'index.html') || here === target;
      t.setAttribute('aria-current', isHere ? 'page' : 'false');
    });
  })();
</script>
