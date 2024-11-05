window.addEventListener("DOMContentLoaded", () => {
  window.UIscroll.init();
});

const UIscroll = function () {
  const init = function () {
    sclObserver("[data-ani]");
  };
  const sclObserver = function (tar) {
    setTimeout(() => {
      const el = document.querySelectorAll(tar);
      const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0,
      };
      function observerCallback(entries) {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0) {
            entry.target.classList.add("on");
            sclMotion(entry.target);
          } else {
            if (entry.target.parentNode.classList.contains("bottom-dominoes")) entry.target.classList.remove("on");
          }
        });
      }
      const observer = new IntersectionObserver(observerCallback, observerOptions);
      el.forEach((el) => observer.observe(el));
    }, 100);
  };
  const sclMotion = function (tar) {
    const updateScrollPercentage = function () {
      const _sclTop = window.pageYOffset;
      const _t = tar.offsetTop;
      const _ct = Math.floor(tar.getBoundingClientRect().top);
      const _h = window.innerHeight;
      const _w = window.innerWidth;
      const _d = document.documentElement.scrollHeight;
      const st = Math.abs(Math.round(((_t - _sclTop) / _h) * 100));
      const per = Math.min(100, Math.round(((_h - _ct) / _h) * 100));
      const rotate = Math.min(360, 3.6 * per);
      const scaleUp = Math.min(10, st / 200 + 1);
      const scaleDown = Math.max(1, (170 - per) / 85);
      const blurUp = Math.min(10, st / 10);
      const blurDown = Math.max(0, (80 - per) / 30);
      if (tar.getAttribute("data-ani") != null) {
        if (tar.getAttribute("data-ani").indexOf("blurUp") != -1) tar.style.filter = `blur(${blurUp}px)`;
        if (tar.getAttribute("data-ani").indexOf("blurDown") != -1) tar.style.filter = `blur(${blurDown}px)`;
        if (tar.getAttribute("data-ani").indexOf("scaleUp") != -1) tar.style.transform = `scale(${scaleUp})`;
        if (tar.getAttribute("data-ani").indexOf("scaleDown") != -1) tar.style.transform = `scale(${scaleDown})`;
        if (tar.getAttribute("data-ani").indexOf("rotate") != -1) tar.style.transform = `scale(${rotate})`;
        if (tar.getAttribute("data-ani").indexOf("fade") != -1) {
          tar.style.opacity = 1;
          tar.style.transform = "translateY(0)";
        }
        if (tar.getAttribute("data-ani").indexOf("fadeUp") != -1) {
          tar.style.opacity = 1;
          tar.style.transform = "translateY(0)";
        }
      }
      if (tar.getAttribute("data-delay") != null) tar.style.transitionDelay = `${tar.getAttribute("data-delay")}ms`;
    };
    updateScrollPercentage();
    window.addEventListener("scroll", updateScrollPercentage);
  };
  return {
    init,
  };
};
window.UIscroll = new UIscroll();