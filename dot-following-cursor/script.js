const cursorDot  = document.querySelector("#cursor-dot")
const cursor = document.querySelector("#cursor")

document.addEventListener("mousemove", (e) => {
  const x = e.clientX
  const y = e.clientY
  cursorDot.style.transform = `translate(${x}px, ${y}px)`
})