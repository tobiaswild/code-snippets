let btn = document.getElementById('btn')
let clsLst = document.getElementById('main')
let lgtThm = 'theme-light'

let changeColor = () => {
    if (clsLst.classList.contains(lgtThm)) {
        clsLst.classList.remove(lgtThm)
    } else {
        clsLst.classList.add(lgtThm)
    }
}

btn.addEventListener('click', changeColor)
