gsap.registerPlugin(ScrollTrigger);

window.addEventListener('load', function() {
  var preloader = document.getElementById('preloader');
  var barInner = document.querySelector('.preloader__bar-inner');
  gsap.to(barInner, {
    width: '100%', duration: 1.2, ease: 'power2.inOut',
    onComplete: function() {
      gsap.to(preloader, {
        opacity: 0, duration: 0.5,
        onComplete: function() { preloader.style.display = 'none'; initAnimations(); }
      });
    }
  });
});

(function() {
  var cursor = document.getElementById('cursor');
  var follower = document.getElementById('cursorFollower');
  if (!cursor || !follower || window.innerWidth < 768) return;
  var posX = 0, posY = 0, mouseX = 0, mouseY = 0;
  gsap.ticker.add(function() {
    posX += (mouseX - posX) * 0.15;
    posY += (mouseY - posY) * 0.15;
    gsap.set(cursor, { x: mouseX, y: mouseY });
    gsap.set(follower, { x: posX, y: posY });
  });
  document.addEventListener('mousemove', function(e) { mouseX = e.clientX; mouseY = e.clientY; });
  document.querySelectorAll('a, button, input, select, .ingredient__item').forEach(function(el) {
    el.addEventListener('mouseenter', function() { follower.classList.add('is-hovering'); });
    el.addEventListener('mouseleave', function() { follower.classList.remove('is-hovering'); });
  });
})();

function initAnimations() {
  // Hero
  var heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  heroTl
    .from('.hero__logo', { y: 40, opacity: 0, duration: 1.2, delay: 0.2 })
    .from('.hero__tagline', { y: 30, opacity: 0, duration: 1 }, '-=0.5')
    .from('.hero__scroll-indicator', { opacity: 0, duration: 0.8 }, '-=0.3');
  gsap.to('.hero__bg', {
    yPercent: 20,
    scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true }
  });

  // Generic reveals
  document.querySelectorAll('.reveal-up').forEach(function(el) {
    gsap.set(el, { visibility: 'visible' });
    gsap.from(el, { y: 50, opacity: 0, duration: 1, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 85%', once: true } });
  });
  document.querySelectorAll('.reveal-text').forEach(function(el) {
    gsap.set(el, { visibility: 'visible' });
    gsap.from(el, { y: 60, opacity: 0, duration: 1.2, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 85%', once: true } });
  });
  document.querySelectorAll('.reveal-left').forEach(function(el) {
    gsap.set(el, { visibility: 'visible' });
    gsap.from(el, { x: -80, opacity: 0, duration: 1.2, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 80%', once: true } });
  });
  document.querySelectorAll('.reveal-right').forEach(function(el) {
    gsap.set(el, { visibility: 'visible' });
    gsap.from(el, { x: 80, opacity: 0, duration: 1.2, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 80%', once: true } });
  });

  // CTA headline — use section as trigger for reliable bottom-of-page animation
  var ctaHeadline = document.querySelector('.cta__headline');
  if (ctaHeadline) {
    gsap.from(ctaHeadline, { y: 60, opacity: 0, duration: 1.2, ease: 'power3.out',
      scrollTrigger: { trigger: '#cta', start: 'top 85%', once: true } });
  }

  // Fear image parallax
  gsap.to('.fear__image', {
    yPercent: 8, scale: 1.05,
    scrollTrigger: { trigger: '.fear__visual', start: 'top bottom', end: 'bottom top', scrub: true }
  });

  // Ingredient items stagger
  document.querySelectorAll('.ingredient__item').forEach(function(el) {
    gsap.set(el, { visibility: 'visible' });
  });
  gsap.from('.ingredient__item', {
    y: 40, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
    scrollTrigger: { trigger: '.ingredient__list', start: 'top 80%', once: true }
  });

  // Solution timeline
  var steps = document.querySelectorAll('.solution__step');
  var lineProgress = document.getElementById('solutionLineProgress');
  if (steps.length && lineProgress) {
    ScrollTrigger.create({
      trigger: '#solution', start: 'top 60%', end: 'bottom 40%', scrub: 0.5,
      onUpdate: function(self) {
        var p = self.progress;
        lineProgress.style.width = (p * 100) + '%';
        steps.forEach(function(s, i) {
          s.classList.toggle('is-active', p >= (i + 0.5) / steps.length);
        });
      }
    });
  }



  // Clinical count-up
  document.querySelectorAll('.clinical__number').forEach(function(el) {
    var target = parseFloat(el.dataset.target);
    var suffix = el.dataset.suffix || '';
    var decimal = parseInt(el.dataset.decimal) || 0;
    ScrollTrigger.create({
      trigger: el, start: 'top 80%', once: true,
      onEnter: function() {
        gsap.to({ val: 0 }, {
          val: target, duration: 2, ease: 'power2.out',
          onUpdate: function() { el.textContent = this.targets()[0].val.toFixed(decimal) + suffix; }
        });
      }
    });
  });

  // GA4 CTA click tracking
  var concept = window.location.pathname.indexOf('b.html') !== -1 ? 'B' : 'A';
  document.querySelectorAll('.product__cta-link, .clinical__cta-link, .floating-cta').forEach(function(el) {
    el.addEventListener('click', function() {
      if (typeof gtag === 'function') {
        gtag('event', 'cta_click', {
          concept: concept,
          button_location: el.classList.contains('floating-cta') ? 'floating' :
            el.classList.contains('product__cta-link') ? 'product' : 'clinical'
        });
      }
    });
  });

  // Floating CTA — show after scrolling past hero, hide when CTA form is visible
  var floatingCta = document.getElementById('floatingCta');
  if (floatingCta) {
    ScrollTrigger.create({
      trigger: '#fear',
      start: 'top 80%',
      onEnter: function() { floatingCta.classList.add('is-visible'); },
      onLeaveBack: function() { floatingCta.classList.remove('is-visible'); }
    });
    ScrollTrigger.create({
      trigger: '#cta',
      start: 'top 80%',
      onEnter: function() { floatingCta.classList.remove('is-visible'); },
      onLeaveBack: function() { floatingCta.classList.add('is-visible'); }
    });
  }
}
