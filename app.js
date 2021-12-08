window.sr = new ScrollReveal();
sr.reveal(".banner", { delay: 500 });

ScrollOut({
  threshold: 0.2,
  once: true,
  onShown: function (el) {
    const div = el.children;
    console.log(el);
    if (el.classList[0] === "plataforma-item") {
      el.classList.add("animate__animated");
      el.classList.add("animate__flipInX");
    }
    if (div[0].children[0].classList[0] === "objetivo") {
      for (const iterator of div[0].children[0].children) {
        iterator.classList.add("animate__animated");
        iterator.classList.add("animate__bounce");
      }
    }
  },
});
