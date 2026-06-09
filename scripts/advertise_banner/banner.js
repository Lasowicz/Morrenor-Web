const banner = document.createElement("div");
banner.classList.add("banner");

const modalBox = document.createElement("div");
modalBox.classList.add("modal", "shimmer-element");

const closeBtn = document.createElement("button");
closeBtn.classList.add("close");
closeBtn.type = "button";
closeBtn.setAttribute("aria-label", "Закрыть окно");

const brand = document.createElement("div");
brand.classList.add("brand");
brand.innerHTML = `
    <div class="brand-title">МОРРЕНОР</div>
    <div class="brand-subtitle">— ТРЕЩИНЫ МИРА —</div>
`;

const title = document.createElement("h4");
title.classList.add("title");

const text = document.createElement("p");
text.classList.add("text");

const features = document.createElement("div");
features.classList.add("features");

const featureData = [
    {
        icon: "/images/advertise_banner/icon_news.png",
        text: "Свежие новости<br>о мире Морренора"
    },
    {
        icon: "/images/advertise_banner/icon_chapters.png",
        text: "Новые главы<br>и истории"
    },
    {
        icon: "/images/advertise_banner/icon_exclusive.png",
        text: "Эксклюзивный<br>контент и события"
    }
];

featureData.forEach((item) => {
    const feature = document.createElement("button");
    feature.classList.add("feature");
    feature.type = "button";

    feature.innerHTML = `
        <span class="featureIcon">
            <img src="${item.icon}" alt="">
        </span>
        <span class="featureText">${item.text}</span>
    `;

    features.appendChild(feature);
});

const buttonContainer = document.createElement("div");
buttonContainer.classList.add("buttonContainer");

const subscribeBtn = document.createElement("button");
subscribeBtn.classList.add("subscribe_btn");
subscribeBtn.type = "button";

const anotherBtn = document.createElement("button");
anotherBtn.classList.add("another_btn");
anotherBtn.type = "button";

buttonContainer.append(subscribeBtn, anotherBtn);
modalBox.append(closeBtn, brand, title, text, features, buttonContainer);
banner.appendChild(modalBox);
document.body.appendChild(banner);

title.innerHTML = 'Успей подписаться<br>на последние обновления<br><span>Морренора!</span>';
text.textContent = 'Новости, главы, заметки о мире, события и материалы по Морренору в одном месте.';
closeBtn.textContent = '×';
subscribeBtn.textContent = 'Подписаться';
anotherBtn.textContent = 'В другой раз';

function openModal() {
    banner.classList.add("banner_open");
    modalBox.classList.add("modal_open");
}

function closeModal() {
    modalBox.classList.remove("modal_open");
    banner.classList.remove("banner_open");
}

closeBtn.addEventListener("click", closeModal);

banner.addEventListener("click", (e) => {
    if (e.target === banner) closeModal();
});

anotherBtn.addEventListener("click", closeModal);

subscribeBtn.addEventListener("click", () => {
    // Здесь можно повесить переход, отправку формы или открытие блока подписки.
    console.log("Подписка на Морренор");
});

setTimeout(openModal, 5000);
