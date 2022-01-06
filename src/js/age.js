window.onload = function () {
    setInterval(() => {
        let time =
            (new Date() - new Date(1107333960)) /
                (1000 * 60 * 60 * 24 * 365.25) -
            35 // idk why this here but it has to be there
        document.getElementById('age').innerText = time
            .toString()
            .substring(0, 12)
    }, 50)
}
