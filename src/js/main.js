/*CURRENT JS to SAVE*/
import { getParkData } from "./parkService.mjs";

const parkData = getParkData();


function parkInfoTemplate(info) {
    return `<a href='/' class="park-title">${info.name}</a>
    <p class="park-details">
        <span>${info.designation}</span>
        <span>${info.states}</span>
    </p>`;
}

const disclaimer = document.querySelector(".disclaimer > a");
disclaimer.href = parkData.url;
disclaimer.innerHTMl = parkData.fullName;
document.querySelector("head > title").textContent = parkData.fullName;
document.querySelector("park-container > img").src = parkData.images[0].url;
document.querySelector(".park_content").innerHTML = parkInfoTemplate(parkData);