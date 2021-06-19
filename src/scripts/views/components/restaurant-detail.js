/* eslint-disable indent */
/* eslint-disable no-underscore-dangle */
import RestaurantsSource from '../../data/restaurants-source';
import CONFIG from '../../globals/config';
import './button-favorite';

class RestaurantDetail extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  set reviewerName(reviewerName) {
    this._reviewerName = reviewerName;
  }

  set review(review) {
    this._review = review;
  }

  render() {
    this.innerHTML = `
      <div class="container">
        <div class="restaurant-detail-card">
          <div class="restaurant-detail-head mb-4">
            <div class="restaurant-detail-img mb-4">
              <img src="${CONFIG.BASE_LARGE_IMAGE_URL}/${this._restaurant.pictureId}" alt="${this._restaurant.name}">
            </div>
            <div class="restaurant-detail-info">
              <ul class="restaurant-detail-categories mb-2">
                ${this._restaurant.categories.map((category) => `<li>${category.name}</li>`).reduce((html, category) => html + category)}
              </ul>
              <h2>${this._restaurant.name}</h2>
              <div class="additional-info mb-4">
                <p>
                  <span class="rating">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#e3e327">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    ${this._restaurant.rating}
                  </span>
                </p>
                <p>
                  <span class="location">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#3d3d3d">
                      <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                    </svg>
                    ${this._restaurant.city}
                  </span>
                </p>
              </div>
              <p class="label">Address</p>
              <p class="mb-4">${this._restaurant.address}</p>
              <button-favorite />
            </div>
          </div>
          <p class="label">Description</p>
          <p class="mb-4">${this._restaurant.description}</p>
          <p class="label">Foods</p>
          <ul class="mb-4 menus">
            ${this._restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).reduce((html, food) => html + food)}
          </ul>
          <p class="label">Drinks</p>
          <ul class="mb-4 menus">
            ${this._restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).reduce((html, drink) => html + drink)}
          </ul>
          <p class="label">Reviews</p>
          <ul class="reviews mb-4">
            ${this._restaurant.customerReviews
              .map((review) => `
                <li>
                  <p class="name">${review.name}</p>
                  <p class="date">${review.date}</p>
                  <p class="review">${review.review}</p>
                </li>
              `)
              .reduce((html, review) => html + review)}
          </ul>
          <p class="label">Add Review</p>
          <div>
            <input id="nameInput" class="input mb-2" placeholder="Reviewer Name">
            <input id="reviewInput" class="input mb-2" placeholder="Review">
            <button id="submitReview" class="btn-review">Add Review</button>
          </div>
        </div>
      </div>
    `;

    const buttonFavorite = document.querySelector('button-favorite');
    buttonFavorite.restaurant = this._restaurant;

    const nameInput = document.querySelector('#nameInput');
    const reviewInput = document.querySelector('#reviewInput');
    const submitReview = document.querySelector('#submitReview');
    nameInput.addEventListener('input', (event) => {
      this.reviewerName = event.target.value;
    });
    reviewInput.addEventListener('input', (event) => {
      this.review = event.target.value;
    });
    submitReview.addEventListener('click', async () => {
      const reviews = await RestaurantsSource.postReview({
        id: this._restaurant.id,
        name: this._reviewerName,
        review: this._review,
      });
      this.restaurant = {
        ...this._restaurant,
        customerReviews: reviews,
      };
    });
  }
}

customElements.define('restaurant-detail', RestaurantDetail);
