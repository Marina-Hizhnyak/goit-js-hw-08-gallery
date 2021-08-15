import imgGallery from "./app.js"

console.log(imgGallery);

const refs = {
    list: document.querySelector(".js-gallery")

}
console.log(refs);


const createGalleryItems = (item) => {
    return item.map(({ original, description, preview }) => 
         `<li class="gallery__item">
  <a
    class="gallery__link"
    href=${original}
  >
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</li>`
).join("")
console.log(item);
}
console.log(createGalleryItems(imgGallery));
const galleryMarkup = refs.list.insertAdjacentHTML("afterbegin", createGalleryItems(imgGallery));
console.log(galleryMarkup);

