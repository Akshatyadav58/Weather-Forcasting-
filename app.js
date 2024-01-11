const API_KEY = `48843550f0105dc6216f2d5eab427696`;
const form = document.querySelector("form");
const search = document.querySelector("#search");
const weather = document.querySelector("#weather");

const getWeather = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    return showWeather(data);
};

const showWeather = (data) => {
    console.log(data);
    weather.innerHTML = `
        <div>
            <img src="https://openweathermap.org/img/wn/04n@2x.png" alt="error">
        </div>
        <div>
            <h2>${data.main.temp} ℃</h2>
            <h4>${data.weather[0].main}</h4>
        </div>
    `;
};

form.addEventListener("submit", function (event) {
    console.log(search.value); // Corrected typo: vslue to value
    event.preventDefault();
    getWeather(search.value);
});
