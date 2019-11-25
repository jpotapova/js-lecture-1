// DOM - create element

var oxygen = document.createElement("li");
oxygen.innerText = "Oxygen";

var iron = document.createElement("li");
iron.innerText = "Iron";

setTimeout(function() {
  document.querySelector("ul").appendChild(oxygen);
  document.querySelector("li").after(iron);
}, 1000);
