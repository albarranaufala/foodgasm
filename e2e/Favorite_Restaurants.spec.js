/* eslint-disable no-undef */
const assert = require('assert');

Feature('Favorite Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorites');
});

Scenario('showing empty favorited restaurant', ({ I }) => {
  I.seeElement('restaurant-list');
  I.see('There are no restaurants in this list', '.empty-list');
});

Scenario('favorite a restaurant', async ({ I }) => {
  I.see('There are no restaurants in this list', '.empty-list');

  I.amOnPage('/');

  I.seeElement('restaurant-item a');

  const firstRestaurantTitle = await I.grabTextFrom(locate('restaurant-item h3').first());
  I.click(locate('restaurant-item a').first());

  I.seeElement('button-favorite button');
  I.see('Add to Favorite', 'button-favorite button');
  I.click('button-favorite button');
  I.see('Remove from Favorite', 'button-favorite button');

  I.amOnPage('/#/favorites');
  I.seeElement('restaurant-item');

  const favoritedRestaurantTitle = await I.grabTextFrom('restaurant-item h3');
  assert.strictEqual(firstRestaurantTitle, favoritedRestaurantTitle);
});

Scenario('unfavorite a restaurant', async ({ I }) => {
  I.see('There are no restaurants in this list', '.empty-list');

  I.amOnPage('/');

  I.seeElement('restaurant-item a');

  const firstRestaurantTitle = await I.grabTextFrom(locate('restaurant-item h3').first());
  I.click(locate('restaurant-item a').first());

  I.seeElement('button-favorite button');
  I.see('Add to Favorite', 'button-favorite button');
  I.click('button-favorite button');
  I.see('Remove from Favorite', 'button-favorite button');

  I.amOnPage('/#/favorites');
  I.seeElement('restaurant-item');

  const favoritedRestaurantTitle = await I.grabTextFrom('restaurant-item h3');
  assert.strictEqual(firstRestaurantTitle, favoritedRestaurantTitle);

  I.click(locate('restaurant-item a').first());

  I.seeElement('button-favorite button');
  I.see('Remove from Favorite', 'button-favorite button');
  I.click('button-favorite button');
  I.see('Add to Favorite', 'button-favorite button');

  I.amOnPage('/#/favorites');
  I.see('There are no restaurants in this list', '.empty-list');
});
