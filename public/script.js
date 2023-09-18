console.log("script.js loaded!")

document.querySelector("#btnLoad").addEventListener("click", () => {
    if (document.querySelector("#locationName") !== null) {
        document.querySelector("#locationName").remove()
    }
    if (document.querySelector("#locationImage") !== null) {
        document.querySelector("#locationImage").remove()
    }
    getLocation()
})


async function getLocation() {
    // await fetch("/weather").then(response => response).then(console.log)
    const res = await fetch("http://localhost:3000/location")
    const data = await res.json()
    // let locationName = data.data[Math.floor(Math.random() * data.data.length)].name
    // let locationName = data[Math.floor(Math.random() * data.length)].name.common
    // console.log(locationName)
    let locationNameDiv = document.createElement("div")
    locationNameDiv.id = "locationName"
    locationNameDiv.textContent = data.name
    document.querySelector("#locationWrapper").appendChild(locationNameDiv)
    // console.log(data[0])
    // console.log(data.length)
    let img = document.createElement("img")
    img.id = "locationImage"
    img.src = data.thumbnailUrl
    img.alt = data.nameAlt
    document.querySelector("#locationWrapper").appendChild(img)
}

// async function getLocationImage() {
//     const res = await fetch("http://localhost:3000/location")
//     const data = await res.json()
// console.log(data.value[0].thumbnailUrl)
// console.log(data.value[Math.floor(Math.random() * data.value.length)].thumbnailUrl)
// console.log(data)
// let locationImage = data.value[Math.floor(Math.random() * data.value.length)]
// let locationImageUrl = locationImage.thumbnailUrl
// let locationAlt = locationImage.name
// console.log(locationImage)

// if (document.querySelector("#locationImage") !== null) {
//     document.querySelector("#locationImage").remove()
// }

//     let img = document.createElement("img")
//     img.id = "locationImage"
//     img.src = data.thumbnailUrl
//     img.alt = data.nameAlt
//     document.querySelector("#locationWrapper").appendChild(img)
// }