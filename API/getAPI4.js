document.getElementById("weatherForm").addEventListener("submit", (event) => {
    event.preventDefault(); // stop form from refreshing page
    getData();
});

const getData = async () => {
    try {
        let city = document.getElementById("cityInput").value.trim();
        if (!city) {
            alert("Please enter a city name!");
            return;
        }

        // API link dynamically
        const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=8f87151aa8e3a496171fb38f0f4f45a7`;

        // Use proxy for CORS
        const proxyUrl = "https://api.allorigins.win/raw?url=" + encodeURIComponent(url);

        const response = await fetch(proxyUrl);
        const res = await response.json();
        console.log(res);

        let tbody = document.getElementById("tbody");
        tbody.innerHTML = ""; // clear old data

        let tr = document.createElement("tr");

        let tempTD = document.createElement("td");
        let feelTD = document.createElement("td");
        let maxTD = document.createElement("td");
        let minTD = document.createElement("td");
        let preTD = document.createElement("td");
        let humTD = document.createElement("td");
        let seaTD = document.createElement("td");
        let gtrandTD = document.createElement("td");

        tempTD.innerHTML = res.main.temp;
        feelTD.innerHTML = res.main.feels_like;
        maxTD.innerHTML = res.main.temp_max;
        minTD.innerHTML = res.main.temp_min;
        preTD.innerHTML = res.main.pressure;
        humTD.innerHTML = res.main.humidity;
        seaTD.innerHTML = res.main.sea_level ?? "N/A";
        gtrandTD.innerHTML = res.main.grnd_level ?? "N/A";

        tr.appendChild(tempTD);
        tr.appendChild(feelTD);
        tr.appendChild(maxTD);
        tr.appendChild(minTD);
        tr.appendChild(preTD);
        tr.appendChild(humTD);
        tr.appendChild(seaTD);
        tr.appendChild(gtrandTD);

        tbody.appendChild(tr);

    } catch (err) {
        console.error("Error fetching weather:", err);
        alert("❌ Could not fetch weather. Please check city name or try again later.");
    }
};
