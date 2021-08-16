import imgGallery from "./app.js"

console.log(imgGallery);
// Создание и рендер разметки по массиву данных galleryItems из app.js и предоставленному шаблону.

const refs = {
    list: document.querySelector(".js-gallery"),
    img: document.querySelector(".lightbox__image"),
    backdrop: document.querySelector(".js-lightbox"),
    button: document.querySelector(".lightbox__button"),
    modal: document.querySelector(".lightbox"),
    overlay: document.querySelector(".lightbox__overlay"),
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

//слушатели

refs.list.addEventListener("click", onClick);
refs.button.addEventListener("click", btnModalClose)
// refs.overlay.addEventListener("click", onBackdropClickCloseModal);

// Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.
// Открытие модального окна по клику на элементе галереи.
// Подмена значения атрибута src элемента img.lightbox__image.

function onClick(e) { 
    e.preventDefault();
    console.log(e.target);
    if (e.target.nodeName !== "IMG") { 
        return
    }
  refs.backdrop.classList.add('is-open');
  refs.img.src = e.target.dataset.source;
  refs.img.alt = e.target.alt;
}

// Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].
// Очистка значения атрибута src элемента img.lightbox__image. 

function btnModalClose(e) {
    e.preventDefault();
    refs.backdrop.classList.remove('is-open');
    refs.img.src = '';
}

// Закрытие модального окна по клику на div.lightbox__overlay.

// Закрытие модального окна по нажатию клавиши ESC.
// Пролистывание изображений галереи в открытом модальном окне клавишами "влево" и "вправо".