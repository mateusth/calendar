let week = new Date().toLocaleString("en", { weekday: "long",});
let month = new Date().toLocaleString("en", { month: "long",});

document.querySelector("#month").textContent = month
document.querySelector("#week").textContent = week
document.querySelector("#day").textContent = new Date().getDate()
document.querySelector("#year").textContent = new Date().getFullYear()
