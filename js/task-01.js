const listItemsEls = document.querySelectorAll(".item");

console.log(`Number of categories: ${listItemsEls.length}`)

listItemsEls.forEach((el) => {
    const categoryNameEl = el.querySelector("h2").textContent;
    const categoryItemsEl = el.querySelectorAll("li");

    console.log(`Category: ${categoryNameEl}`);
    console.log(`Elements: ${categoryItemsEl.length}`);
})