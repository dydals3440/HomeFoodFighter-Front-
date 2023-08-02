import { setupWorker } from 'msw';

import authHandler from './handlers/auth';
import recipeHandler from './handlers/recipe';

export const worker = setupWorker(...authHandler, ...recipeHandler);
