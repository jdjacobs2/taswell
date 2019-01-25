import {renderThumbnail, renderLightBoxPhoto} from "./renderItem";
import path from 'path';
// import camels from "../img2/camels-desert-landscape-53537.jpg";
// import desert from "../img2/daylight-desert-drought-459319.jpg";
// import photo1 from "../img3/P1010027.jpg";
// import photo2 from "../img3/P1010036.jpg";
// import photo3 from "../img3/taswell_49_drawing--Windsong.jpg";
// import { tes, data } from './datas';


// console.log(`this is tes: ${tes}`);
// console.log(JSON.stringify(data));
const data = [
  {
    "SourceFile": "IMG_2146.jpg",
    "Title": "Windsong at Anchor",
    "Description": "hull"
  },
  {
    "SourceFile": "IMG_3752.jpg",
    "Title": "Navigation Station",
    "Description": "nav"
  },
  {
    "SourceFile": "IMG_3758.jpg",
    "Title": "Windsong Advdenturas View",
    "Description": "hull"
  }
];

let imageData = [];  
for (let x = 0; x < data.length; x++) {
  if (data[x].Description === 'hull') {
    (
      async () => {
        const module = await import('../img3/IMG_3758.jpg');
        alert(module.default);
        const img = module.default;
        const temp = [img, data[x].Title];
        imageData.push(temp);
      }
    )();
  };
};

// alert(data);

let thumbnailList, accordion, safety;

const load = () => {
  thumbnailList = document.querySelector('#thumbnails');
  accordion = document.querySelector('#accordionEx');
  safety = document.querySelector('#safety');


  // safety.addEventListener('click', () => {
  //   // alert('safety clicked');
  //   const safetyPhotos = document.querySelector('#safetyPhotos')
  //   renderGallery(data, safetyPhotos);
  // });

  accordion.addEventListener('click', (e) => {
    let el = e.target.dataset.action;
    // alert('clicked child of accordion: ' + JSON.stringify(el));
    if (el === 'safety') {
      renderGallery(imageData, safetyPhotos);
   }
  });
}

window.onload = load;

const pathToImages = path.resolve(__dirname, './img/camels-desert-landscape-53537.jpg');  

// Not yet used:
// const images = [
//   "http://media.digitalcameraworld.com/files/2012/10/Vertorama_landscape_photography_tips_PHO17.insight02and03.vertorama.jpg",
//   "http://media.digitalcameraworld.com/files/2012/11/Black_and_white_landscape_photography_DCM131.shoot_creative.main_image_RGB.jpg",
//   "http://media.digitalcameraworld.com/files/2012/10/Vertorama_landscape_photography_tips_PHO17.insight02and03.vertorama.jpg",
//   "http://media.digitalcameraworld.com/files/2012/10/Vertorama_landscape_photography_tips_PHO17.insight02and03.vertorama.jpg",
//   "http://i.kinja-img.com/gawker-media/image/upload/s--v1mMDXQY--/c_fit,fl_progressive,q_80,w_636/otveb9dlpcz16you6de9.jpg"
// ];

// const data = [
//   ["http://media.digitalcameraworld.com/files/2012/10/Vertorama_landscape_photography_tips_PHO17.insight02and03.vertorama.jpg","colored landscapted"],
//   ["http://media.digitalcameraworld.com/files/2012/11/Black_and_white_landscape_photography_DCM131.shoot_creative.main_image_RGB.jpg", "black & white photo"],
//   [camels, "colored desert"],
//   [desert, "colored desert2"]
// ];

console.log(`the location of renderGallery is = ${__dirname} and path to images is ${pathToImages}`);

const renderGallery = (imageData, location) => {
  const ul = document.createElement('ul');
  ul.classList = 'galleryList';
  location.appendChild(ul);


  imageData.forEach((el, index) => {  // el = {img, title, } 
    renderThumbnail(el, index + 1, ul);
  });

  imageData.forEach((el, index) => {  // el = {img, title, }  a
    renderLightBoxPhoto(el, index + 1, location, data.length);
  });
  
};


// var galleryButton = document.querySelector('#activate');
// galleryButton.addEventListener('click', function () {
//   alert("Button Pushed!");
//   renderGallery(data);
// });
