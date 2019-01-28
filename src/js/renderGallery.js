import {renderThumbnail, renderLightBoxPhoto} from "./renderItem";
import path from 'path';
// import camels from "../img2/camels-desert-landscape-53537.jpg";
// import desert from "../img2/daylight-desert-drought-459319.jpg";

import IMG_20180105_125501 from '../img3/IMG_20180105_125501.jpg';
import IMG_2146 from '../img3/IMG_2146.jpg';
import IMG_3752 from '../img3/IMG_3752.jpg';
import IMG_3755 from '../img3/IMG_3755.jpg';
import IMG_3758 from '../img3/IMG_3758.jpg';
import IMG_3762 from '../img3/IMG_3762.jpg';
import IMG_3773 from '../img3/IMG_3773.jpg';
import IMG_3774e from '../img3/IMG_3774e.jpg';
import IMG_3782 from '../img3/IMG_3782.jpg';
import IMG_3783 from '../img3/IMG_3783.jpg';
import IMG_3793 from '../img3/IMG_3793.jpg';
import IMG_3840 from '../img3/IMG_3840.jpg';
import IMG_3860 from '../img3/IMG_3860.jpg';
import IMG_3866 from '../img3/IMG_3866.jpg';
import IMG_3921 from '../img3/IMG_3921.jpg';
import IMG_4048 from '../img3/IMG_4048.jpg';
import IMG_4054 from '../img3/IMG_4054.jpg';
import IMG_4059 from '../img3/IMG_4059.jpg';
import IMG_4061 from '../img3/IMG_4061.jpg';
import IMG_4064 from '../img3/IMG_4064.jpg';
import IMG_4074 from '../img3/IMG_4074.jpg';
import IMG_4080 from '../img3/IMG_4080.jpg';
import IMG_4082 from '../img3/IMG_4082.jpg';
import IMG_4086 from '../img3/IMG_4086.jpg';
import IMG_4088 from '../img3/IMG_4088.jpg';
import IMG_4093 from '../img3/IMG_4093.jpg';
import IMG_4094 from '../img3/IMG_4094.jpg';
import IMG_4101 from '../img3/IMG_4101.jpg';
import IMG_4135 from '../img3/IMG_4135.jpg';
import IMG_4141 from '../img3/IMG_4141.jpg';
import IMG_4142 from '../img3/IMG_4142.jpg';
import IMG_4143 from '../img3/IMG_4143.jpg';
import IMG_4147 from '../img3/IMG_4147.jpg';
import IMG_4149 from '../img3/IMG_4149.jpg';
import IMG_4150 from '../img3/IMG_4150.jpg';
import IMG_4153 from '../img3/IMG_4153.jpg';
import IMG_4154 from '../img3/IMG_4154.jpg';
import IMG_4198 from '../img3/IMG_4198.jpg';
import IMG_4201 from '../img3/IMG_4201.jpg';
import P1010023 from '../img3/P1010023.jpg';
import P1010027 from '../img3/P1010027.jpg';
import P1010036 from '../img3/P1010036.jpg';






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

// const data = [
//   ["colored landscapte", "http://media.digitalcameraworld.com/files/2012/10/Vertorama_landscape_photography_tips_PHO17.insight02and03.vertorama.jpg"],
//   ["black & white photo", "http://media.digitalcameraworld.com/files/2012/11/Black_and_white_landscape_photography_DCM131.shoot_creative.main_image_RGB.jpg"],
//   ["colored desert", camels],
//   ["colored desert2", desert]
// ];



