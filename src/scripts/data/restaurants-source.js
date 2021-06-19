import API_ENDPOINT from "../globals/api-endpoint";
 
class RestaurantsSource {
  static async getAll() {
    const response = await fetch(API_ENDPOINT.RESTAURANTS);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }
 
  static async getById(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}
 
export default RestaurantsSource;