import RestaurantsSource from '../../data/restaurants-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import { createFetchFailedTemplate, createRestaurantDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <section id="restaurantDetail" class="restaurant-detail">
      </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantDetail = document.getElementById('restaurantDetail');
    try {
      const restaurant = await RestaurantsSource.getById(url.id);
      restaurantDetail.innerHTML = createRestaurantDetailTemplate(restaurant);

      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#favoriteButton'),
        restaurant: {
          id: restaurant.id,
          name: restaurant.name,
          description: restaurant.description,
          rating: restaurant.rating,
          city: restaurant.city,
          pictureId: restaurant.pictureId,
        },
      });
    } catch (_) {
      restaurantDetail.innerHTML = createFetchFailedTemplate();
    }
  },
};

export default Detail;
