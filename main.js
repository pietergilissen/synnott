
document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  var toggle = document.querySelector('.menu-toggle');
  var navLinks = document.querySelector('.nav-links');
  if (toggle) {
    toggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { navLinks.classList.remove('open'); });
    });
  }

  // FAQ accordion
  document.querySelectorAll('.faq-item').forEach(function (item) {
    var q = item.querySelector('.faq-q');
    var a = item.querySelector('.faq-a');
    q.addEventListener('click', function () {
      var isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(function (i) {
        i.classList.remove('open');
        i.querySelector('.faq-a').style.maxHeight = null;
      });
      if (!isOpen) {
        item.classList.add('open');
        a.style.maxHeight = a.scrollHeight + 'px';
      }
    });
  });

  // Rates tabs
  document.querySelectorAll('.tab-group').forEach(function (group) {
    var btns = group.querySelectorAll('.tab-btn');
    btns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var target = btn.getAttribute('data-tab');
        var parent = group.closest('.tabs-wrap');
        parent.querySelectorAll('.tab-btn').forEach(function (b) { b.classList.remove('active'); });
        parent.querySelectorAll('.tab-panel').forEach(function (p) { p.classList.remove('active'); });
        btn.classList.add('active');
        parent.querySelector('#' + target).classList.add('active');
      });
    });
  });

  // Sticky mobile book bar
  var sticky = document.querySelector('.sticky-book');
  if (sticky) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 400) sticky.classList.add('show');
      else sticky.classList.remove('show');
    });
  }

  // Simple booking form validation + confirmation (front-end only demo)
  var form = document.querySelector('.book-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var msg = document.createElement('div');
      msg.className = 'callout';
      msg.style.marginTop = '16px';
      msg.textContent = "Thanks! Your request has been queued. This demo form doesn't send data yet — connect it to your booking backend or email service (e.g. Formspree, your CRM, or the existing SMG booking system) to go live.";
      form.appendChild(msg);
      form.reset();
    });
  }

  // Activity filter on trips page
  var filterBtns = document.querySelectorAll('.activity-card[data-filter]');
  var tripCards = document.querySelectorAll('.trip-card[data-category]');
  if (filterBtns.length && tripCards.length) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var f = btn.getAttribute('data-filter');
        document.getElementById('trips-grid-anchor').scrollIntoView({behavior:'smooth'});
        tripCards.forEach(function (card) {
          if (f === 'all' || card.getAttribute('data-category') === f) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }
});
