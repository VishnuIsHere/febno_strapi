import controllerFactory from '../../../../src/api/insights-news-page/controllers/insights-news-page';

jest.mock('@strapi/strapi', () => {
    return {
        factories: {
            createCoreController: jest.fn((uid, cb) => {
                return cb;
            }),
        },
    };
});

describe('insights-news-page controller', () => {
    it('should format bullets in LatestNewsSection cards', async () => {
        // cb is returned by the mock, passing mock strapi
        const cb = controllerFactory as unknown as Function;
        const controllerDef = cb({ strapi: {} });

        // Provide a prototype for `super.find` to work
        const baseController = {
            find: jest.fn().mockResolvedValue({
                data: {
                    attributes: {
                        LatestNewsSection: {
                            cards: [
                                { id: 1, text: "Wait", bullets: [{ text: 'Bullet 1' }, { text: 'Bullet 2' }] },
                                { id: 2, text: "Wait 2" }
                            ]
                        }
                    }
                }
            })
        };

        Object.setPrototypeOf(controllerDef, baseController);

        const ctx = {};
        const response = await controllerDef.find(ctx);

        expect(baseController.find).toHaveBeenCalledWith(ctx);
        expect(response.data.attributes.LatestNewsSection.cards).toEqual([
            { id: 1, text: "Wait", bullets: ['Bullet 1', 'Bullet 2'] },
            { id: 2, text: "Wait 2", bullets: [] } // `bullets: []` added because `card.bullets ? ... : []`
        ]);
    });

    it('should handle missing data gracefully', async () => {
        const cb = controllerFactory as unknown as Function;
        const controllerDef = cb({ strapi: {} });

        const baseController = {
            find: jest.fn().mockResolvedValue({
                data: null
            })
        };

        Object.setPrototypeOf(controllerDef, baseController);

        const ctx = {};
        const response = await controllerDef.find(ctx);

        expect(response).toEqual({ data: null });
    });

    it('should handle response with data but missing cards gracefully', async () => {
        const cb = controllerFactory as unknown as Function;
        const controllerDef = cb({ strapi: {} });

        const baseController = {
            find: jest.fn().mockResolvedValue({
                data: {
                    attributes: {
                        LatestNewsSection: {} // no cards
                    }
                }
            })
        };

        Object.setPrototypeOf(controllerDef, baseController);

        const ctx = {};
        const response = await controllerDef.find(ctx);

        expect(response.data.attributes.LatestNewsSection).toEqual({});
    });
});
