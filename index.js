if (process.env.NODE_ENV !== "production") {
    require("dotenv").config()
}

// import 'dotenv/config'
const express = require("express");
const fetch = require("node-fetch")
const app = express()
const PORT = 3000

app.use(express.static("public"))

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

app.get("/location", async (req, res) => {
    // res.send("Hello World!")
    // const fetchApi = await fetch("https://weatherapi-com.p.rapidapi.com/forecast.json?q=bekasi", {
    // const fetchApi = await fetch("https://wft-geo-db.p.rapidapi.com/v1/geo/countries?offset=0&limit=50", {
    //     "method": "GET",
    //     "headers": {
    //         'X-RapidAPI-Key': '9f2011d41fmsh023eb76e905ac08p17146cjsnaa12786b5190',
    //         'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    //     }
    // })
    const fetchApiLocation = await fetch("https://restcountries.com/v3.1/all", {
        "method": "GET"
    })

    const locationNameResponse = await fetchApiLocation.json()
    // console.log(locationNameResponse)
    // const data = res.json(locationNameResponse)

    let locationName = locationNameResponse[Math.floor(Math.random() * locationNameResponse.length)].name.common
    console.log(locationName)

    const fetchApiLocationImage = await fetch(`https://bing-image-search1.p.rapidapi.com/images/search?q=${locationName}&count=20`, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.API_KEY,
            'X-RapidAPI-Host': 'bing-image-search1.p.rapidapi.com'
        }
    })
    const locationImageResponse = await fetchApiLocationImage.json()
    let locationImage = locationImageResponse.value[Math.floor(Math.random() * locationImageResponse.value.length)]
    console.log(locationImage)
    // console.log(fetchApiLocationImage)
    // res.json(locationImage)
    res.json({
        name: locationName,
        nameAlt: locationImage.name,
        thumbnailUrl: locationImage.thumbnailUrl
    })
})

// app.get("/locationImage", async (req, res) => {
//     const fetchApi = await fetch("https://bing-image-search1.p.rapidapi.com/images/search?q=indonesia&count=20", {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': process.env.API_KEY,
//             'X-RapidAPI-Host': 'bing-image-search1.p.rapidapi.com'
//         }
//     })
//     const locationImage = await fetchApi.json()
//     res.json(locationImage)
// })