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

export {
	createEmptyRestaurantListTemplate,
	createFetchFailedTemplate,
};
