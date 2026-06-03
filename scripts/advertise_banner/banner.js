const banner = document.createElement("div");
banner.classList.add("banner");
const modalBox = document.createElement("div");
modalBox.classList.add("modal");
modalBox.classList.add("shimmer-element");
const closeBtn = document.createElement("button");
closeBtn.classList.add("close");
const title = document.createElement("h4");
title.classList.add("title");
const text = document.createElement("p");
text.classList.add("text");

title.textContent = 'Здесь нужно разместить рекламную информацию типа ПОДПИШИСЬ, СТАВЬ ЛОЙС';

closeBtn.textContent = 'x';

modalBox.append(closeBtn, title, text);
banner.appendChild(modalBox);
document.body.appendChild(banner);

function openModal() {
    banner.style.visibility = "visible";
    banner.style.opacity = "1";
    modalBox.style.transform = "translateY(0)";
}

function closeModal() {
    banner.style.opacity = "0";
    modalBox.style.transform = "translateY(-50px)";
    setTimeout(() => {
        banner.style.visibility = "hidden";
    }, 300);
}

closeBtn.addEventListener("click", closeModal);
banner.addEventListener("click", (e) =>{
    if(e.target === banner) closeModal();
});

openModal();

//setTimeout(openModal, 5000);