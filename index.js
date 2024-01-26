
let count = 0
const countEl = document.getElementById("count-el")
const saveEl = document.getElementById("save-el")

function increase() {
  count = count + 1 
  countEl.textContent = count
}

function save() {
    let stringEl = count + " - "
    saveEl.textContent += stringEl
    countEl.textContent = 0
    count = 0 
}