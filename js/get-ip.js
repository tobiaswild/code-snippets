let ipItem = document.getElementById('ip')

fetch('https://ip-api.io/json')
	.then((r) => r.text())
	.then((r) => {
		let loc = JSON.parse(r)
		let ip = loc.ip
		ipItem.innerHTML = ip
	})
