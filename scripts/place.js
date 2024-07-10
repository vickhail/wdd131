document.addEventListener('DOMContentLoaded', () => {
    const lastModified = document.lastModified;
    const lastModifiedElem = document.getElementById('last-modified');
    lastModifiedElem.textContent = lastModified;

    const temperature = 10;
    const windSpeed = 5;

    const windChillElem = document.getElementById('windchill');
    if (temperature <= 10 && windSpeed > 4.8) {
        windChillElem.textContent = calculateWindChill(temperature, windSpeed).toFixed(1) + '°C';
    } else {
        windChillElem.textContent = 'N/A';
    }
});

function calculateWindChill(temperature, windSpeed) {
    return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed,
        0.16);
}