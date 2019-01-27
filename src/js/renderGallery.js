import {renderThumbnail, renderLightBoxPhoto} from "./renderItem";
import path from 'path';
import camels from "../img2/camels-desert-landscape-53537.jpg";
import desert from "../img2/daylight-desert-drought-459319.jpg";

let thumbnailList, accordion, photoPhotos;

const load = () => {
  thumbnailList = document.querySelector('#thumbnails');
  accordion = document.querySelector('#accordionEx');
  photoPhotos = document.querySelector('#photoPhotos');




  accordion.addEventListener('click', (e) => {
    let el = e.target.dataset.action;
    // alert('clicked child of accordion: ' + JSON.stringify(el));
    if (el === 'photo') {
      renderGallery(data, photoPhotos);
    }
  });
}

window.onload = load;
const pathToImages = path.resolve(__dirname, './img/camels-desert-landscape-53537.jpg');  
console.log(`the loaction of renderGallery is = ${__dirname} and path to images is ${pathToImages}`);

const data = [
  ["colored landscapte", "http://media.digitalcameraworld.com/files/2012/10/Vertorama_landscape_photography_tips_PHO17.insight02and03.vertorama.jpg"],
  ["black & white photo", "http://media.digitalcameraworld.com/files/2012/11/Black_and_white_landscape_photography_DCM131.shoot_creative.main_image_RGB.jpg"],
  ["colored desert", camels],
  ["colored desert2", desert]
];

const renderGallery = (data, location) => {
  const ul = document.createElement('ul');
  ul.classList = 'galleryList';
  location.appendChild(ul);


  data.forEach((el, index) => {  // el = {title, img} 
    renderThumbnail(el, index + 1, ul);
  });

  data.forEach((el, index) => {  // el = {title, img}  a
    renderLightBoxPhoto(el, index + 1, location, data.length);
  });
  
};