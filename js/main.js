const burgerBtn = document.querySelector(".burger");
const elNav = document.querySelector(".navbar-nav");
const elPricingBtn = document.querySelectorAll(".pricing-btn")

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("shownav")
  elNav.classList.toggle("shownav")
});

elPricingBtn.forEach(el => {
  el.addEventListener("click", function () {
    let text = this.textContent
    if("month" == text.slice(-5)) {
      this.innerHTML = text.slice(1,6) * 12 + " " + "per year"
    }else {
      this.innerHTML = "£"+(text.slice(0,6) / 12) + " " + "per month"
    }
  })
})
