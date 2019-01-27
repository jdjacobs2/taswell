// photo = {title, img}  alt attribute of src element = title
import thumbnailList from './renderGallery'; // <sector class='top2'

export const renderThumbnail = (photo, index, location) => {
  const li = document.createElement('li');
  li.classList = 'galleryItem';
  const markup = `
      <a class="caption" href="#${index}" data-title="${photo[0]}-title" data-description="${photo[0]}-desc">
        <img src="${photo[1]}" alt='${photo[0]}'>
      </a>
  `; 
  li.innerHTML = markup;
  location.appendChild(li);
};

export const renderLightBoxPhoto = (item, index, location, length) => {
  let currentItem = index;
  index = index.toString();
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
  const div = document.createElement('div');
  div.id = `${index}`;
  div.classList = 'lightbox'
  const markup = `
    <div class="image">
        <img src="${item[1]}">
            <a href="#${previousItem}" class="prev"></a>
            <a href="#top2" class="close"></a>
            <a href="#${nextItem}" class="next"></a>
    </div>
  `;
  div.innerHTML = markup;
  location.appendChild(div);
}; 



