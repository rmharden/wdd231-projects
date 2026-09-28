import { getParkData } from "./parkService.mjs";

const parkData = getParkData();


function parkInfoTemplate(info) {
    return `<a href='/' class="park-title">${info.name}</a>
    <p class="park-details">
        <span>${info.designation}</span>
        <span>${info.states}</span>
    </p>`;
}
function setHeaderInfo(data) {
    const disclaimer = document.querySelector(".disclaimer > a");
    disclaimer.href = data.url;
    disclaimer.innerHTML = data.fullName;
    document.querySelector("head > title").textContent = data.fullName;
    document.querySelector(".park-container > img").src = data.images[0].url;
    document.querySelector(".park_content").innerHTML = parkInfoTemplate(data);
}

function setParkIntro(data) {
    const introduction = document.querySelector(".intro");
    introduction.innerHTML = data.fullName;
    introduction.innerHTML = data.description;
}

setHeaderInfo(parkData);