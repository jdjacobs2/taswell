// photo = {caption, href, title, img}  alt = caption
import thumbnailList from './renderGallery'; // <sector class='top2'

export const renderThumbnail = (photo, location) => {
  const li = document.createElement('li');
  li.classList = 'galleryItem';
  const markup = `
      <a class="caption" href="#${photo[0]}" data-title="${photo[1]}-title" data-description="${photo[1]}-desc">
        <img src="${photo[2]}" alt='${photo[1]}'>
      </a>
  `; 
  li.innerHTML = markup;
  location.appendChild(li);
};

export const renderLightBoxPhoto = (item, location, length) => {
  let currentItem = parseInt(item[0]);
  // console.log(`currentItem = ${currentItem} and item = *${item[0]}* and length = *${length}* and type = ${typeof item[0]}`)
  let previousItem;
  let nextItem;
  if (currentItem === 1) {
    previousItem = length;
    nextItem = 2;
  } else if(currentItem === length) {
    nextItem = 1;
    previousItem = currentItem - 1; 
  } else {
    nextItem = currentItem + 1;
    previousItem = currentItem - 1;
  }
  previousItem = previousItem.toString(10);
  nextItem = nextItem.toString(10);
  const markup = `
    <div class="lightbox" id="${item[0]}"> 
      <div class="image">
          <img src="${item[2]}">
              <a href="#${previousItem}" class="prev"></a>
              <a href="#top2" class="close"></a>
              <a href="#${nextItem}" class="next"></a>
      </div>
    </div>
  `;

 location.insertAdjacentHTML('beforeend', markup);
}; 



