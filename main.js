const updateColor = () => {
    const r = parseInt(document.querySelector('#red').value)
    const g = parseInt(document.querySelector('#green').value)
    const b = parseInt(document.querySelector('#blue').value)
    const canvasElement = document.querySelector('#canvas')
    canvasElement.style.backgroundColor = `rgb(${r},${g},${b})`
    canvasElement.style.border = "thin solid black"
}

document.querySelector('#red').addEventListener('click', updateColor)
document.querySelector('#blue').addEventListener('click', updateColor)
document.querySelector('#green').addEventListener('click', updateColor)

updateColor()
