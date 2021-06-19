import RestaurantsSource from '../../data/restaurants-source';
import UrlParser from '../../routes/url-parser';
import { createFetchFailedTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <section>
        <restaurant-detail class="restaurant-detail" />
      </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantDetailElement = document.querySelector('restaurant-detail');
    try {
      const restaurant = await RestaurantsSource.getById(url.id);
      restaurantDetailElement.restaurant = restaurant;
    } catch (_) {
      restaurantDetailElement.innerHTML = createFetchFailedTemplate();
    }
  },
};

export default Detail;
