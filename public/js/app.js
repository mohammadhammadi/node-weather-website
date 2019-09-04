const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit',(e) => {
    e.preventDefault();

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    const location = search.value
    
    fetch('/weather?address=' + location).then((response) => {
    response.json().then((data) => {

        if(data.error)
        {
            messageOne.textContent = data.error
            return
        }
        messageOne.textContent = data.location + data.forecastData.timezone
        messageTwo.textContent = data.forecastData.summary + 'It is currently ' + data.forecastData.temperature + ' degrees out. There is a ' + data.forecastData.sprecip + '% chance of rain.'
        
    })
})
})
