const rateContainer = document.querySelector(".rate-container");
const thankContainer = document.querySelector(".thank-container");
const rate_el = document.getElementById("rate-list");
const rates = document.querySelectorAll(".rate");
const submitBtn = document.getElementById("submit");
const rateNumber = document.getElementById("rate-number");
let checked = null;

rate_el.addEventListener("click", (e) => {
  if (e.target.classList.contains("rate")) {
    removeChecked(rates);
    e.target.classList.add("checked");
    checked = e.target;
  }
});

submitBtn.addEventListener("click", () => {
  if (checked) {
    rateContainer.classList.add("d-none");
    rateContainer.classList.remove("d-flex");
    thankContainer.classList.add("d-flex");
    thankContainer.classList.remove("d-none");

    rateNumber.textContent = checked.innerText;
  } else {
    alert("Please rate before submit!");
  }
});

function removeChecked(rates) {
  rates.forEach((rate) => {
    rate.classList.remove("checked");
  });
}
