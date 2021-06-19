/* eslint-disable indent */
/* eslint-disable no-underscore-dangle */
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

class ButtonFavorite extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  async render() {
    const isRestaurantExist = !!(await FavoriteRestaurantIdb.getRestaurant(this._restaurant.id));
    if (isRestaurantExist) {
      this.renderLiked();
    } else {
      this.renderLike();
    }
  }

  renderLike() {
    this.innerHTML = `
      <button id="likeButton" class="btn-favorite" type="button">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#FFFFFF">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
        Add to Favorite
      </button>
    `;
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.putRestaurant({
        id: this._restaurant.id,
        name: this._restaurant.name,
        description: this._restaurant.description,
        city: this._restaurant.city,
        rating: this._restaurant.rating,
        pictureId: this._restaurant.pictureId,
      });
      this.render();
    });
  }

  renderLiked() {
    this.innerHTML = `
      <button id="likeButton" class="btn-favorite" type="button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#FFFFFF">
          <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
        </svg>
        Remove from Favorite
      </button>
    `;
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.deleteRestaurant(this._restaurant.id);
      this.render();
    });
  }
}

customElements.define('button-favorite', ButtonFavorite);
