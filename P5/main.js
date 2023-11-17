//Witnesses number animation
const span = document.querySelector('.row-container h2 span')
let array = Array.from(Array(8805+1).keys()).slice(1)

for (let i = 0; i < array.length; i++) {
    setTimeout(function() {
        span.innerHTML = `${array[i]}`;
    }, 1000)
}

// Initialize starry background
function setup() {
    let canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.position(0, 0)
    document.body.background = canvas;
    canvas.style('z-index', '-1')
    background(0);
    frameRate(2);
}

function draw() {
    let x = random(windowWidth);
    let y = random(window.innerHeight);
    noStroke();
    fill(255);
    ellipse(x, y, 3, 3);
}

// Leaflet map
data = JSON.parse(data)

const map = L.map('map').setView([56.5, 11], 7);

let greenufo = L.icon({
    iconUrl: 'https://www.thedataschool.com.au/wp-content/uploads/2018/08/UFO-2235-LightsOff.png',

    iconSize: [35, 35], // size of the icon
});

let redUfo = L.icon({
    iconUrl: 'https://cdn.pixabay.com/photo/2020/05/17/11/54/cartoon-5181269_1280.png',

    iconSize: [35, 35], // size of the icon
});

const CartoDB_DarkMatter = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 20
});

L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 20
}).addTo(map);

for (let sights of data) {
    if (sights.latitude === 55.8403 && sights.longitude === 12.4288) {
        L.marker([sights.latitude, sights.longitude],{icon: redUfo}).addTo(map).bindPopup(`${sights.latitude} ${sights.longitude}`).bindPopup("Min mand og jeg kommer kørende fra Allerød ad kongevejen, da vi ser en ting hænge i luften og skiftevis blinke 3 hvide lys i venstre side 3 røde lys i højest side, mens den holder stille i luften. Da vi kommer nærmere, begynder den at flyve mod Allerød over Høvelte. Pludselig kommer der en flyvende og holder stille i luften over McDonald's. Vi kører ind på tanken overfor for at se, hvad det er der hænger i luften. Efter ca. 1 min.begynder den at flyve samme retning som den første. De var ca. 200 - 300 meter oppe i luften.");
    }
    else if (sights.latitude === 56.7057 && sights.longitude === 11.5459) {
        L.marker([sights.latitude, sights.longitude],{icon: redUfo}).addTo(map).bindPopup(`${sights.latitude} ${sights.longitude}`).bindPopup("På en tyndtskyet himmel dukker et stort diffust objekt op under Capella. Bevægelse h mod v og skråt ned mod horisonten i lige eller svagt nedadbuet bane.\n" +
            "Virker som klart lys, som oplyser skyerne bagfra. I korte øjeblikke ses obj imellem skyer som lodret compoundbueformet lysstribe, med buen forrest. forsvinder lavt, men fader ud over horisonten.\n" +
            "Banehastighed som satellit. Diameter målt som lillefinger i strakt arm, som fuldmånen. Set også i 10x40 prismekikkert. Med blotte øje ligner det diffuse område et aftagende månesegl på højkant.\n" +
            "Set af tre uafhængige grupper med i alt 7 personer. Der foreligger tegninger fra flere observatører. Obs. i Ørkenen på Anholt efter DarkSky arrangement.\n" +
            "Der var et tysk flådefartøj, fregatten Al Aziz, i den pågældende retning ifølge appen MarineTraffic, undervejs Kiel-Wilhelmshafen.");
    }
    else if (sights.latitude === 56.1537 && sights.longitude === 10.2008) {
        L.marker([sights.latitude, sights.longitude],{icon: redUfo}).addTo(map).bindPopup(`${sights.latitude} ${sights.longitude}`).bindPopup("Begge to fløj helt parallelt og synkront.\n" +
            "De virkede til at være trekantet, eller ligne vores fly. Retning vest syd vest.\n" +
            "Det så ud som om, de havde kraftig varmepåvirkning i snuden som lidt mindre end, når en meteor bryder ind i atmosfæren.");
    }
    else if (sights.latitude === 55.7024  && sights.longitude === 12.5792) {
        L.marker([sights.latitude, sights.longitude],{icon: redUfo}).addTo(map).bindPopup(`${sights.latitude} ${sights.longitude}`).bindPopup("Sidder i min have da jeg ser to lysende cirkler, der roterer om hinanden. De flyver i en lige linje i høj fart.\n" +
            "Muligvis en drone, men farten og højden og måden de to cirkler bevægede sig på, virkede ikke som en drone.");
    }
    else if (sights.latitude === 55.6977  && sights.longitude === 12.5464) {
        L.marker([sights.latitude, sights.longitude],{icon: redUfo}).addTo(map).bindPopup(`${sights.latitude} ${sights.longitude}`).bindPopup("Sidder ofte og kigger ud af vinduet i mørke.\n" +
            "Jeg ser 4 eller 5 lys der flyver tæt på hinanden, så jeg checker FlightRadar appen for at se, hvilke fly der flyver så tætte, men der er ingen fly i området.\n" +
            "Da de flyver tættere i min retning, kan jeg se, at de er hestesko-agtigt eller U-formet med mange små turkis og røde lys på „vingerne“.\n" +
            "Jeg begynder at tænke, om det kunne være mærkeligt formet droner, men de snurrer rundt om sig selv i forskellige retninger og har aldrig set en drone langsomt dreje rundt og flyve på hovedet.\n" +
            "Jeg tænker også om, det kunne være balloner, da det kunne forklare bevægelsen (at skifte positioner med hinanden og snurre rundt), men formen og alle de kraftige lys på dem er ikke normalt for balloner.\n" +
            "De flyver over min bygning, og så er det væk.");
    }
    else {
        L.marker([sights.latitude, sights.longitude],{icon: greenufo}).addTo(map).bindPopup(`${sights.latitude} ${sights.longitude}`);
    }
}

// Chart
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
                display: false
            }
        },
    }
});

// Chart
monthlyObservations = JSON.parse(monthlyObservations);

const monthNames = ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
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
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(201, 203, 207, 0.2)',
                'rgba(201, 203, 207, 0.2)',
                'rgba(201, 203, 207, 0.2)',
                'rgba(201, 203, 207, 0.2)',
                'rgba(201, 203, 207, 0.2)',
                'rgba(201, 203, 207, 0.2)',
                'rgba(201, 203, 207, 0.2)',
                'rgba(201, 203, 207, 0.2)',
                'rgba(201, 203, 207, 0.2)',
                'rgba(201, 203, 207, 0.2)',
                'rgba(201, 203, 207, 0.2)'
            ], // Customizable color
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(201, 203, 207, 0.2)',
                'rgba(201, 203, 207, 0.2)',
                'rgba(201, 203, 207, 0.2)',
                'rgba(201, 203, 207, 0.2)',
                'rgba(201, 203, 207, 0.2)',
                'rgba(201, 203, 207, 0.2)',
                'rgba(201, 203, 207, 0.2)',
                'rgba(201, 203, 207, 0.2)',
                'rgba(201, 203, 207, 0.2)',
                'rgba(201, 203, 207, 0.2)',
                'rgba(201, 203, 207, 0.2)'
            ], // Customizable color
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: false
            }
        },
    }
});