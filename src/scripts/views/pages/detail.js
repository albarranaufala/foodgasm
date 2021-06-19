import RestaurantsSource from '../../data/restaurants-source';
import UrlParser from '../../routes/url-parser';
import { createRestaurantDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <section id="restaurantDetail" class="restaurant-detail">
      </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantsSource.getById(url.id);
    const restaurantDetail = document.getElementById('restaurantDetail');
    restaurantDetail.innerHTML = createRestaurantDetailTemplate(restaurant);
  },
};

export default Detail;
