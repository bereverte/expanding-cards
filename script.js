const panels = document.querySelectorAll(".panel")
const arrow_left = document.querySelector(".arrow.left")
const arrow_right = document.querySelector(".arrow.right")

panels.forEach(panel => {
  panel.addEventListener("click", () => {
    removeActiveClass()
    panel.classList.add("active")
  })
})

function removeActiveClass() {
  panels.forEach(panel => {
    panel.classList.remove("active")
  })
}

function getActivePanelIndex() {
  for (let i = 0; i < panels.length; i++) {
    if (panels[i].classList.contains("active")) {
      return i
    }
  }
  return -1 // En caso de que ningún panel tenga la clase 'active'
}

function showPreviousPanel() {
  const i = getActivePanelIndex()
  if (i > 0) {
    removeActiveClass()
    panels[i - 1].classList.add("active")
  }
}

function showNextPanel() {
  const i = getActivePanelIndex()
  if (i < panels.length - 1) {
    removeActiveClass()
    panels[i + 1].classList.add("active")
  }
}

arrow_left.addEventListener("click", showPreviousPanel())
arrow_right.addEventListener("click", showNextPanel())

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    showPreviousPanel()
  }
  if (event.key === "ArrowRight") {
    showNextPanel()
  }
})
