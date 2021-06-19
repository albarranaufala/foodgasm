import Restaurants from '../views/pages/restaurants';
import Favorites from '../views/pages/favorites';
import Detail from '../views/pages/detail';
 
const routes = {
  '/': Restaurants, // default page
  '/restaurants': Restaurants,
  '/favorites': Favorites,
  '/restaurants/:id': Detail,
};
 
export default routes;
