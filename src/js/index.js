import 'bootstrap';
import "./combined"
import "../scss/lightbox.css"
import '../scss/index.scss'
// import '../scss/main.css';
// import '../scss/input-elements.css';
// From Webpack Basics 2
import { secretParagraph, secretButton } from './dom-loader';

import { groupBy } from 'lodash-es';
import people from './people';
// import '../scss/style.scss';
import './image-example';


  
const managerGroups = groupBy(people, 'manager');

const begWebpack = document.querySelector('#beginner-webpack');
const root = document.createElement("div");
root.innerHTML = `<p></p><pre>${JSON.stringify(managerGroups, null, 2)}</pre>`;
// document.body.appendChild(root);
begWebpack.appendChild(root);

// added from Basic Webpack 2

var showSecret = false;

secretButton.addEventListener('click', toggleSecretState);
updateSecretParagraph();

function toggleSecretState() {
  showSecret = !showSecret;
  updateSecretParagraph();
  updateSecretButton();
}

function updateSecretButton() {
  if (showSecret) {
    secretButton.textContent = 'Hide the Secret';
  } else {
    secretButton.textContent = 'Show the Secret';
  }
}
 
function updateSecretParagraph() {
  if (showSecret) {
    secretParagraph.style.display = 'block';
  } else {
    secretParagraph.style.display = 'none';
  }
}