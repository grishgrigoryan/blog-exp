/**
 * restaurant controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::restaurant.restaurant',({ strapi }) => ({
  async findByCategory(ctx) {
    console.log("mtav",ctx.request);
    console.log("mtav",ctx.request.params);
    const sanitizedQueryParams = await this.sanitizeQuery(ctx);
    const { results, pagination } = await strapi
    .service("api::restaurant.restaurant")
    .findByCategory(sanitizedQueryParams);
    const sanitizedResults = await this.sanitizeOutput(results, ctx);

    return this.transformResponse(sanitizedResults, { pagination });
  },
}));
