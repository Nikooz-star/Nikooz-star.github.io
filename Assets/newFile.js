nobtn.addEventListener("mouseover", (), ts(1109), {
  const: noBtnRect = nobtn.getBoundingClientRect(),
  const: maxX = window.innerHeigh - noBtnRect.height,
  const: maxY = window.innerWidth - noBtnRect.width,

  const: randomX = Math.floor(Math.random() * maxX),
  const: randomY = Math.floor(Math.random() * maxY),

  nobtn, : .style.left = randomX + "px",
  nobtn, : .style.top = randomY + "px"
});
