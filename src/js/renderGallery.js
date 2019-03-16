import {renderThumbnail, renderLightBoxPhoto} from "./renderItem";
import 'jquery';

import '../img/IMG_3933.jpg';
import '../img/IMG_3951.jpg';
import '../img/IMG_3936e.jpg';
import '../img/IMG_3947.jpg';
import '../img/tin-can-phone.jpg'

// begin insert import
import Chip_sunset_2 from '../img3/Chip_sunset_2.jpg';
import IMG_20180105_125501 from '../img3/IMG_20180105_125501.jpg';
import IMG_3746 from '../img3/IMG_3746.jpg';
import IMG_3755 from '../img3/IMG_3755.jpg';
import IMG_3758 from '../img3/IMG_3758.jpg';
import IMG_3762 from '../img3/IMG_3762.jpg';
import IMG_3773 from '../img3/IMG_3773.jpg';
import IMG_3782_Edit from '../img3/IMG_3782_Edit.jpg';
import IMG_3793 from '../img3/IMG_3793.jpg';
import IMG_3840 from '../img3/IMG_3840.jpg';
import IMG_3860 from '../img3/IMG_3860.jpg';
import IMG_3866 from '../img3/IMG_3866.jpg';
import IMG_3921 from '../img3/IMG_3921.jpg';
import IMG_3938 from '../img3/IMG_3938.jpg';
import IMG_3947_Edit from '../img3/IMG_3947_Edit.jpg';
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
import IMG_4277_HDR from '../img3/IMG_4277_HDR.jpg';
import IMG_4307_HDR_Edit from '../img3/IMG_4307_HDR_Edit.jpg';
import IMG_4361_HDR from '../img3/IMG_4361_HDR.jpg';
import IMG_4371_HDR from '../img3/IMG_4371_HDR.jpg';
import IMG_4374 from '../img3/IMG_4374.jpg';
import IMG_4383_HDR_Edit from '../img3/IMG_4383_HDR_Edit.jpg';
import IMG_4401_HDR from '../img3/IMG_4401_HDR.jpg';
import IMG_4428_HDR from '../img3/IMG_4428_HDR.jpg';
import IMG_4440 from '../img3/IMG_4440.jpg';
import IMG_4452 from '../img3/IMG_4452.jpg';
import IMG_4456 from '../img3/IMG_4456.jpg';
import IMG_4476_Edit from '../img3/IMG_4476_Edit.jpg';
import IMG_4481_HDR_Edit from '../img3/IMG_4481_HDR_Edit.jpg';
import IMG_4504_HDR_Edit from '../img3/IMG_4504_HDR_Edit.jpg';
import IMG_4512_Edit from '../img3/IMG_4512_Edit.jpg';
import P1010027 from '../img3/P1010027.jpg';
import P1010036 from '../img3/P1010036.jpg';
import taswell_49_drawing__Windsong from '../img3/taswell_49_drawing__Windsong.jpg';


