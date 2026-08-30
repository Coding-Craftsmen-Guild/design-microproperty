export function startReveal() {
  let alive = true;
  const countUp = (el) => {
    if (el._counted) return; el._counted = true;
    const target = parseInt(el.getAttribute('data-count'), 10);
    const t0 = performance.now(), dur = 1200;
    const tick = () => {
      if (!alive) { el.textContent = target; return; }
      const p = Math.min(1, (performance.now() - t0) / dur);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) setTimeout(tick, 30);
    };
    tick();
  };
  const scan = () => {
    if (!alive) return;
    document.querySelectorAll('.rv:not(.in)').forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight * 0.95) {
        el.classList.add('in'); el.classList.remove('pre');
        el.querySelectorAll('[data-count]').forEach(countUp);
        if (el.hasAttribute('data-count')) countUp(el);
      } else if (!el.classList.contains('pre')) { el.classList.add('pre'); }
    });
    document.querySelectorAll('[data-count]').forEach(el => {
      if (!el.closest('.rv') && el.getBoundingClientRect().top < window.innerHeight) countUp(el);
    });
  };
  const iv = setInterval(scan, 180);
  // safety: after 4s reveal everything still hidden, keep scanning for counts
  const failsafe = setTimeout(() => {
    document.querySelectorAll('.rv:not(.in)').forEach(el => { el.classList.add('in'); el.classList.remove('pre'); });
  }, 4000);
  scan();
  return () => { alive = false; clearInterval(iv); clearTimeout(failsafe); };
}
