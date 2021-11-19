window.onload = function () {
    let ele = document.getElementById('main')
    let btn = document.getElementById('btn')
    let light = 'lightTheme'
    let normal = 'normalTheme'

    let changeColor = () => {
        if (ele.classList.contains(light)) {
            ele.classList.remove(light)
            ele.classList.add(normal)
        } else {
            ele.classList.add(light)
            ele.classList.remove(normal)
        }
    }

    btn.addEventListener('click', changeColor)
}
