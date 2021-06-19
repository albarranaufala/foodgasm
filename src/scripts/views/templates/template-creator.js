/* eslint-disable indent */
/* eslint-disable no-tabs */
import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => (`
	<div class="container">
		<div class="restaurant-detail-card">
			<div class="restaurant-detail-head mb-4">
				<div class="restaurant-detail-img mb-4">
					<img src="${CONFIG.BASE_LARGE_IMAGE_URL}/${restaurant.pictureId}" alt="${restaurant.name}">
				</div>
				<div class="restaurant-detail-info">
					<ul class="restaurant-detail-categories mb-2">
						${restaurant.categories.map((category) => `<li>${category.name}</li>`).reduce((html, category) => html + category)}
					</ul>
					<h2>${restaurant.name}</h2>
					<div class="additional-info mb-4">
						<p>
							<span class="rating">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#e3e327">
									<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
								</svg>
								${restaurant.rating}
							</span>
						</p>
						<p>
							<span class="location">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#3d3d3d">
									<path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
								</svg>
								${restaurant.city}
							</span>
						</p>
					</div>
					<p class="label">Address</p>
					<p class="mb-4">${restaurant.address}</p>
					<div id="favoriteButton"></div>
				</div>
			</div>
			<p class="label">Description</p>
			<p class="mb-4">${restaurant.description}</p>
			<p class="label">Foods</p>
			<ul class="mb-4 menus">
				${restaurant.menus.foods
					.map((food) => `<li>${food.name}</li>`)
					.reduce((html, food) => html + food)}
			</ul>
			<p class="label">Drinks</p>
			<ul class="mb-4 menus">
				${restaurant.menus.drinks
					.map((drink) => `<li>${drink.name}</li>`)
					.reduce((html, drink) => html + drink)}
			</ul>
			<p class="label">Reviews</p>
			<ul class="reviews">
				${restaurant.customerReviews
					.map((review) => `
						<li>
							<p class="name">${review.name}</p>
							<p class="date">${review.date}</p>
							<p class="review">${review.review}</p>
						</li>
					`)
					.reduce((html, review) => html + review)}
			</ul>
		</div>
	</div>
`);

const createRestaurantItemTemplate = (restaurant) => (`
	<a href="#/restaurants/${restaurant.id}" class="restaurant-item">
		<div class="img-wrapper">
			<img src="${CONFIG.BASE_SMALL_IMAGE_URL}/${restaurant.pictureId}" alt="Photo of ${restaurant.name}">
		</div>
		<div class="restaurant-info">
			<h3>${restaurant.name}</h3>
			<p>${restaurant.description}</p>
			<div class="additional-info">
				<span class="rating">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#e3e327">
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
					</svg>
					${restaurant.rating}
				</span>
				<span class="location">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#3d3d3d">
						<path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
					</svg>
					${restaurant.city}
				</span>
			</div>
		</div>
	</a>
`);

const createLikeButtonTemplate = () => (`
	<button id="likeButton" class="btn-favorite" type="button">
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#FFFFFF">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
		</svg>
		Add to Favorite
	</button>
`);

const createLikedButtonTemplate = () => (`
	<button id="likeButton" class="btn-favorite" type="button">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#FFFFFF">
			<path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
		</svg>
		Remove from Favorite
	</button>
`);

const createEmptyRestaurantListTemplate = () => (`
	<p class="empty-list">
		There are no restaurants in this list
	</p>
`);

const createFetchFailedTemplate = () => (`
	<p class="empty-list">
		Failed to get data. please check your connection and try again.
	</p>
`);

export {
	createRestaurantItemTemplate,
	createRestaurantDetailTemplate,
	createLikeButtonTemplate,
	createLikedButtonTemplate,
	createEmptyRestaurantListTemplate,
	createFetchFailedTemplate,
};
