/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
Feature('Review Restaurants');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('showing input fields to review', ({ I }) => {
  I.seeElement('restaurant-item a');

  I.click(locate('restaurant-item a').first());

  I.seeElement('#nameInput');
  I.seeElement('#reviewInput');
});

Scenario('submit customer review to a restaurant', ({ I }) => {
  I.seeElement('restaurant-item a');

  I.click(locate('restaurant-item a').first());

  I.seeElement('#nameInput');
  I.fillField('#nameInput', 'Albarra');

  const randomString = Math.random().toString(36).substring(7);
  I.seeElement('#reviewInput');
  I.fillField('#reviewInput', randomString);

  I.seeElement('#submitReview');
  I.click('#submitReview');

  I.see(randomString);
});
