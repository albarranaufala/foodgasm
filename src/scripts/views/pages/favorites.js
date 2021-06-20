import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createEmptyRestaurantListTemplate, createRestaurantListSkeletonTemplate } from '../templates/template-creator';

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
    const restaurantListElement = document.querySelector('restaurant-list');
    restaurantListElement.innerHTML = createRestaurantListSkeletonTemplate();
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    if (restaurants.length) {
      restaurantListElement.restaurants = restaurants;
    } else {
      restaurantListElement.innerHTML = createEmptyRestaurantListTemplate();
    }
  },
};

export default Favorites;
