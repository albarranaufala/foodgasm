import RestaurantsSource from '../../data/restaurants-source';
import { createFetchFailedTemplate, createRestaurantListSkeletonTemplate } from '../templates/template-creator';

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
              <picture>
                <source media="(max-width: 600px)" srcset="/images/heros/hero-image_2-small.jpg">
                <img src="/images/heros/hero-image_2-large.jpg" alt="hero image">
              </picture>
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
              <restaurant-list class="restaurants-wrapper" />
          </article>
      </section>
    `;
  },

  async afterRender() {
    const restaurantListElement = document.querySelector('restaurant-list');
    try {
      restaurantListElement.innerHTML = createRestaurantListSkeletonTemplate();
      const restaurants = await RestaurantsSource.getAll();
      restaurantListElement.restaurants = restaurants;
    } catch (_) {
      restaurantListElement.innerHTML = createFetchFailedTemplate();
    }
  },
};

export default Restaurants;
