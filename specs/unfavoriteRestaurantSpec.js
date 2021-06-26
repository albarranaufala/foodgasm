/* eslint-disable no-undef */
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import { createFavoriteButtonPresenterWithRestaurant } from './helpers/testFactories';

describe('Unfavorite A Restaurant', () => {
  const addFavoriteButton = () => {
    document.body.innerHTML = '<button-favorite></button-favorite>';
  };

  beforeEach(async () => {
    addFavoriteButton();
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should display unfavorite button when the restaurant has been favorited', async () => {
    const favoriteButton = await createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    expect(favoriteButton.innerText)
      .toEqual(' Remove from Favorite');
  });

  it('should not display favorite button when the restaurant has been favorited', async () => {
    const favoriteButton = await createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    expect(favoriteButton.innerText)
      .not
      .toEqual(' Add to Favorite');
  });

  it('should be able to remove favorited restaurant from the list', async () => {
    const favoriteButton = await createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    favoriteButton.querySelector('button').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });

  it('should not throw error if the unfavorited restaurant is not in the list', async () => {
    const favoriteButton = await createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    await FavoriteRestaurantIdb.deleteRestaurant(1);

    favoriteButton.querySelector('button').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
