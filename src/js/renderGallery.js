import {renderThumbnail, renderLightBoxPhoto} from "./renderItem";

import '../img/IMG_3933.jpg';
import '../img/IMG_3951.jpg';
import '../img/IMG_3936e.jpg';
import '../img/IMG_3947.jpg';
import '../img/tin-can-phone.jpg'


import IMG_20180105_125501 from '../img3/IMG_20180105_125501.jpg';
import IMG_3755 from '../img3/IMG_3755.jpg';
import IMG_3758 from '../img3/IMG_3758.jpg';
import IMG_3762 from '../img3/IMG_3762.jpg';
import IMG_3773 from '../img3/IMG_3773.jpg';
import IMG_3793 from '../img3/IMG_3793.jpg';
import IMG_3840 from '../img3/IMG_3840.jpg';
import IMG_3860 from '../img3/IMG_3860.jpg';
import IMG_3866 from '../img3/IMG_3866.jpg';
import IMG_3921 from '../img3/IMG_3921.jpg';
import IMG_3938 from '../img3/IMG_3938.jpg';
import IMG_3947_Edit from '../img3/IMG_3947_Edit.jpg';
import IMG_3951 from '../img3/IMG_3951.jpg';
import IMG_4044_Edit from '../img3/IMG_4044_Edit.jpg';
import IMG_4045_Edit from '../img3/IMG_4045_Edit.jpg';
import IMG_4048 from '../img3/IMG_4048.jpg';
import IMG_4054 from '../img3/IMG_4054.jpg';
import IMG_4056 from '../img3/IMG_4056.jpg';
import IMG_4059 from '../img3/IMG_4059.jpg';
import IMG_4061 from '../img3/IMG_4061.jpg';
import IMG_4062 from '../img3/IMG_4062.jpg';
import IMG_4064 from '../img3/IMG_4064.jpg';
import IMG_4068 from '../img3/IMG_4068.jpg';
import IMG_4080 from '../img3/IMG_4080.jpg';
import IMG_4082 from '../img3/IMG_4082.jpg';
import IMG_4086 from '../img3/IMG_4086.jpg';
import IMG_4088 from '../img3/IMG_4088.jpg';
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
import IMG_4208_Edit from '../img3/IMG_4208_Edit.jpg';
import IMG_4209 from '../img3/IMG_4209.jpg';
import IMG_4213_2 from '../img3/IMG_4213_2.jpg';
import IMG_4237_HDR from '../img3/IMG_4237_HDR.jpg';
import IMG_4270_HDR from '../img3/IMG_4270_HDR.jpg';
import IMG_4271_HDR_Edit from '../img3/IMG_4271_HDR_Edit.jpg';
import IMG_4277_HDR from '../img3/IMG_4277_HDR.jpg';
import IMG_4307_HDR_Edit from '../img3/IMG_4307_HDR_Edit.jpg';
import IMG_4361_HDR from '../img3/IMG_4361_HDR.jpg';
import IMG_4371_HDR from '../img3/IMG_4371_HDR.jpg';
import P1010023 from '../img3/P1010023.jpg';
import P1010027 from '../img3/P1010027.jpg';
import P1010036 from '../img3/P1010036.jpg';
import taswell_49_drawing__Windsong from '../img3/taswell_49_drawing__Windsong.jpg';



