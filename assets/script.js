(function () {
  const toggle = document.querySelector('.nav-toggle');
  const list = document.getElementById('nav-list');
  if (toggle && list) {
    toggle.addEventListener('click', () => {
      const open = list.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    list.querySelectorAll('a').forEach((a) =>
      a.addEventListener('click', () => {
        list.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      })
    );
  }

  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Hide hero image if the source isn't available; the gradient backdrop remains.
  const img = document.querySelector('.hero-photo img');
  if (img) {
    img.addEventListener('error', () => { img.style.display = 'none'; });
  }
})();
