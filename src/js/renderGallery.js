import {renderThumbnail, renderLightBoxPhoto} from "./renderItem";

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
    if (el === 'photo') {
      renderGallery(data, photoPhotos);
    }
  });
}

window.onload = load;


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
    renderThumbnail(el, index + 1, ul);
  });

  data.forEach((el, index) => {  //  el = {image, description, category}
    renderLightBoxPhoto(el, index + 1, location, data.length);
  });
  
};
