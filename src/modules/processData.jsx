import {descriptions} from "../objects/weatherDescriptions";

const getCurrentWeather = (data, suntimes) => {
    let currentData = data.current;
    return {
        "temp": Math.round(currentData.temperature_2m),
        "precipitation": Math.round(currentData.precipitation),
        "weather": getWeatherDescription(currentData.weather_code, currentData.time, suntimes),
        "wind_speed": Math.round(currentData.wind_speed_10m),
        "wind_direction": getWindDirection(currentData.wind_direction_10m),
        "UV_index": currentData.uv_index,
        "time": currentData.time
    }
}

const getHourlyForecast = (data, suntimes) => {
    let hourlyData = data.hourly;
    let result = [];
    let index = 0;
    while (hourlyData.time[index] < data.current.time) {
        index++;
    }
    for (let i = index; i < 24; i++) {
        let values = {"temp":Math.round(hourlyData.temperature_2m[i]),
            "precipitation_prob":hourlyData.precipitation_probability[i],
            "precipitation": Math.round(hourlyData.precipitation[i]),
            "weather": getWeatherDescription(hourlyData.weather_code[i], hourlyData.time[i], suntimes),
            "wind_speed": Math.round(hourlyData.wind_speed_10m[i]),
            "wind_direction": getWindDirection(hourlyData.wind_direction_10m[i]),
            "UV_index": hourlyData.uv_index[i],
            "time": hourlyData.time[i],
            "timezone": data.timezone,
            "weatherImage": getWeatherImage(hourlyData.weather_code[i], hourlyData.time[i], suntimes)
        }
        result.push(values);
    }
    return result;
}

const getDailyForecast = (data, suntimes) => {
    let dailyData = data.daily;
    let result = [];
    for (let i = 1; i < 7; i++) {
        let values = {
            "precipitation": Math.round(dailyData.precipitation_sum[i]),
            "min_temp": Math.round(dailyData.temperature_2m_min[i]),
            "max_temp": Math.round(dailyData.temperature_2m_max[i]),
            "weather": getWeatherDescription(dailyData.weather_code[i], dailyData.time[i]),
            "wind_direction": getWindDirection(dailyData.wind_direction_10m_dominant[i]),
            "wind_speed": Math.round(dailyData.wind_speed_10m_max[i]),
            "time": dailyData.time[i],
            "timezone": data.timezone,
            "weatherImage": getWeatherImage(dailyData.weather_code[i], dailyData.time[i])
        }
        result.push(values);
    }
    return result;
}

const getWeatherDescription = (code, time, suntimes) => {
    if (suntimes == null || (time < suntimes[1] && time > suntimes[0])) return descriptions["day"][code.toString()]["description"];
    return descriptions["night"][code.toString()]["description"]
}

const getWeatherImage = (code, time, suntimes) => {
    if (suntimes == null || (time < suntimes[1] && time > suntimes[0])) return descriptions["day"][code.toString()]["image"];
    return descriptions["night"][code.toString()]["image"]
}

const getWindDirection = (angle) => {
    if (angle < 45) return "N";
    if (angle < 90) return "NE";
    if (angle < 135) return "E";
    if (angle < 180) return "SE";
    if (angle < 225) return "S";
    if (angle < 270) return "SO";
    if (angle < 315) return "O";
    return "NO";
}

export const fillContent = (weatherData, sunData, setWeatherData, setDailyData, setHourlyData) => {
    setWeatherData(getCurrentWeather(weatherData, sunData));
    setHourlyData(getHourlyForecast(weatherData, sunData));
    setDailyData(getDailyForecast(weatherData, sunData));

}