import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createEmptyRestaurantListTemplate, createRestaurantItemTemplate } from '../templates/template-creator';

const Favorites = {
  async render() {
    return `
      <section>
        <article id="restaurants" class="container">
          <h2>
            Favorite Restaurants
          </h2>
          <div id="restaurantsContainer" class="restaurants-wrapper" />
        </article>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurantsContainer');
    if (restaurants.length) {
      restaurantsContainer.innerHTML = restaurants
        .map((restaurant) => createRestaurantItemTemplate(restaurant))
        .reduce((sum, restaurant) => sum + restaurant);
    } else {
      restaurantsContainer.innerHTML = createEmptyRestaurantListTemplate();
    }
  },
};

export default Favorites;
