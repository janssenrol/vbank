/* Progressive scroll reveal; page remains fully visible if IntersectionObserver is unavailable. */
(function () {
  const reduce =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !("IntersectionObserver" in window)) return;
  const items = document.querySelectorAll(".reveal");
  items.forEach((item) => item.classList.add("vb-ready"));
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("vb-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -35px 0px" },
  );
  items.forEach((item) => observer.observe(item));
})();
