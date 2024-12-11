import { Common } from '@strapi/types';
const routes:Partial<Common.Route>[] = [
  { // Path defined with a URL parameter
    method: 'GET',
    path: '/restaurants/:category/:id',
    handler: 'api::restaurant.restaurant.findByCategory',
    config:{
      auth:false
    }
  },

]
export default {
  routes
}
