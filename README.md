# Weather App

A simple React weather application that allows users to search for any city and view real-time weather information using the OpenWeatherMap API.

[Live Demo](https://ambitious-stone-02eb58e00.4.azurestaticapps.net)

## Features

* Search weather by city name
* Displays temperature in Celsius
* Shows current weather condition
* Displays humidity level
* Shows wind speed
* Error handling for invalid city names or API issues

## Built With

* React
* JavaScript
* CSS
* OpenWeatherMap API

## How to run

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

## API Used

This project uses the **OpenWeatherMap Current Weather API**.

Example request:

```text
https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY&units=metric
```