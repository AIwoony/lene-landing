(function () {
  var SHEET_URL = 'https://script.google.com/macros/s/AKfycbxp1QVW6bAUIjqqzVtoQ7ydh1K5DdCepPx0sU7Sur3qWQjI8fR6xljdlEyafS39tMeugQ/exec';

  var form = document.getElementById('leadForm');
  var success = document.getElementById('formSuccess');
  var btn = form ? form.querySelector('.cta__btn') : null;
  if (!form || !success) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }

    var fd = new FormData(form);
    var payload = {
      name: fd.get('name'),
      product: fd.get('product'),
      email: fd.get('email'),
      concern: fd.get('concern'),
      skintype: fd.get('skintype') || '',
      consent: fd.get('consent') ? 'yes' : 'no'
    };

    // GA4 lead event with parameters
    var concept = window.location.pathname.indexOf('b.html') !== -1 ? 'B' : 'A';
    if (typeof gtag === 'function') {
      gtag('event', 'generate_lead', {
        concept: concept,
        product: payload.product,
        concern: payload.concern,
        skintype: payload.skintype
      });
    }

    // Show success immediately, send in background
    form.style.display = 'none';
    success.style.display = 'flex';
    gsap.from('.success__check', { scale: 0, duration: 0.6, ease: 'back.out(1.7)' });
    gsap.from('.success__text', { y: 20, opacity: 0, duration: 0.5, delay: 0.3 });
    gsap.from('.success__sub', { y: 15, opacity: 0, duration: 0.4, delay: 0.5 });

    fetch(SHEET_URL, {
      method: 'POST',
      body: JSON.stringify(payload)
    }).catch(function () {});
  });

  document.querySelectorAll('.form__group select').forEach(function (sel) {
    sel.addEventListener('change', function () {
      if (this.value) this.style.color = '#FAF8F5';
    });
  });
})();
