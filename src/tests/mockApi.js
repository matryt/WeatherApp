import {generateMockWeatherData, generateMockForecastData} from "./mockDataGenerator";

export const getMockWeather = (setWeatherData) => {
    let result = generateMockWeatherData();
    setWeatherData({temperature: result.temperature, description:result.description});
}

export const getMockForecast = (setForecastData) => {
    setForecastData(generateMockForecastData(3));
}