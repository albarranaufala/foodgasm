/* eslint-disable no-undef */
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import { createFavoriteButtonPresenterWithRestaurant } from './helpers/testFactories';

describe('Favorite A Restaurant', () => {
  const addFavoriteButton = () => {
    document.body.innerHTML = '<button-favorite></button-favorite>';
  };

  beforeEach(() => {
    addFavoriteButton();
  });

  it('should show the favorite button when the restaurant has not been favorited before', async () => {
    const favoriteButton = await createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    expect(favoriteButton.innerText)
      .toEqual(' Add to Favorite');
  });

  it('should not show the remove from favorite button when the restaurant has not been favorited before', async () => {
    const favoriteButton = await createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    expect(favoriteButton.innerText)
      .not
      .toEqual(' Remove from Favorite');
  });

  it('should be able to favorite the movie', async () => {
    const restaurant = {
      id: 1,
    };

    const favoriteButton = await createFavoriteButtonPresenterWithRestaurant(restaurant);

    favoriteButton.querySelector('button').dispatchEvent(new Event('click'));
    const restaurantFromIdb = await FavoriteRestaurantIdb.getRestaurant(1);

    expect(restaurantFromIdb)
      .toEqual(jasmine.objectContaining(restaurant));

    FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should not add a restaurant again when its already favorited', async () => {
    const restaurant = {
      id: 1,
    };

    const favoriteButton = await createFavoriteButtonPresenterWithRestaurant(restaurant);

    await FavoriteRestaurantIdb.putRestaurant(restaurant);

    favoriteButton.querySelector('button').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants())
      .toEqual([jasmine.objectContaining(restaurant)]);

    FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should not add a restaurant when it has no id', async () => {
    const favoriteButton = await createFavoriteButtonPresenterWithRestaurant({});

    favoriteButton.querySelector('button').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
