console.log("script.js loaded!")

document.querySelector("#btnLoad").addEventListener("click", () => {
    if (document.querySelector("#locationName") !== null) {
        document.querySelector("#locationName").remove()
    }
    if (document.querySelector("#locationImage") !== null) {
        document.querySelector("#locationImage").remove()
    }
    if (document.querySelector("#locationOfficialName") !== null) {
        document.querySelector("#locationOfficialName").remove()
    }
    getLocation()
})


async function getLocation() {
    const res = await fetch("http://localhost:3000/location")
    const data = await res.json()

    let locationNameDiv = document.createElement("div")
    locationNameDiv.id = "locationName"
    locationNameDiv.textContent = data.name
    document.querySelector("#locationWrapper").appendChild(locationNameDiv)

    let img = document.createElement("img")
    img.id = "locationImage"
    img.src = data.thumbnailUrl
    img.alt = data.nameAlt
    document.querySelector("#locationWrapper").appendChild(img)

    let locationOffcialNameDiv = document.createElement("div")
    locationOffcialNameDiv.id = "locationOfficialName"
    locationOffcialNameDiv.textContent = data.nameOfficial
    document.querySelector("#locationWrapper").appendChild(locationOffcialNameDiv)
}