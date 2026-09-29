import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

const parkInfoLinks = [
    {
        name: "Current Conditions &#x203A;",
        link: "conditions.html",
        image: parkData.images[2].url,
        description: "See what conditions to expect in the park before leaving on your trip!"
    },
    {
        name: "Fees and Passes &#x203A;",
        link: "fees.html",
        image: parkData.images[3].url,
        description: "Learn about the fees and passes that are available."
    },
    {
        name: "Visitor Centers &#x203A;",
        link: "visitor_centers.html",
        image: parkData.images[9].url,
        description: "Learn about the visitor centers in the park."
    }
]

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
        <div class="media-card">
             <a href="${info.link}">
            <img src="${info.image}" alt="photo of ${info.name}">
            <h3 class="media-card__title">${info.name}</h3>
            </a>
            <p>${info.description}</p>
        </div>
    `;
}


/*https://www.w3schools.com/jsref/jsref_map.asp*/
/*This is an example from w3schools on how to do a map. I haven't heard of it before and needed to look it up.*/

function setParkInfo(data) {
    const mediaInfo = document.querySelector(".info");
    const information = parkInfoLinks.map(mediaCardTemplate);
    mediaInfo.innerHTML = information.join("");
}

function parkFooterTemplate(data) {
    const voice =data.contacts.phoneNumbers.find((phone) => phone.type === "Voice");
    const mailing =data.addresses.find((address) => address.type === "Mailing");
    return `
        <section class="contact">
            <h3>Contact Info</h3>
            <h4>Mailing Address:</h4>
            <div>
                <p>${mailing.line1}</p>
                <p>${mailing.city}, ${mailing.stateCode} ${mailing.postalCode}</p>
            </div>
            <h4>Phone:</h4>
            <p>${voice}</p>
        <section>
    `;
}

setHeaderInfo(parkData);
setParkIntro(parkData);
setParkInfo(parkData);