const request = require('request')

const geocode = (address,callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYWxnYXRyb3NzIiwiYSI6ImNqem80ZWw0dzAweDYzY3J6eGs0bDJ1d2UifQ.9sYy-7aTHbYeUrAabjBANQ&limit=1&lang=en'
    request({url,json:true},(error,{body}) => {
        
        if(error)
        {
            callback('Unable to connect to location services!')
            return
        }
        
        if (body.message) {
            callback(body.message)
            return
        }

        if (body.features.length === 0) {
            callback('Unable to find location. Try another search.')
            return
        } 
        
        callback(undefined,{
            latitude: body.features[0].center[0],
            longitude: body.features[0].center[1],
            location: body.features[0].place_name
        })

    })
}

module.exports = geocode