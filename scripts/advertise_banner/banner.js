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
const subscribeBtn = document.createElement("button");
const buttonContainer = document.createElement("div");
buttonContainer.classList.add("buttonContainer");
subscribeBtn.classList.add("subscribe_btn");
const anotherBtn = document.createElement("button");
subscribeBtn.classList.add("another_btn");

buttonContainer.append(subscribeBtn, anotherBtn);
modalBox.append(closeBtn, title, text, buttonContainer);
banner.appendChild(modalBox);
document.body.appendChild(banner);

title.textContent = 'Успей подписаться на самые последние обновления мира Морренор!';
closeBtn.textContent = 'x';
subscribeBtn.textContent = 'Подписаться';
text.textContent = 'Охуительная история про говно, про малафью, про то как поебался '
anotherBtn.textContent ='В другой раз'

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

anotherBtn.addEventListener("click", closeModal);

openModal();