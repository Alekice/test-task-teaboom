const OPTIONS = {
    "01306": {
        "price-old": "349,20",
        "price-new": "326,40"
    },
    "01307": {
        "price-old": "1 646",
        "price-new": "1 432"
    },
    "01308": {
        "price-old": "2 592",
        "price-new": "2 064"
    },
    "01309": {
        "price-old": "8 710",
        "price-new": "6 320"
    },
};

let optionItems = document.querySelectorAll(".product-card__options-item");

optionItems.forEach(item => {
    item.addEventListener("click", (e) => {
        let clickedElement = e.target;
        let art = clickedElement.dataset.itemArt;
        let clickedCard = clickedElement.closest(".product-card");

        if (!clickedElement.classList.contains("active")) {
            optionItems.forEach(item => {
                item.classList.remove("active");
            });
            clickedElement.classList.add("active");
            clickedCard.querySelector('[data-item="art"]').textContent = art;
            clickedCard.querySelector('[data-item="price-old"]').textContent = OPTIONS[art]["price-old"];
            clickedCard.querySelector('[data-item="price-new"]').textContent = OPTIONS[art]["price-new"];
        }
    });
});