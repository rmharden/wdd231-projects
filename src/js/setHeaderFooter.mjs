import { parkInfoTemplate, parkFooterTemplate } from "./templates.mjs";

function setHeaderInfo(data) {
    const disclaimer = document.querySelector(".disclaimer > a");
    disclaimer.href = data.url;
    disclaimer.innerHTML = data.fullName;
    document.querySelector("head > title").textContent = data.fullName;
    document.querySelector(".park-container > img").src = data.images[0].url;
    document.querySelector(".park_content").innerHTML = parkInfoTemplate(data);
}

function setParkFooter(data) {
    const parkFooter = document.querySelector("#park-footer");
    parkFooter.innerHTML = parkFooterTemplate(data);
}

export default function setHeaderFooter(parkData) {
    setHeaderInfo(parkData);
    setParkFooter(parkData);
}