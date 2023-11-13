data = JSON.parse(data)

console.log(data)

const map = L.map('map').setView([56, 10], 6);

let ufo = L.icon({
    iconUrl: 'https://th.bing.com/th/id/R.7b57e3b87655106ba4931d82bc4c17dc?rik=nvmZEIR5NJG%2bCQ&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f8%2fUFO-PNG-Image-HD.png&ehk=MhKMGIcCO92NmZpzxNAVMjQs%2fjT2mHV8gVYMjSq3rkI%3d&risl=&pid=ImgRaw&r=0',

    iconSize:     [35, 35], // size of the icon
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

for (let sights of data) {
    L.marker([sights.latitude, sights.longitude],{icon: ufo}).addTo(map);
}