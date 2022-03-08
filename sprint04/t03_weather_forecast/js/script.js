let city = "Kharkiv";
let apiKey = "a13b7f9a2b31b59f1dd1b2018f0932e2";
function get_city()
{
  city = document.getElementById("city").value;
  console.log(city);
  input_data(city);
}
function input_data(name)
{
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${name}&lang=ru&units=metric&appid=${apiKey}`;
  axios.get(url).then(res => {
  // Вывод города
  document.querySelector('.city').innerHTML = res.data.name
  // Вывод температуры
  document.querySelector('.temp').innerHTML = res.data.main.temp
  // Вывод влажности
  document.querySelector('.humidity').innerHTML = res.data.main.humidity
  // Вывод скорости ветра
  document.querySelector('.wind').innerHTML = res.data.wind.speed
})
}
input_data(city);
