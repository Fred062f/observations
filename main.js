// dashboard.JS background
function setup() {
    let canvas = createCanvas(window.innerWidth, document.body.scrollHeight);
    canvas.position(0, 0)
    canvas.parent('p5')
    //canvas.parent('second-section')
    canvas.style('z-index', '-1')
    background(0);
    frameRate(7);
}

function draw() {
    let x = random(windowWidth);
    let y = random(document.body.scrollHeight);
    noStroke();
    fill(255);
    ellipse(x, y, 3, 3);
}

// Get data
data = JSON.parse(data)

const map = L.map('map').setView([56, 10], 6);

let ufo = L.icon({
    iconUrl: 'https://www.thedataschool.com.au/wp-content/uploads/2018/08/UFO-2235-LightsOff.png',

    iconSize:     [35, 35], // size of the icon
});

L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    className: 'map-tiles'
}).addTo(map);

for (let sights of data) {
    L.marker([sights.latitude, sights.longitude],{icon: ufo}).addTo(map);
}


//observations chart (Viktor)
observations = JSON.parse(observations);
//getting the two elements needed from JSON in data.js file
const labels = observations.map(entry => entry["YEAR(datetime)"]);
const counts = observations.map(entry => entry["COUNT(*)"]);
//creating chart with html element
const ctx = document.getElementById('myChart');
//chart clarification and data
const chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: '# of Observations',
            data: counts,
            borderWidth: 1,

}],
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    display: false
                }
            },
            x: {
                grid: {
                    display: false
                }
            },
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
//event listener for popup when datapoint is clicked (viktor)
ctx.addEventListener("click", (event) => {
    const clickedPoint = chart.getElementsAtEventForMode(event, "point", { intersect: true });
    const datapoint = chart.data.datasets[0].data

    if (clickedPoint.length > 0) {
        const index = clickedPoint[0].index;

        const clickedData = datapoint[index];
        //alert on screen
        alert(`Number of Observations: ${clickedData}`);
    }
});

//Witnesses number animation
const span = document.querySelector('.witnesses')
let array = Array.from(Array(8805+1).keys()).slice(1)

for (let i = 0; i < array.length; i++) {
    setTimeout(function() {
        span.innerHTML = `${array[i]}`;
    },i * 0.5)
}

// Monthly Observations Bar Chart (Nikolaus)
monthlyObservations = JSON.parse(monthlyObservations);

// Mapping month names and observation counts from the JSON data
const monthNames = ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const months = monthlyObservations.map(entry => monthNames[entry["MONTH(datetime)"] -1]);
const observationCount = monthlyObservations.map(entry => entry["COUNT(*)"]);

// Retrieving the canvas element for the monthly observations bar chart
const monthlyObservationsCtx = document.querySelector('#monthlyObservationsChart').getContext('2d');

// Creating the monthly observations bar chart using Chart.js
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
                beginAtZero: true,
                grid: {
                    display: false
                }
            },
            x: {
                grid: {
                    display: false
                },
            }
        }
    }
});

//button (viktor) (css inspiration: https://codepen.io/rdallaire/pen/neMvbX)
//get button
let topButton = document.querySelector("#top-button");

window.onscroll = function() {scrollFunction()};
// When the user scrolls down 20px from the top of the document, show the button
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
topButton.addEventListener("click", (event) => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
})