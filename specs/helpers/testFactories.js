/* eslint-disable import/prefer-default-export */
import '../../src/scripts/views/components/button-favorite';

const createFavoriteButtonPresenterWithRestaurant = async (restaurant) => {
  const favoriteButton = document.querySelector('button-favorite');
  favoriteButton.restaurant = restaurant;
  await favoriteButton.render();

  return favoriteButton;
};

export { createFavoriteButtonPresenterWithRestaurant };
