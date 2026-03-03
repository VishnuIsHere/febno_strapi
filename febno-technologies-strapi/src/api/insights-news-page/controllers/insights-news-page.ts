/**
 * insights-news-page controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::insights-news-page.insights-news-page', ({ strapi }) => ({
    async find(ctx) {
        // Fetch data
        const response = await super.find(ctx);

        // Only shape it if data exists
        if (response && response.data && response.data.attributes) {
            const attributes = response.data.attributes;

            // Map the `bullets` component array `[{ text: "..." }]` to a flat string array `["..."]`
            if (attributes.LatestNewsSection && attributes.LatestNewsSection.cards) {
                attributes.LatestNewsSection.cards = attributes.LatestNewsSection.cards.map((card: any) => {
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
