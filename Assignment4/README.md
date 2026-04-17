# Weather Data Visualization Dashboard

An interactive **Weather Dashboard** built using **HTML, CSS, JavaScript, and Chart.js**.
The dashboard visualizes weather-related data such as **temperature, humidity, and rainfall** using different types of charts.

## Overview

This project demonstrates how data visualization can be used to understand and analyze weather patterns.
It displays weather data in a **user-friendly dashboard with interactive charts** that update dynamically when the user refreshes the data.

The project is designed as a simple real-life application example for **data visualization using Chart.js**.

## Features

* Interactive weather dashboard
* Multiple chart types:

  * Line chart for temperature trends
  * Bar chart for humidity levels
  * Pie chart for rainfall distribution
* Dynamic data updates using JavaScript
* Refresh button to simulate real-time weather changes
* Clean and responsive dashboard layout

## Technologies Used

* **HTML5** – Structure of the dashboard
* **CSS3** – Styling and layout
* **JavaScript (ES6)** – Dynamic functionality
* **Chart.js** – Data visualization library

## Project Structure

```
weather-dashboard/
│
├── index.html      # Main dashboard layout
├── style.css       # Styling for dashboard and charts
├── script.js       # Chart.js configuration and dynamic updates
└── README.md       # Project documentation
```

## Charts Implemented

### Temperature Chart

* Type: **Line Chart**
* Displays temperature trends throughout the week.

### Humidity Chart

* Type: **Bar Chart**
* Shows humidity levels for each day.

### Rainfall Chart

* Type: **Pie Chart**
* Displays rainfall distribution across the week.

## How the Refresh Button Works

When the **Refresh Data** button is clicked:

1. The `updateData()` function runs.
2. Random values are generated using `Math.random()` to simulate changes in weather conditions.
3. The chart datasets are updated.
4. Chart.js redraws the charts using the `.update()` method.

This simulates **real-time weather updates**.

## How to Run the Project

1. Download or clone the repository.
2. Open the project folder.
3. Open `index.html` in a web browser.

No server setup is required since this project runs entirely in the browser.

## Future Improvements

* Integrate a **real-time weather API**
* Add **city search functionality**
* Include additional charts such as wind speed and air pressure
* Improve mobile responsiveness
* Add data export options

## Author

Student Project – Data Visualization Dashboard

## License

This project is created for **educational purposes**.
