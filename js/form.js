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

    if (btn) { btn.disabled = true; btn.querySelector('.cta__btn-text').textContent = 'Submitting...'; }

    fetch(SHEET_URL, {
      method: 'POST',
      body: JSON.stringify(payload)
    }).then(function () {
      form.style.display = 'none';
      success.style.display = 'flex';
      gsap.from('.success__check', { scale: 0, duration: 0.6, ease: 'back.out(1.7)' });
      gsap.from('.success__text', { y: 20, opacity: 0, duration: 0.5, delay: 0.3 });
      gsap.from('.success__sub', { y: 15, opacity: 0, duration: 0.4, delay: 0.5 });
    }).catch(function () {
      if (btn) { btn.disabled = false; btn.querySelector('.cta__btn-text').textContent = 'Get Notified at Launch'; }
      alert('Something went wrong. Please try again.');
    });
  });

  document.querySelectorAll('.form__group select').forEach(function (sel) {
    sel.addEventListener('change', function () {
      if (this.value) this.style.color = '#FAF8F5';
    });
  });
})();