// const data = [{
//   "SourceFile": "IMG_20180105_125501.jpg",
//   "Title": "Windsong View Aft Sailing",
//   "Description": "hull"
// },
// {
//   "SourceFile": "IMG_2146.jpg",
//   "Title": "Windsong at Anchor",
//   "Description": "hull"
// },
// {
//   "SourceFile": "IMG_3752.jpg",
//   "Title": "Navigation Station",
//   "Description": "nav"
// },
// {
//   "SourceFile": "IMG_3755.jpg",
//   "Title": "Windsong Transom View",
//   "Description": "hull"
// },
// {
//   "SourceFile": "IMG_3758.jpg",
//   "Title": "Windsong Adventuras View",
//   "Description": "hull"
// },
// {
//   "SourceFile": "IMG_3762.jpg",
//   "Title": "Windsong at Adventuras Dock",
//   "Description": "hull"
// },
// {
//   "SourceFile": "IMG_3773-2.jpg",
//   "Title": "62 STAndersen above deck electric winches ",
//   "Description": "sails"
// },
// {
//   "SourceFile": "IMG_3773.jpg",
//   "Title": "62 STAndersen above deck electric winches ",
//   "Description": "hull"
// },
// {
//   "SourceFile": "IMG_3774e.jpg",
//   "Title": "40 ST Andersen above deck electric winches ",
//   "Description": "sails"
// },
// {
//   "SourceFile": "IMG_3782.jpg",
//   "Title": "Galley",
//   "Description": "galley"
// },
// {
//   "SourceFile": "IMG_3783.jpg",
//   "Title": "Galley",
//   "Description": "galley"
// },
// {
//   "SourceFile": "IMG_3793.jpg",
//   "Title": "Windsong Sailing Downwind at Night",
//   "Description": "hull"
// },
// {
//   "SourceFile": "IMG_3840.jpg",
//   "Title": "Windsong on Hard",
//   "Description": "hull"
// },
// {
//   "SourceFile": "IMG_3860-2.jpg",
//   "Title": "Bow Thruster Propeller",
//   "Description": "mech"
// },
// {
//   "SourceFile": "IMG_3860.jpg",
//   "Title": " Lewmar 250T Bow Thruster Propeller",
//   "Description": "mech"
// },
// {
//   "SourceFile": "IMG_3866.jpg",
//   "Title": "Max-Prop Classic Feathering Propeller",
//   "Description": "mech"
// },
// {
//   "SourceFile": "IMG_3921.jpg",
//   "Title": "Salon Liquor Cabinet",
//   "Description": "salon"
// },
// {
//   "SourceFile": "IMG_3947-Edit.jpg",
//   "Title": "Garmin Autopilot Class B Compact Drive Unit",
//   "Description": "hull"
// },
// {
//   "SourceFile": "IMG_4044-Edit.jpg",
//   "Title": "Tashing Brass Threshold Plate",
//   "Description": "hull"
// },
// {
//   "SourceFile": "IMG_4048.jpg",
//   "Title": "Foredeck viewed from  Dodger",
//   "Description": "hull"
// },
// {
//   "SourceFile": "IMG_4054.jpg",
//   "Title": "Rigid Boom Vang",
//   "Description": "sails"
// },
// {
//   "SourceFile": "IMG_4059.jpg",
//   "Title": "Maxwell 3500 Windless",
//   "Description": "mech"
// },
// {
//   "SourceFile": "IMG_4061.jpg",
//   "Title": "Stainless Steel Cleet and Toe Rail",
//   "Description": "hull"
// },
// {
//   "SourceFile": "IMG_4064.jpg",
//   "Title": "Hard Dodger",
//   "Description": "hull"
// },
// {
//   "SourceFile": "IMG_4074.jpg",
//   "Title": "Andersen 40 Electric Stainless Stell Variable Speed Winch",
//   "Description": "sails"
// },
// {
//   "SourceFile": "IMG_4080.jpg",
//   "Title": "Andersen 62 Electric Stainless Stell Variable Speed Winch",
//   "Description": "sails"
// },
// {
//   "SourceFile": "IMG_4082.jpg",
//   "Title": "Engine Room Fan Vent",
//   "Description": "mech"
// },
// {
//   "SourceFile": "IMG_4086.jpg",
//   "Title": "Cockpit From Stern(w/o cushions)",
//   "Description": "hull"
// },
// {
//   "SourceFile": "IMG_4088.jpg",
//   "Title": "Genoa Sheet Truning Block",
//   "Description": "sails"
// },
// {
//   "SourceFile": "IMG_4093.jpg",
//   "Title": "Fiberglass Propane Tank",
//   "Description": "hull"
// },
// {
//   "SourceFile": "IMG_4094.jpg",
//   "Title": "Andersen Traveller Winch",
//   "Description": "sails"
// },
// {
//   "SourceFile": "IMG_4101.jpg",
//   "Title": "Windsong Hull Port Front View",
//   "Description": "hull"
// },
// {
//   "SourceFile": "IMG_4135.jpg",
//   "Title": "Dorade",
//   "Description": "hull"
// },
// {
//   "SourceFile": "IMG_4141.jpg",
//   "Title": "Hard Dodger from Aft",
//   "Description": "hull"
// },
// {
//   "SourceFile": "IMG_4142.jpg",
//   "Title": "Cockpit Table",
//   "Description": "hull"
// },
// {
//   "SourceFile": "IMG_4143.jpg",
//   "Title": "Yanmar Motor Control Panel",
//   "Description": "mech"
// },
// {
//   "SourceFile": "IMG_4147.jpg",
//   "Title": "Flag Pole",
//   "Description": "hull"
// },
// {
//   "SourceFile": "IMG_4149.jpg",
//   "Title": "BBQ",
//   "Description": "hull"
// },
// {
//   "SourceFile": "IMG_4150.jpg",
//   "Title": "Garbaud Motor Crane",
//   "Description": "mech"
// },
// {
//   "SourceFile": "IMG_4153.jpg",
//   "Title": "Cockpit with Cusiions",
//   "Description": "hull"
// },
// {
//   "SourceFile": "IMG_4154.jpg",
//   "Title": "Foredeck from behind Cockpit",
//   "Description": "hull"
// },
// {
//   "SourceFile": "IMG_4178-Edit.jpg",
//   "Title": "Windsong Starbord Hull",
//   "Description": "hull"
// },
// {
//   "SourceFile": "IMG_4198.jpg",
//   "Title": "V-Birth Under Mattress Mat",
//   "Description": "guest"
// },
// {
//   "SourceFile": "IMG_4201.jpg",
//   "Title": "Bow Thruster Motor & Batteries",
//   "Description": "mech"
// },
// {
//   "SourceFile": "P1010023.jpg",
//   "Title": "Windsong Sailing",
//   "Description": "hull"
// },
// {
//   "SourceFile": "P1010027.jpg",
//   "Title": "Windsong Sailing from Front Quarter",
//   "Description": "hull"
// },
// {
//   "SourceFile": "P1010036.jpg",
//   "Title": "Windsong Sailing from Aft",
//   "Description": "hull"
// },
// {
//   "SourceFile": "taswell_49_drawing--Windsong.jpg",
//   "Title": "Windsong Plans",
//   "Description": "hull"
// }];


