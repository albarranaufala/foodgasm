import 'regenerator-runtime'; /* for async await transpile */
import '../styles/style.css';
import '../styles/responsive.css';
import '../styles/animation.css';
import { restaurants } from '../DATA.json';

import App from './views/app';
 
const app = new App({
  button: document.querySelector('#burgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});
 
window.addEventListener('load', () => {
  app.renderPage();
});

// const restaurantWrapperElement = document.querySelector('.restaurants-wrapper');
// const restaurantDOM = (restaurant) => (`
//     <a href="#" class="restaurant-item">
//       <div class="img-wrapper">
//         <img src="${restaurant.pictureId}" alt="Photo of ${restaurant.name}">
//       </div>
//       <div class="restaurant-info">
//           <h3>${restaurant.name}</h3>
//           <p>${restaurant.description}</p>
//           <div class="additional-info">
//               <span class="rating">
//                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#e3e327">
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                   </svg>
//                   ${restaurant.rating}
//               </span>
//               <span class="location">
//                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#3d3d3d">
//                       <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
//                   </svg>
//                   ${restaurant.city}
//               </span>
//           </div>
//       </div>
//     </a>
//   `);

// const renderRestaurants = (restaurantList) => {
//   restaurantWrapperElement.innerHTML = restaurantList
//     .map((restaurant) => restaurantDOM(restaurant))
//     .reduce((sum, restaurant) => sum + restaurant);
// };

// renderRestaurants(restaurants);
