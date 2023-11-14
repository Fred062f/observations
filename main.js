// P5.JS background
function setup() {
    const myCanvas = createCanvas(window.innerWidth, window.innerHeight);
    background(0);
    frameRate(1);
}

function draw() {
    var x = random(windowWidth);
    var y = random(windowHeight);
    noStroke();
    fill(255);
    ellipse(x, y, 2, 2);
}

// Get data
data = JSON.parse(data)

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

const chart = new Chart(ctx, {
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
ctx.addEventListener("click", (event) => {
    const clickedPoint = chart.getElementsAtEventForMode(event, "point", { intersect: true });
    const datapoint = chart.data.datasets[0].data

    if (clickedPoint.length > 0) {
        const index = clickedPoint[0].index;

        const clickedData = datapoint[index];

        alert(`Number of Observations: ${clickedData}`);
    }
});

//Witnesses number animation
function animateWitnesses(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

const obj = document.querySelector(".witnesses");
animateWitnesses(obj, 0, 8805, 3000);

//Månedlige observationer barchart
monthlyObservations = JSON.parse(monthlyObservations);

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const months = monthlyObservations.map(entry => monthNames[entry["MONTH(datetime)"] -1]);
const observationCount = monthlyObservations.map(entry => entry["COUNT(*)"]);

const monthlyObservationsCtx = document.querySelector('#monthlyObservationsChart').getContext('2d');

const monthlyObservationsBarChart = new Chart(monthlyObservationsCtx, {
    type: "bar",
    data: {
        labels: months,
        datasets: [{
            label: 'Observation Count',
            data: observationCount,
            backgroundColor: 'rgba(54, 162, 235, 0.2)', // Customizable color
            borderColor: 'rgba(54, 162, 235, 1)', // Customizable color
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});