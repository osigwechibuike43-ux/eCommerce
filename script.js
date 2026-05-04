/* SCROLL TO SHOP */
function scrollToShop() {
  document.getElementById("shop").scrollIntoView({
    behavior: "smooth"
  });
}

/* SCROLL ANIMATION */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".fade-in").forEach(el => {
  observer.observe(el);
});
