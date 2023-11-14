data = JSON.parse(data)

console.log(data)

const map = L.map('map').setView([56, 10], 6);

let ufo = L.icon({
    iconUrl: 'https://www.thedataschool.com.au/wp-content/uploads/2018/08/UFO-2235-LightsOff.png',

    iconSize:     [35, 35], // size of the icon
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

for (let sights of data) {
    L.marker([sights.latitude, sights.longitude],{icon: ufo}).addTo(map);
}


//observations chart
observations = JSON.parse(observations);

const labels = observations.map(entry => entry["YEAR(datetime)"]);
const counts = observations.map(entry => entry["COUNT(*)"]);

const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: '# of Observations',
            data: counts,
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
            }
        },
        legend: {
            reverse: false
        },
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "bottom"
            },
            title: {
                display: true,
                text: "Ufo Observations Over Time",
            }
        },
    }
});