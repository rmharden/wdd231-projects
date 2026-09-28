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
    introduction.innerHTML = `
        <h1>${data.fullName}</h1>
        <p>${data.description}</p>
    `;
}

function mediaCardTemplate(info) {
    return `
        <a href="${info.link}">
            <img src="${info.image}" alt="photo of ${info.name}">
            <h3 class="media_card__title">${info.name}</h3>
        </a>
        <p>${info.description}</p>
    `;
}

setHeaderInfo(parkData);
setParkIntro(parkData);