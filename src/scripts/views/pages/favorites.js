import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createEmptyRestaurantListTemplate } from '../templates/template-creator';

const Favorites = {
  async render() {
    return `
      <section>
        <article id="restaurants" class="container">
          <h2>
            Favorite Restaurants
          </h2>
          <restaurant-list class="restaurants-wrapper" />
        </article>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantListElement = document.querySelector('restaurant-list');
    if (restaurants.length) {
      restaurantListElement.restaurants = restaurants;
    } else {
      restaurantListElement.innerHTML = createEmptyRestaurantListTemplate();
    }
  },
};

export default Favorites;
