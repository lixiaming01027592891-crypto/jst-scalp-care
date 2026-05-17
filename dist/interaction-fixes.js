(function () {
  function ready(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
    } else {
      fn();
    }
  }

  function focusWithoutScroll(el) {
    if (!el || !el.focus) return;
    try {
      el.focus({ preventScroll: true });
    } catch (err) {
      el.focus();
    }
  }

  ready(function () {
    document.documentElement.classList.add('js');

    var toggle = document.getElementById('navToggle');
    var menu = document.getElementById('mobileMenu');
    if (toggle && menu) {
      var panel = menu.querySelector('[data-menu-panel]') || menu.firstElementChild;
      var h1 = document.getElementById('h1');
      var h2 = document.getElementById('h2');
      var h3 = document.getElementById('h3');
      var menuStyles = {
        display: 'block',
        position: 'fixed',
        top: '72px',
        left: '0',
        right: '0',
        bottom: '0',
        'z-index': '60',
        'overflow-y': 'auto',
        background: 'rgba(255, 255, 255, 0.98)',
        '-webkit-backdrop-filter': 'blur(16px)',
        'backdrop-filter': 'blur(16px)'
      };

      function menuIsOpen() {
        return menu.classList.contains('is-open') || toggle.getAttribute('aria-expanded') === 'true';
      }

      function setMenuStyles(open) {
        Object.keys(menuStyles).forEach(function (property) {
          if (open) {
            menu.style.setProperty(property, menuStyles[property], 'important');
          } else {
            menu.style.removeProperty(property);
          }
        });
        menu.setAttribute('aria-hidden', open ? 'false' : 'true');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        toggle.setAttribute('aria-label', open ? '\u95dc\u9589\u9078\u55ae' : '\u958b\u555f\u9078\u55ae');
        document.body.classList.toggle('menu-open', open);
      }

      function syncMenu() {
        setMenuStyles(menuIsOpen());
      }

      function setBars(open) {
        if (h1) h1.style.transform = open ? 'rotate(45deg) translate(5px,5px)' : '';
        if (h2) h2.style.opacity = open ? '0' : '1';
        if (h3) h3.style.transform = open ? 'rotate(-45deg) translate(5px,-5px)' : '';
      }

      function closeMenu() {
        menu.classList.remove('is-open');
        setMenuStyles(false);
        setBars(false);
        focusWithoutScroll(toggle);
      }

      toggle.addEventListener('click', function () {
        window.setTimeout(function () {
          syncMenu();
          if (menuIsOpen()) focusWithoutScroll(menu.querySelector('a'));
        }, 0);
      });

      menu.addEventListener('click', function (event) {
        if (event.target === menu || event.target === panel || (event.target.hasAttribute && event.target.hasAttribute('data-menu-panel'))) {
          closeMenu();
        }
      });

      menu.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          window.setTimeout(syncMenu, 0);
        });
      });

      document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') window.setTimeout(syncMenu, 0);
      });

      window.addEventListener('resize', function () {
        if (window.innerWidth >= 768) window.setTimeout(syncMenu, 0);
      });

      syncMenu();
    }

    var animatedItems = Array.prototype.slice.call(document.querySelectorAll('.animate-on-scroll'));
    if (animatedItems.length) {
      var reduceMotionForAnimation = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduceMotionForAnimation || !('IntersectionObserver' in window)) {
        animatedItems.forEach(function (item) { item.classList.add('animate-in'); });
      } else {
        var revealObserver = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-in');
              revealObserver.unobserve(entry.target);
            }
          });
        }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
        animatedItems.forEach(function (item) { revealObserver.observe(item); });
      }
    }

    document.querySelectorAll('.faq-question').forEach(function (button) {
      button.setAttribute('aria-expanded', button.closest('.faq-item').classList.contains('active') ? 'true' : 'false');
      button.addEventListener('click', function () {
        window.setTimeout(function () {
          document.querySelectorAll('.faq-question').forEach(function (btn) {
            var item = btn.closest('.faq-item');
            btn.setAttribute('aria-expanded', item && item.classList.contains('active') ? 'true' : 'false');
          });
        }, 0);
      });
    });

    document.querySelectorAll('.filter-btn').forEach(function (button) {
      button.setAttribute('aria-pressed', button.classList.contains('active') || button.classList.contains('bg-sage') ? 'true' : 'false');
      button.addEventListener('click', function () {
        window.setTimeout(function () {
          document.querySelectorAll('.filter-btn').forEach(function (btn) {
            btn.setAttribute('aria-pressed', btn.classList.contains('bg-sage') ? 'true' : 'false');
          });
        }, 0);
      });
    });

    var scrollButton = document.getElementById('scrollToBooking');
    var bookingForm = document.getElementById('booking-form');
    if (scrollButton && bookingForm) {
      scrollButton.addEventListener('click', function () {
        var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        bookingForm.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
      });
    }
  });
})();
