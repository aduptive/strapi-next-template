'use strict';

/**
 * customer controller
 */
import { factories } from '@strapi/strapi';

export default factories.createCoreController(
  'api::customer.customer',
  ({ strapi }) => ({
    async totalCustomers(ctx) {
      try {
        const count = await strapi.db.query('api::customer.customer').count();
        console.log("🚀 ~ totalCustomers ~ count:", count)
        return { data: { count } };
      } catch (err) {
        console.log(err);
      }
    },
  }),
);
