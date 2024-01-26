const chart = document.querySelector(".chart")
const clicks = document.querySelector(".clicks")

let a = 0;

chart.addEventListener("mousedown", () =>{
    a++
    clicks.innerHTML = "clicks:" + a
})