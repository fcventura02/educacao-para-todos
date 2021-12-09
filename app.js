window.sr = new ScrollReveal();
sr.reveal(".banner", { delay: 500 });

ScrollOut({
  threshold: 0.2,
  once: true,
  onShown: function (el) {
    const div = el.children;
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
    if (el.id === "problema" || el.id === "solucao") {
      console.log( div[0]?.children)
      div[0]?.children[0]?.classList.add("animate-openLoad");
      div[0]?.children[1]?.classList.add("animate-openLoad");
    }
  },
});
