/* eslint-disable indent */
/* eslint-disable no-tabs */

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

const createRestaurantListSkeletonTemplate = () => (`
	<div class="skeleton restaurant-item" style="height: 337px;"></div>
	<div class="skeleton restaurant-item" style="height: 337px;"></div>
	<div class="skeleton restaurant-item" style="height: 337px;"></div>
	<div class="skeleton restaurant-item" style="height: 337px;"></div>
	<div class="skeleton restaurant-item" style="height: 337px;"></div>
	<div class="skeleton restaurant-item" style="height: 337px;"></div>
	<div class="skeleton restaurant-item" style="height: 337px;"></div>
	<div class="skeleton restaurant-item" style="height: 337px;"></div>
	<div class="skeleton restaurant-item" style="height: 337px;"></div>
`);

const createRestaurantDetailSkeletonTemplate = () => (`
	<div class="container">
		<div class="restaurant-detail-card">
			<div class="restaurant-detail-head mb-4">
				<div class="restaurant-detail-img mb-4">
					<div class="skeleton" style="width: 100%; height: 347px;"></div>
				</div>
				<div class="restaurant-detail-info">
					<div class="skeleton mb-4" style="width: 100%; height: 1.5rem;"></div>
					<div class="skeleton mb-4" style="width: 80%; height: 1.5rem;"></div>
					<div class="skeleton mb-4" style="width: 50%; height: 1.5rem;"></div>
				</div>
			</div>
			<div class="skeleton mb-4" style="width: 20%; height: 1.5rem;"></div>
			<div class="skeleton mb-4" style="width: 100%; height: 1.5rem;"></div>
			<div class="skeleton mb-4" style="width: 80%; height: 1.5rem;"></div>
		</div>
	</div>
`);

export {
	createEmptyRestaurantListTemplate,
	createFetchFailedTemplate,
	createRestaurantListSkeletonTemplate,
	createRestaurantDetailSkeletonTemplate,
};
