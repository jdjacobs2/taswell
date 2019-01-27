import {renderThumbnail, renderLightBoxPhoto} from "./renderItem";
import path from 'path';
import camels from "../img2/camels-desert-landscape-53537.jpg";
import desert from "../img2/daylight-desert-drought-459319.jpg";

let thumbnailList, accordion, photo;

const load = () => {
  thumbnailList = document.querySelector('#thumbnails');
  accordion = document.querySelector('#accordionEx');
  photo = document.querySelector('#photo');

window.onload = load;


  // photo.addEventListener('click', () => {
  //   // alert('photo clicked');
  //   const photoPhotos = document.querySelector('#photoPhotos')
  //   renderGallery(data, photoPhotos);
  // });

  accordion.addEventListener('click', (e) => {
    let el = e.target.dataset.action;
    // alert('clicked child of accordion: ' + JSON.stringify(el));
    if (el === 'photo') {
     renderGallery(data, photoPhotos);
   }
  });
}



const pathToImages = path.resolve(__dirname, './img/camels-desert-landscape-53537.jpg');  

// Not yet used:
// const images = [
//   "http://media.digitalcameraworld.com/files/2012/10/Vertorama_landscape_photography_tips_PHO17.insight02and03.vertorama.jpg",
//   "http://media.digitalcameraworld.com/files/2012/11/Black_and_white_landscape_photography_DCM131.shoot_creative.main_image_RGB.jpg",
//   "http://media.digitalcameraworld.com/files/2012/10/Vertorama_landscape_photography_tips_PHO17.insight02and03.vertorama.jpg",
//   "http://media.digitalcameraworld.com/files/2012/10/Vertorama_landscape_photography_tips_PHO17.insight02and03.vertorama.jpg",
//   "http://i.kinja-img.com/gawker-media/image/upload/s--v1mMDXQY--/c_fit,fl_progressive,q_80,w_636/otveb9dlpcz16you6de9.jpg"
// ];

const data = [
  ["colored landscapte", "http://media.digitalcameraworld.com/files/2012/10/Vertorama_landscape_photography_tips_PHO17.insight02and03.vertorama.jpg"],
  ["black & white photo", "http://media.digitalcameraworld.com/files/2012/11/Black_and_white_landscape_photography_DCM131.shoot_creative.main_image_RGB.jpg"],
  ["colored desert", camels],
  ["colored desert2", desert]
];

console.log(`the loaction of renderGallery is = ${__dirname} and path to images is ${pathToImages}`);

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


// var galleryButton = document.querySelector('#activate');
// galleryButton.addEventListener('click', function () {
//   alert("Button Pushed!");
//   renderGallery(data);
// });
