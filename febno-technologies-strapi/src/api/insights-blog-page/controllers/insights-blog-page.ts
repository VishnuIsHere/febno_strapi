/**
 * insights-blog-page controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::insights-blog-page.insights-blog-page', ({ strapi }) => ({
    async find(ctx) {
        // Fetch data
        const response = await super.find(ctx);

        // Only shape it if data exists
        if (response && response.data && response.data.attributes) {
            const attributes = response.data.attributes;

            // Map the `bullets` component array `[{ text: "..." }]` to a flat string array `["..."]`
            if (attributes.LatestBlogsSection && attributes.LatestBlogsSection.cards) {
                attributes.LatestBlogsSection.cards = attributes.LatestBlogsSection.cards.map((card: any) => {
                    return {
                        ...card,
                        bullets: card.bullets ? card.bullets.map((b: any) => b.text) : []
                    };
                });
            }
        }

        return response;
    }
}));
