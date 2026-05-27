let races = {};

fetch("/data/characters/characters.json")
    .then(response => response.json())
    .then(data => {
        races = data;
        renderCharacters();
    })

function renderCharacters() {
    Object.values(races).forEach(race => {
        const container = document.querySelector(race.container);
        if (!container) return;

        race.characters.forEach(character => {
            const card = document.createElement("div");
            card.classList.add("character-card");
            card.dataset.name = character.name;

            card.innerHTML = `
                <img src="${character.img}" alt="${character.name}">
                ${character.video ? `
                    <video src="${character.video}" muted loop playsinline preload="metadata"></video>
                ` : ""}
            `;

            container.appendChild(card);
        });
    });
}

document.addEventListener("mouseover", event => {
    const card = event.target.closest(".character-card");
    if (!card) return;

    const video = card.querySelector("video");
    if (!video) return;

    video.currentTime = 0;
    video.play();
    video.style.opacity = "1";
});

document.addEventListener("mouseout", event => {
    const card = event.target.closest(".character-card");
    if (!card) return;

    const video = card.querySelector("video");
    if (!video) return;

    video.pause();
    video.style.opacity = "0";
});

const modal = document.createElement("div");
modal.classList.add("character-modal");

modal.innerHTML = `
    <div class="character-modal__content">
        <button class="character-modal__close">×</button>
        <h2 class="character-modal__name"></h2>
        <img class="character-modal__main-img" src="" alt="">
        <div class="character-modal__stats"></div>
        <div class="character-modal__gallery"></div>
        <p class="character-modal__story"></p>
    </div>
`;

document.body.appendChild(modal);

function findCharacterByName(name) {
    for (const race of Object.values(races)) {
        const character = race.characters.find(character => character.name === name);
        if (character) return character;
    }

    return null;
}

document.addEventListener("click", event => {
    const card = event.target.closest(".character-card");
    if (!card) return;

    const character = findCharacterByName(card.dataset.name);
    if (!character) return;

    openCharacterModal(character);
});

function openCharacterModal(character) {
    const nameElement = modal.querySelector(".character-modal__name");
    const imageElement = modal.querySelector(".character-modal__main-img");
    const statsElement = modal.querySelector(".character-modal__stats");
    const galleryElement = modal.querySelector(".character-modal__gallery");
    const storyElement = modal.querySelector(".character-modal__story");

    nameElement.textContent = character.name;
    imageElement.src = character.img;
    imageElement.alt = character.name;
    storyElement.textContent = character.story;

    statsElement.innerHTML = "";
    galleryElement.innerHTML = "";

    if (character.stats) {
        for (const stat in character.stats) {
            const statDiv = document.createElement("div");
            statDiv.innerHTML = `<strong>${stat}:</strong> ${character.stats[stat]}`;
            statsElement.appendChild(statDiv);
        }
    }

    if (character.gallery) {
        character.gallery.forEach(imagePath => {
            const galleryImage = document.createElement("img");
            galleryImage.src = imagePath;
            galleryImage.alt = character.name;
            galleryElement.appendChild(galleryImage);
        });
    }

    modal.classList.add("active");
}

modal.querySelector(".character-modal__close").addEventListener("click", () => {
    modal.classList.remove("active");
});

modal.addEventListener("click", event => {
    if (event.target === modal) {
        modal.classList.remove("active");
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        modal.classList.remove("active");
    }
});