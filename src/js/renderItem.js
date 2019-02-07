// photo = {title, img}  alt attribute of src element = title
import thumbnailList from './renderGallery'; // <sector class='top2'

export const renderThumbnail = (photo, index, location) => {  // photos=[image, description, category]
  const li = document.createElement('li');
  li.classList = 'galleryItem';
  const markup = `
      <a class="caption" href="#${index}" data-title="${photo[1]}" data-description="${photo[1]}-desc">
        <img src="${photo[0]}" alt='${photo[1]}'>
      </a>
  `; 
  li.innerHTML = markup;
  location.appendChild(li);
};

export const renderLightBoxPhoto = (item, index, location, length) => {  // item = [image, description, category]
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
  item[1] = item[1].replace(/"/, '')
  const markup = `
    <figure class="image">
        <img src="${item[0]}">
        <figcaption class="figColor">${item[1]}</figcaption>
        <a href="#${previousItem}" class="prev"></a>
        <a href="#top2" class="close"></a>
        <a href="#${nextItem}" class="next"></a>
    </figure>
  `;
  div.innerHTML = markup;
  location.appendChild(div);
}; 