const data = [
  [IMG_20180105_125501, 'Windsong View Aft Sailing', 'hull'],
  [IMG_2146, 'Windsong at Anchor', 'hull'],
  [IMG_3752, 'Navigation Station', 'nav'],
  [IMG_3755, 'Windsong Transom View', 'hull'],
  [IMG_3758, 'Windsong Adventuras View', 'hull'],
  [IMG_3762, 'Windsong at Adventuras Dock', 'hull'],
  [IMG_3773, '62 STAndersen above deck electric winches ', 'hull'],
  [IMG_3774e, '40 ST Andersen above deck electric winches ', 'sails'],
  [IMG_3782, 'Galley', 'galley'],
  [IMG_3783, 'Galley', 'galley'],
  [IMG_3793, 'Windsong Sailing Downwind at Night', 'hull'],
  [IMG_3840, 'Windsong on Hard', 'hull'],
  [IMG_3860, ' Lewmar 250T Bow Thruster Propeller', 'mech'],
  [IMG_3866, 'Max-Prop Classic Feathering Propeller', 'mech'],
  [IMG_3921, 'Salon Liquor Cabinet', 'salon'],
  [IMG_4048, 'Foredeck viewed from  Dodger', 'hull'],
  [IMG_4054, 'Rigid Boom Vang', 'sails'],
  [IMG_4059, 'Maxwell 3500 Windless', 'mech'],
  [IMG_4061, 'Stainless Steel Cleet and Toe Rail', 'hull'],
  [IMG_4064, 'Hard Dodger', 'hull'],
  [IMG_4074, 'Andersen 40 Electric Stainless Stell Variable Speed Winch', 'sails'],
  [IMG_4080, 'Andersen 62 Electric Stainless Stell Variable Speed Winch', 'sails'],
  [IMG_4082, 'Engine Room Fan Vent', 'mech'],
  [IMG_4086, 'Cockpit From Stern(w/o cushions)', 'hull'],
  [IMG_4088, 'Genoa Sheet Truning Block', 'sails'],
  [IMG_4093, 'Fiberglass Propane Tank', 'hull'],
  [IMG_4094, 'Andersen Traveller Winch', 'sails'],
  [IMG_4101, 'Windsong Hull Port Front View', 'hull'],
  [IMG_4135, 'Dorade', 'hull'],
  [IMG_4141, 'Hard Dodger from Aft', 'hull'],
  [IMG_4142, 'Cockpit Table', 'hull'],
  [IMG_4143, 'Yanmar Motor Control Panel', 'mech'],
  [IMG_4147, 'Flag Pole', 'hull'],
  [IMG_4149, 'BBQ', 'hull'],
  [IMG_4150, 'Garbaud Motor Crane', 'mech'],
  [IMG_4153, 'Cockpit with Cusiions', 'hull'],
  [IMG_4154, 'Foredeck from behind Cockpit', 'hull'],
  [IMG_4198, 'V-Birth Under Mattress Mat', 'guest'],
  [IMG_4201, 'Bow Thruster Motor & Batteries', 'mech'],
  [P1010023, 'Windsong Sailing', 'hull'],
  [P1010027, 'Windsong Sailing from Front Quarter', 'hull'],
  [P1010036, 'Windsong Sailing from Aft', 'hull'],
]

const renderGallery = (data, location) => {
  const ul = document.createElement('ul');
  ul.classList = 'galleryList';
  location.appendChild(ul);


  data.forEach((el, index) => {  // el = {image, description, category} 
    // el.SourceFile = sourcePath(el);
    renderThumbnail(el, index + 1, ul);
  });

  data.forEach((el, index) => {  //  el = {image, description, category}
    renderLightBoxPhoto(el, index + 1, location, data.length);
  });
  
};

// const sourcePath = function(el) {
//   return `../img3/${el.SourceFile}`;
// }