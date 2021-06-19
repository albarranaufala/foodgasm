import RestaurantsSource from '../../data/restaurants-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Restaurants = {
  async render() {
    return `
        <section>
          <article id="hero">
              <div class="container">
                  <div class="left">
                      <h1>
                          All will be <span class="underline">foodgasm</span> in time
                      </h1>
                      <a href="#restaurants">
                          Let's Eat!
                      </a>
                  </div>
              </div>
          </article>
          <div class="desktop-down down">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
              </svg>
          </div>
          <article id="restaurants" class="container">
              <h2>
                  Beloved Restaurants
              </h2>
              <div id="restaurantsContainer" class="restaurants-wrapper" />
          </article>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantsSource.getAll();
    const restaurantsContainer = document.getElementById('restaurantsContainer');
    restaurantsContainer.innerHTML = restaurants
      .map((restaurant) => createRestaurantItemTemplate(restaurant))
      .reduce((sum, restaurant) => sum + restaurant);
  },
};

export default Restaurants;
