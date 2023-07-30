/**
 * This file contains the root router of your tRPC-backend
 */
import { publicProcedure, router } from '../trpc';
import { flatRouter } from './flat';

export const appRouter = router({
    healthcheck: publicProcedure.query(() => 'yay!'),

    flat: flatRouter,
});

export type AppRouter = typeof appRouter;
