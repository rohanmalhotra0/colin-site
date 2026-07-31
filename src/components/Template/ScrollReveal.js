import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Elements that gently reveal as they scroll into view.
const SELECTORS = [
  '#main .post > header',
  '#main .post > p',
  '#main .post > div',
  '#main .post > h3',
  '#main .post > ul',
  '.jobs-container',
  '.degree-container',
  '.cell-container',
  '.skillbar',
  '#sidebar > section',
].join(', ');

// Reveal-on-scroll is a progressive enhancement layered on after hydration.
// It must not run during react-snap prerendering: the static HTML has to
// ship without reveal classes so content is visible when JS never loads.
const isPrerendering = () => navigator.userAgent === 'ReactSnap';

const prefersReducedMotion = () => window.matchMedia
  && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const ScrollReveal = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (
      isPrerendering()
      || prefersReducedMotion()
      || typeof IntersectionObserver === 'undefined'
    ) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
    );

    const elements = Array.from(document.querySelectorAll(SELECTORS));
    elements.forEach((el, i) => {
      // Elements already in the initial viewport are handled by the CSS
      // entrance animation; only below-the-fold content gets observed.
      const rect = el.getBoundingClientRect();
      if (rect.top > window.innerHeight) {
        el.classList.add('will-reveal');
        el.style.setProperty('--reveal-delay', `${Math.min(i % 4, 3) * 60}ms`);
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
      elements.forEach((el) => {
        el.classList.remove('will-reveal', 'is-revealed');
        el.style.removeProperty('--reveal-delay');
      });
    };
  }, [pathname]);

  return null;
};

export default ScrollReveal;
