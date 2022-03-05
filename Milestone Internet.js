let descriptionTagEl = document.getElementById("descriptionTag");
let moreButtonEl = document.getElementById("moreButton");
let lessButtonEl = document.getElementById("lessButton");

function moreText() {
    descriptionTagEl.classList.remove("description")
    descriptionTagEl.classList.add("description-more")
    moreButtonEl.classList.add("d-none")
    lessButtonEl.classList.remove("d-none")
}

function lessText() {
    descriptionTagEl.classList.add("description")
    descriptionTagEl.classList.remove("description-more")
    moreButtonEl.classList.remove("d-none")
    lessButtonEl.classList.add("d-none")
}