const data = [
[Chip_sunset_2, 'Windsong at Anchor (Rio Dulce)', 'full hull'],
[IMG_20180105_125501, 'Windsong View Aft Sailing', 'full hull'],
[IMG_3755, 'Windsong Transom View', 'full hull'],
[IMG_3758, 'Windsong Aft View', 'full hull'],
[IMG_3762, 'Windsong at Dock', 'full hull'],
[IMG_3793, 'Windsong Sailing Downwind at Dusk', 'full hull'],
[IMG_4064, 'Hard Dodger', 'full hull'],
[IMG_4086, 'Cockpit From Stern(w/o cushions)', 'full hull'],
[IMG_4101, 'Windsong Hull Starboard Front View', 'full hull'],
[IMG_4153, 'Cockpit with Cushions', 'full hull'],
[P1010027, 'Windsong Sailing from Front Quarter', 'full hull'],
[P1010036, 'Windsong Sailing from Aft', 'full hull'],
[taswell_49_drawing__Windsong, 'Windsong Plans', 'full hull'],
[IMG_3840, 'Windsong on Hard', 'hull'],
[IMG_4044_Edit, 'Ta Shing Brass Threshold Plate', 'hull'],
[IMG_4045_Edit, 'Stainless Steel Chock', 'hull'],
[IMG_4048, 'Foredeck Viewed From  Dodger', 'hull'],
[IMG_4061, 'Stainless Steel Cleat and Toe Rail', 'hull'],
[IMG_4135, 'Dorade', 'hull'],
[IMG_4141, 'Hard Dodger from Aft', 'hull'],
[IMG_4142, 'Cockpit Table', 'hull'],
[IMG_4147, 'Flag Pole', 'hull'],
[IMG_4154, 'Foredeck from behind Cockpit', 'hull'],
[IMG_4374, 'Guest Cabin  ', 'guest cabin'],
[IMG_4383_HDR_Edit, 'Guest Cabin Vanity', 'guest cabin'],
[IMG_4452, 'Crew Cabin', 'crew cabin'],
[IMG_4456, 'Crew Cabin', 'crew cabin'],
[IMG_4361_HDR, 'Guest Head', 'guest head'],
[IMG_4371_HDR, 'Guest Head', 'guest head'],
[IMG_3921, 'Salon Liquor Cabinet', 'salon'],
[IMG_3938, 'Salon Wine Cabinet Glass Holders', 'salon'],
[IMG_4270_HDR, 'Salon Cocktail Table', 'salon'],
[IMG_4307_HDR_Edit, 'Assembling Salon Large Table', 'salon'],
[IMG_4440, "Salon's Large Table", 'salon'],
[IMG_3782_Edit, 'Galley Starboard', 'galley'],
[IMG_4149, 'BBQ and Fiberglass Propane Tank', 'galley'],
[IMG_4277_HDR, 'Galley and Companionway Stairs', 'galley'],
[IMG_3947_Edit, 'Garmin Autopilot Class B Compact Drive Unit', 'nav'],
[IMG_4213_2, 'AIS and Sat Phone Antennas', 'nav'],
[IMG_4237_HDR, 'Navigation Station', 'nav'],
[IMG_4428_HDR, 'Navigation Station', 'nav'],
[IMG_3746, 'Port Aft Master Cabin Closet', 'master cabin'],
[IMG_4476_Edit, 'Master Cabin', 'master cabin'],
[IMG_4481_HDR_Edit, 'Master Cabin', 'master cabin'],
[IMG_4504_HDR_Edit, 'Master Cabin', 'master cabin'],
[IMG_4512_Edit, 'Master Cabin', 'master cabin'],
[IMG_4401_HDR, 'Master Head', 'master head'],
[IMG_3773, 'Andersen  42 ST variable speed electric winches ', 'sails'],
[IMG_4054, 'Rigid Boom Vang', 'sails'],
[IMG_4056, 'Main Sail Furler Spool', 'sails'],
[IMG_4062, 'Schaefer Genoa Furler', 'sails'],
[IMG_4068, 'Jib Halyard Winches', 'sails'],
[IMG_4080, 'Andersen 62 Electric Stainless Steel Variable Speed Winch', 'sails'],
[IMG_4088, 'Genoa Sheet Turning Block', 'sails'],
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
// end insert import

function hashchanged() {
  // alert($('#storyCollapse').attr('id'));
  $('#storyCollapse').each(function () {
    $(this).addClass('show');
  });
}

function openStory() {
  const hash = window.location.hash;
  if (hash) {
    hashchanged();
  } else {
    alert('home page');
  }
}

let thumbnailList, accordion, photoPhotos, story;

const load = () => {
  thumbnailList = document.querySelector('#thumbnails');
  accordion = document.querySelector('#accordionEx');
  photoPhotos = document.querySelector('#photoPhotos');

  window.addEventListener('hashchange', hashchanged);
  accordion.addEventListener('click', (e) => {
    let el = e.target.dataset.action;
    if (el === 'photo') {
      renderGallery(data, photoPhotos);
    }
  });

  openStory();
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
