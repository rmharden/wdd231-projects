/*CURRENT JS to SAVE*/
import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

const disclaimer = document.querySelector(".disclaimer > a");
disclaimer.href = parkData.url;
disclaimer.innerHTMl = parkData.fullName;

function parkInfoTemplate(info) {
    return `<a href='/' class="park-title">${info.name}</a>
    <p class="park-details">
        <span>${info.designation}</span>
        <span>${info.states}</span>
    </p>`;
}