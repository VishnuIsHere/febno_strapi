
export default (config, { strapi }) => {
    // Simple in-memory storage for rate limiting
    // Note: This resets on server restart
    const cache = new Map();

    return async (ctx, next) => {
        const ip = ctx.ip;
        const now = Date.now();

        // Configuration: 500 requests every 1 minute per IP
        const windowMs = 60 * 1000;
        const maxRequests = 500;

        // Skip rate limiting for the Admin Panel so development isn't blocked
        if (ctx.path.startsWith('/admin') || ctx.path.startsWith('/i18n')) {
            return await next();
        }

        const record = cache.get(ip);

        if (!record) {
            cache.set(ip, { count: 1, startTime: now });
        } else {
            if (now - record.startTime > windowMs) {
                // Reset window
                record.count = 1;
                record.startTime = now;
            } else {
                record.count++;
            }
        }

        if (cache.get(ip).count > maxRequests) {
            strapi.log.warn(`Rate limit exceeded for IP: ${ip}`);
            ctx.status = 429;
            ctx.body = {
                error: "Too Many Requests",
                message: "You have exceeded the request limit. Please try again in a minute."
            };
            return;
        }

        await next();
    };
};
