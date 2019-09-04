const request = require('request')

const forecast = (latitude,longitude,callback) => {
    const url = 'https://api.darksky.net/forecast/ab07f66cb4f834a0d0a331f454e49f9e/' + latitude + ',' + longitude + '?units=si'
    request({ url, json: true }, (error, {body}) => {
        
        if (error) {
            callback('Unable to connect to weather service!',undefined)
            return
        }
        
        if (body.error) {
            callback('Unable to find location',undefined)
            return
        }

        callback(undefined,{
            summary: body.daily.data[0].summary,
            temperature: body.currently.temperature,
            sprecip: body.currently.precipProbability
        })
    })
}

module.exports = forecast