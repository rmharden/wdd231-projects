export function parkInfoTemplate(info) {
    return `<a href='/' class="park-title">${info.name}</a>
    <p class="park-details">
        <span>${info.designation}</span>
        <span>${info.states}</span>
    </p>`;
}

export function mediaCardTemplate(info) {
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