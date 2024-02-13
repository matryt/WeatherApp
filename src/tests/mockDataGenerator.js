function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}


function generateMockWeatherData() {
    const temperature = getRandomArbitrary(0, 40); // Random temperature
    const description = "Ensoleillé";
    return {
        temperature: temperature,
        description: description,
    };
}

function generateMockForecastData(numItems) {
    const forecast = [];
    for (let i =  0; i < numItems; i++) {
        const temperature = getRandomArbitrary(0, 40)
        const description = "Ensoleillé"; // Random description
        forecast.push({
            dt: Date.now() / 1000 + 10800 * i,
            main: {
                temp: temperature,
            },
            weather: [{ description: description }],

        });
    }
    return forecast;
}

export { generateMockWeatherData, generateMockForecastData };