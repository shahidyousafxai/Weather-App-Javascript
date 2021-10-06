let btn = document.querySelector('.btn')
let input = document.querySelector('.input')
let res = document.querySelector('.weather-span')
let temp = document.querySelector('.degree')
let hum = document.querySelector('.humidity-span')
let city = document.querySelector('.city-span')

// btn.addEventListener('click', function () {
//   alert('l,jhddkajfjhakj')
// })
btn.addEventListener('click', show)

function show(e) {
  // alert('Please enter your city!')
  console.log(e.type)
  if (input.value === '') {
    alert('Please enter your city!')
  } else {
    const displayData = (weather) => {
      console.log(weather)
      temp.textContent = `${weather.main.temp}`
      res.textContent = `${weather.weather[0].description}`
      hum.textContent = `${weather.main.humidity}`
      city.textContent = `${input.value}`
    }
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=3a49388c922304d5514233a2bdabf57e`
    )
      .then((Response) => Response.json())
      .then(displayData)
      .catch((err) => alert('Invalid City'))
  }
}
