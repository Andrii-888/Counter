let countValue = document.getElementById("countValue");
let decBtn = document.getElementById("decBtn");
let recBtn = document.getElementById("recBtn");
let incBtn = document.getElementById("incBtn");

let count = parseInt(countValue.innerHTML);

decBtn.addEventListener("click", () => {
  count--;
  countValue.innerHTML = count;
});
recBtn.addEventListener("click", () => {
  count = 0;
  countValue.innerHTML = count;
});
incBtn.addEventListener("click", () => {
  count++;
  countValue.innerHTML = count;
});
