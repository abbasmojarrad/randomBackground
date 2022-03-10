const $ = document
const bgElm = $.querySelector('.background')
const btnElm = $.querySelector('.btn')

function generateColor () {
  const color = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
    Math.random() * 256
  )},${Math.floor(Math.random() * 256)})`
  return color
}
function getColor () {
  const bgColor = `linear-gradient(-45deg,${generateColor()},${generateColor()},${generateColor()},${generateColor()})`
  return bgColor
}
function addColor () {
  const color = getColor()
  // console.log(color)
  bgElm.style.backgroundImage = color
}

btnElm.addEventListener('click', addColor)
$.onload = addColor()
