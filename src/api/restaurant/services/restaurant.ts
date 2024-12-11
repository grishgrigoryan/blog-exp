/**
 * restaurant service
 */

import { factories } from "@strapi/strapi";
import { Common }    from "@strapi/strapi";

export default factories.createCoreService("api::restaurant.restaurant", ({ strapi }) => ({
  async findByCategory(params) {
    console.log(JSON.stringify(params,null,2))
    const restorations =  strapi.entityService.findMany("api::restaurant.restaurant", {filters:{
      categories:{
        id:{$eq:params.id}
      }
      }});

    return restorations;
  }
}));