const data = [
  [IMG_20180105_125501, 'Windsong View Aft Sailing', 'full hull'],
  [IMG_3755, 'Windsong Transom View', 'full hull'],
  [IMG_3758, 'Windsong Aft View', 'full hull'],
  [IMG_3762, 'Windsong at Dock', 'full hull'],
  [IMG_3793, 'Windsong Sailing Downwind at Dusk', 'full hull'],
  [IMG_4064, 'Hard Dodger', 'full hull'],
  [IMG_4086, 'Cockpit From Stern(w/o cushions)', 'full hull'],
  [IMG_4101, 'Windsong Hull Starboard Front View', 'full hull'],
  [IMG_4141, 'Hard Dodger from Aft', 'full hull'],
  [IMG_4147, 'Flag Pole', 'full hull'],
  [IMG_4153, 'Cockpit with Cusiions', 'full hull'],
  [IMG_4154, 'Foredeck from behind Cockpit', 'full hull'],
  [P1010023, 'Windsong Sailing', 'full hull'],
  [P1010036, 'Windsong Sailing from Aft', 'full hull'],
  [IMG_3840, 'Windsong on Hard', 'hull'],
  [IMG_4044_Edit, 'Ta Shing Brass Threshold Plate', 'hull'],
  [IMG_4045_Edit, 'Stainless Steel Chock', 'hull'],
  [IMG_4048, 'Foredeck Viewed From  Dodger', 'hull'],
  [IMG_4061, 'Stainless Steel Cleat and Toe Rail', 'hull'],
  [IMG_4135, 'Dorade', 'hull'],
  [IMG_4142, 'Cockpit Table', 'hull'],
  [P1010027, 'Windsong Sailing from Front Quarter', 'hull'],
  [taswell_49_drawing__Windsong, 'Windsong Plans', 'hull'],
  [IMG_4361_HDR, 'Guest Head', 'guest head'],
  [IMG_4371_HDR, 'Guest Head', 'guest head'],
  [IMG_3921, 'Salon Liquor Cabinet', 'salon'],
  [IMG_3938, 'Salon Wine Cabinet Glass Holders', 'salon'],
  [IMG_4270_HDR, 'Salon Cocktail Table', 'salon'],
  [IMG_4271_HDR_Edit, "Captain's Chairs", 'salon'],
  [IMG_4307_HDR_Edit, 'Assembling Salon Large Table', 'salon'],
  [IMG_4149, 'BBQ & Fiberglass Propane Tank', 'galley'],
  [IMG_4277_HDR, 'Galley & Companionway Stairs', 'galley'],
  [IMG_3947_Edit, 'Garmin Autopilot Class B Compact Drive Unit', 'nav'],
  [IMG_3951, 'Garmen 7608 Touchscreen Chart Plotter', 'nav'],
  [IMG_4213_2, 'AIS and Sat Phone Antennas', 'nav'],
  [IMG_4237_HDR, 'Navigation Station', 'nav'],
  [IMG_3773, '42 STAndersen variable speed electric winches ', 'sails'],
  [IMG_4054, 'Rigid Boom Vang', 'sails'],
  [IMG_4056, 'Main Sail Furler Spool', 'sails'],
  [IMG_4062, 'Schaefer Genoa Furler', 'sails'],
  [IMG_4068, 'Jib Halyard Winches', 'sails'],
  [IMG_4080, 'Andersen 62 Electric Stainless Stell Variable Speed Winch', 'sails'],
  [IMG_4088, 'Genoa Sheet Truning Block', 'sails'],
  [IMG_4094, 'Andersen Traveller Winch', 'sails'],
  [IMG_3860, ' Lewmar 250T Bow Thruster Propeller', 'mech'],
  [IMG_3866, 'Max-Prop Classic Feathering Propeller', 'mech'],
  [IMG_4059, 'Maxwell 3500 Windless', 'mech'],
  [IMG_4082, 'Engine Room Fan Vent', 'mech'],
  [IMG_4143, 'Yanmar Motor Control Panel', 'mech'],
  [IMG_4150, 'Garbaud Motor Crane', 'mech'],
  [IMG_4208_Edit, 'Life Raft', 'safety'],
  [IMG_4209, 'Man Over Board Module', 'safety']
];


let thumbnailList, accordion, photoPhotos;

const load = () => {
  thumbnailList = document.querySelector('#thumbnails');
  accordion = document.querySelector('#accordionEx');
  photoPhotos = document.querySelector('#photoPhotos');

  accordion.addEventListener('click', (e) => {
    let el = e.target.dataset.action;
    if (el === 'photo') {
      renderGallery(data, photoPhotos);
    }
  });
}

window.onload = load;




let clicked = false;  // only once renderGallery
const renderGallery = (data, location) => {
  if (!clicked) {
    clicked = true;  
    const ul = document.createElement('ul');
    ul.classList = 'galleryList';
    location.appendChild(ul);

    data.forEach((el, index) => {  // el = {image, description, category} 
      renderThumbnail(el, index + 1, ul);
    });

    data.forEach((el, index) => {  //  el = {image, description, category}
      renderLightBoxPhoto(el, index + 1, location, data.length);
    });
  };
 
  
};
