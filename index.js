if (process.env.NODE_ENV !== "production") {
    require("dotenv").config()
}

const express = require("express");
const fetch = require("node-fetch")
const app = express()
const PORT = 3000

app.use(express.static("public"))

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

app.get("/location", async (req, res) => {
    const fetchApiLocation = await fetch("https://restcountries.com/v3.1/all", {
        "method": "GET"
    })

    const locationNameResponse = await fetchApiLocation.json()

    let locationName = locationNameResponse[Math.floor(Math.random() * locationNameResponse.length)].name
    let locationNameCommon = locationName.common
    let locationNameOfficial = locationName.official

    const fetchApiLocationImage = await fetch(`https://bing-image-search1.p.rapidapi.com/images/search?q=${locationNameCommon}&count=20`, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.API_KEY,
            'X-RapidAPI-Host': 'bing-image-search1.p.rapidapi.com'
        }
    })
    const locationImageResponse = await fetchApiLocationImage.json()
    let locationImage = locationImageResponse.value[Math.floor(Math.random() * locationImageResponse.value.length)]

    res.json({
        name: locationNameCommon,
        nameOfficial: locationNameOfficial,
        nameAlt: locationImage.name,
        thumbnailUrl: locationImage.thumbnailUrl
    })
})