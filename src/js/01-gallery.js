// підключаю настройки для бібліотеки

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const listEl=document.querySelector('.gallery')
console.log(listEl)



// створюю розмітку 

const itemEl=creatGalery()

function creatGalery(){

return galleryItems.map(({preview, original,description})=>{
    return `<li class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</li>`}).join('')

};

// добавляю створену розмітку в HTML файл 

listEl.insertAdjacentHTML('beforeend', itemEl);

// при роботі з simplelightbox необовязково ставити прослуховувача події
   //  так як дана бібліотека робить все сама відкриває модальне вікно-закриває-і клавіатура працює 
   // добавляю прослуховувача подій на галерею , Я  

   // listEl.addEventListener('click', onClickGalery)

   // //у функції для кліку
   // // 1. забороняю автоматично загружати картинки
   // // 2. клік робимо тільки там де є клас gallery__image
   // // 3. при кліку на картинку в консоль виводимо дата атрибат адрес великої картинки

   // function onClickGalery(event){

   //    event.preventDefault()

   //   if(!event.target.classList.contains('gallery__image')){
   //     return;
   //   }

   //   const dataSource = event.target.dataset.source
   //   console.log(dataSource)
   // }

// код бібліотеки

new SimpleLightbox('.gallery a', { animationSpeed:250, captionsData:"alt"});


